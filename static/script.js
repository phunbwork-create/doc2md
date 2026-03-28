/* ═══════════════════════════════════════════════════
   Doc2MD Template Analyzer — Client Logic
   ═══════════════════════════════════════════════════ */

(function () {
    'use strict';

    // ─── DOM Elements ────────────────
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('file-input');
    const btnBrowse = document.getElementById('btn-browse');
    const btnAnalyze = document.getElementById('btn-analyze');
    const btnRemove = document.getElementById('btn-remove');
    const fileInfo = document.getElementById('file-info');
    const fileName = document.getElementById('file-name');
    const fileSize = document.getElementById('file-size');
    const dropzoneContent = document.querySelector('.dropzone-content');

    const uploadSection = document.getElementById('upload-section');
    const loadingSection = document.getElementById('loading-section');
    const resultSection = document.getElementById('result-section');

    const resultFilename = document.getElementById('result-filename');
    const statLines = document.getElementById('stat-lines');
    const statSize = document.getElementById('stat-size');
    const statOriginal = document.getElementById('stat-original');

    const tabPreview = document.getElementById('tab-preview');
    const tabSource = document.getElementById('tab-source');
    const panePreview = document.getElementById('pane-preview');
    const paneSource = document.getElementById('pane-source');
    const markdownPreview = document.getElementById('markdown-preview');
    const sourceCode = document.getElementById('source-code');

    const btnCopy = document.getElementById('btn-copy');
    const btnDownload = document.getElementById('btn-download');
    const btnAnother = document.getElementById('btn-another');

    const loadingStatus = document.getElementById('loading-status');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    const headerBadge = document.querySelector('.header-badge span:last-child');

    // ─── State ───────────────────────
    let selectedFile = null;
    let markdownContent = '';
    let mdFilename = '';

    // ─── Utility: Format file size ───
    function formatSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }

    // ─── Utility: Show toast ─────────
    function showToast(msg, duration = 3000) {
        toastMessage.textContent = msg;
        toast.hidden = false;
        toast.classList.remove('hide');
        setTimeout(() => {
            toast.classList.add('hide');
            setTimeout(() => { toast.hidden = true; }, 300);
        }, duration);
    }

    // ─── Utility: Simple Markdown → HTML ─
    function renderMarkdown(md) {
        let html = md;

        // Escape HTML first
        html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

        // Horizontal rules
        html = html.replace(/^---$/gm, '<hr>');

        // Headers (h1–h3)
        html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
        html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
        html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

        // Bold + italic
        html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
        html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

        // Strikethrough
        html = html.replace(/~~(.+?)~~/g, '<del>$1</del>');

        // Inline code
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Blockquotes
        html = html.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');

        // Tables
        html = renderTables(html);

        // Lists (simple approach)
        html = renderLists(html);

        // Paragraphs (lines that aren't already wrapped)
        html = html.replace(/^(?!<[hbupold\-]|<\/?[hbupold]|<hr|<table|<tr|<t[dh]|<blockquote|<li|<ul|<ol|\s*$)(.+)$/gm, '<p>$1</p>');

        // Clean up multiple <blockquote>s
        html = html.replace(/<\/blockquote>\n<blockquote>/g, '<br>');

        return html;
    }

    function renderTables(html) {
        const lines = html.split('\n');
        const result = [];
        let inTable = false;
        let tableRows = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('|') && line.endsWith('|')) {
                // Check if it's a separator row
                if (/^\|[\s\-:|]+\|$/.test(line)) {
                    continue; // Skip separator
                }
                if (!inTable) {
                    inTable = true;
                    tableRows = [];
                }
                const cells = line.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
                tableRows.push(cells.map(c => c.trim()));
            } else {
                if (inTable) {
                    result.push(buildTable(tableRows));
                    inTable = false;
                    tableRows = [];
                }
                result.push(lines[i]);
            }
        }
        if (inTable) {
            result.push(buildTable(tableRows));
        }
        return result.join('\n');
    }

    function buildTable(rows) {
        if (rows.length === 0) return '';
        let html = '<table>';
        // First row as header
        html += '<thead><tr>';
        rows[0].forEach(cell => { html += `<th>${cell}</th>`; });
        html += '</tr></thead>';
        if (rows.length > 1) {
            html += '<tbody>';
            for (let i = 1; i < rows.length; i++) {
                html += '<tr>';
                rows[i].forEach(cell => { html += `<td>${cell}</td>`; });
                html += '</tr>';
            }
            html += '</tbody>';
        }
        html += '</table>';
        return html;
    }

    function renderLists(html) {
        const lines = html.split('\n');
        const result = [];
        let inList = false;
        let listType = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const ulMatch = line.match(/^(\s*)- (.+)$/);
            const olMatch = line.match(/^(\s*)\d+\. (.+)$/);

            if (ulMatch) {
                if (!inList || listType !== 'ul') {
                    if (inList) result.push(listType === 'ul' ? '</ul>' : '</ol>');
                    result.push('<ul>');
                    inList = true;
                    listType = 'ul';
                }
                result.push(`<li>${ulMatch[2]}</li>`);
            } else if (olMatch) {
                if (!inList || listType !== 'ol') {
                    if (inList) result.push(listType === 'ul' ? '</ul>' : '</ol>');
                    result.push('<ol>');
                    inList = true;
                    listType = 'ol';
                }
                result.push(`<li>${olMatch[2]}</li>`);
            } else {
                if (inList) {
                    result.push(listType === 'ul' ? '</ul>' : '</ol>');
                    inList = false;
                }
                result.push(line);
            }
        }
        if (inList) {
            result.push(listType === 'ul' ? '</ul>' : '</ol>');
        }
        return result.join('\n');
    }

    // ─── File Selection ──────────────
    function selectFile(file) {
        if (!file) return;

        if (!file.name.toLowerCase().endsWith('.docx')) {
            showToast('⚠️ Chỉ chấp nhận file .docx!', 3000);
            return;
        }

        selectedFile = file;
        fileName.textContent = file.name;
        fileSize.textContent = formatSize(file.size);

        dropzoneContent.hidden = true;
        fileInfo.hidden = false;
        btnAnalyze.disabled = false;

        headerBadge.textContent = 'File đã sẵn sàng';
    }

    function clearFile() {
        selectedFile = null;
        fileInput.value = '';
        dropzoneContent.hidden = false;
        fileInfo.hidden = true;
        btnAnalyze.disabled = true;
        headerBadge.textContent = 'Sẵn sàng phân tích';
    }

    // ─── Drag & Drop ─────────────────
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('drag-over');
    });

    dropzone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropzone.classList.remove('drag-over');
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        selectFile(file);
    });

    // ─── Browse Button ───────────────
    btnBrowse.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            selectFile(fileInput.files[0]);
        }
    });

    // ─── Remove Button ───────────────
    btnRemove.addEventListener('click', clearFile);

    // ─── Loading animation steps ─────
    function animateLoadingSteps() {
        const steps = [
            { id: 'step-read', text: 'Đọc cấu trúc file .docx...', delay: 0 },
            { id: 'step-styles', text: 'Phân tích styles và định dạng...', delay: 1000 },
            { id: 'step-content', text: 'Phân tích nội dung chi tiết...', delay: 2500 },
            { id: 'step-generate', text: 'Tạo Markdown template...', delay: 4000 },
        ];

        steps.forEach(step => {
            setTimeout(() => {
                // Mark previous as done
                const el = document.getElementById(step.id);
                if (el) {
                    // Set all previous steps to done
                    const allSteps = document.querySelectorAll('.loader-step');
                    allSteps.forEach(s => {
                        if (s.id !== step.id) {
                            const idx1 = steps.findIndex(st => st.id === s.id);
                            const idx2 = steps.findIndex(st => st.id === step.id);
                            if (idx1 < idx2) s.classList.add('done');
                        }
                        s.classList.remove('active');
                    });
                    el.classList.add('active');
                    loadingStatus.textContent = step.text;
                }
            }, step.delay);
        });
    }

    // ─── Analyze Upload ──────────────
    btnAnalyze.addEventListener('click', async () => {
        if (!selectedFile) return;

        // Show loading
        uploadSection.hidden = true;
        resultSection.hidden = true;
        loadingSection.hidden = false;
        headerBadge.textContent = 'Đang phân tích...';

        // Reset loading steps
        document.querySelectorAll('.loader-step').forEach(s => {
            s.classList.remove('active', 'done');
        });
        document.getElementById('step-read').classList.add('active');
        animateLoadingSteps();

        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.detail || 'Upload thất bại');
            }

            const data = await res.json();

            markdownContent = data.markdown;
            mdFilename = data.filename;

            // Fill stats
            const mdLines = markdownContent.split('\n').length;
            statLines.textContent = mdLines.toLocaleString();
            statSize.textContent = formatSize(new Blob([markdownContent]).size);
            statOriginal.textContent = formatSize(data.size);
            resultFilename.textContent = `${data.original_filename} → ${mdFilename}`;

            // Render preview
            markdownPreview.innerHTML = renderMarkdown(markdownContent);
            sourceCode.textContent = markdownContent;

            // Show result
            loadingSection.hidden = true;
            resultSection.hidden = false;
            headerBadge.textContent = 'Phân tích hoàn tất ✓';

            showToast('✅ Phân tích thành công! Sẵn sàng download.');

        } catch (err) {
            loadingSection.hidden = true;
            uploadSection.hidden = false;
            headerBadge.textContent = 'Lỗi phân tích';
            showToast('❌ ' + err.message, 5000);
        }
    });

    // ─── Tabs ────────────────────────
    tabPreview.addEventListener('click', () => {
        tabPreview.classList.add('active');
        tabSource.classList.remove('active');
        panePreview.hidden = false;
        paneSource.hidden = true;
    });

    tabSource.addEventListener('click', () => {
        tabSource.classList.add('active');
        tabPreview.classList.remove('active');
        paneSource.hidden = false;
        panePreview.hidden = true;
    });

    // ─── Copy ────────────────────────
    btnCopy.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(markdownContent);
            showToast('📋 Đã copy nội dung Markdown!');
        } catch {
            // Fallback
            const ta = document.createElement('textarea');
            ta.value = markdownContent;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast('📋 Đã copy nội dung Markdown!');
        }
    });

    // ─── Download .md ────────────────
    btnDownload.addEventListener('click', () => {
        const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = mdFilename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast(`📥 Đã tải xuống ${mdFilename}`);
    });

    // ─── Download .docx ──────────────
    const btnDownloadDocx = document.getElementById('btn-download-docx');
    btnDownloadDocx.addEventListener('click', async () => {
        if (!markdownContent) return;

        const originalText = btnDownloadDocx.innerHTML;
        btnDownloadDocx.disabled = true;
        btnDownloadDocx.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Đang tạo...`;

        try {
            const docxFilename = mdFilename.replace(/\.md$/, '.docx') || 'output.docx';
            const titleMatch = markdownContent.match(/^#\s+(.+)$/m);
            const docTitle = titleMatch ? titleMatch[1] : 'SRS Document';

            const res = await fetch('/api/generate-docx', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: docTitle,
                    content: markdownContent,
                    filename: docxFilename
                })
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.detail || 'Lỗi tạo file .docx');
            }

            // Trigger download from blob
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = docxFilename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast(`📄 Đã tải xuống ${docxFilename}`);

        } catch (err) {
            showToast('❌ ' + err.message, 5000);
        } finally {
            btnDownloadDocx.disabled = false;
            btnDownloadDocx.innerHTML = originalText;
        }
    });


    // ─── Analyze Another ─────────────
    btnAnother.addEventListener('click', () => {
        resultSection.hidden = true;
        uploadSection.hidden = false;
        clearFile();
        markdownContent = '';
        mdFilename = '';

        // Reset tabs
        tabPreview.classList.add('active');
        tabSource.classList.remove('active');
        panePreview.hidden = false;
        paneSource.hidden = true;

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

})();
