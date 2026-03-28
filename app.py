"""
Doc2MD Template - FastAPI Backend
Upload .docx files and get detailed Markdown template analysis.
Also supports generating .docx from structured SRS content.
"""

import os
import io
import tempfile
import shutil
from fastapi import FastAPI, UploadFile, File, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse
import uvicorn

from docx_parser import parse_docx_to_md
from docx_generator import build_srs_docx

app = FastAPI(title="Doc2MD Template Analyzer")

# Static files
STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")
os.makedirs(STATIC_DIR, exist_ok=True)


@app.post("/api/upload")
async def upload_docx(file: UploadFile = File(...)):
    """
    Upload file .docx và trả về nội dung Markdown phân tích chi tiết.
    """
    # Validate file type
    if not file.filename.lower().endswith('.docx'):
        raise HTTPException(
            status_code=400,
            detail="Chỉ chấp nhận file .docx. Vui lòng upload đúng định dạng."
        )

    # Save uploaded file to temp
    temp_dir = tempfile.mkdtemp()
    temp_path = os.path.join(temp_dir, file.filename)

    try:
        with open(temp_path, "wb") as f:
            content = await file.read()
            f.write(content)

        # Parse docx to markdown
        md_content = parse_docx_to_md(temp_path)

        # Generate output filename
        base_name = os.path.splitext(file.filename)[0]
        md_filename = f"{base_name}_template.md"

        return JSONResponse(content={
            "success": True,
            "filename": md_filename,
            "original_filename": file.filename,
            "markdown": md_content,
            "size": len(content),
        })

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Lỗi khi phân tích file: {str(e)}"
        )
    finally:
        # Cleanup temp files
        shutil.rmtree(temp_dir, ignore_errors=True)


@app.post("/api/generate-docx")
async def generate_docx_endpoint(request: Request):
    """
    Nhận thông tin từ client và trả về file .docx đã được generate.
    Body JSON: { "title": "...", "content": "...", "filename": "..." }
    """
    try:
        body = await request.json()
        title = body.get("title", "SRS Document")
        content = body.get("content", "")
        filename = body.get("filename", "output.docx")
        if not filename.endswith(".docx"):
            filename += ".docx"

        # Generate docx in memory
        doc_bytes = build_srs_docx(title=title, markdown_content=content)

        return StreamingResponse(
            io.BytesIO(doc_bytes),
            media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            headers={"Content-Disposition": f'attachment; filename="{filename}"'}
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Lỗi tạo file .docx: {str(e)}")


@app.get("/")
async def serve_frontend():
    """Serve the frontend HTML."""
    return FileResponse(os.path.join(STATIC_DIR, "index.html"))


# Mount static files AFTER defining routes
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


if __name__ == "__main__":
    print("🚀 Doc2MD Template Analyzer — http://localhost:8000")
    uvicorn.run(app, host="0.0.0.0", port=8000)
