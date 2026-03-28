# 📄 SRS: HỆ THỐNG QUẢN LÝ KHÁCH HÀNG (CRM)

> File này được tạo dựa trên template rule từ `Customer Name_Project Name_System Requirement Specification_v0.7.docx`
> Tuân thủ đầy đủ các quy định về format, styles, và cấu trúc nội dung.

---

# QUY ĐỊNH ĐỊNH DẠNG ÁP DỤNG

> Khi chuyển đổi file này sang .docx, hãy tuân thủ các quy định sau:

## Page Setup
- Khổ giấy: 21.59 cm x 27.94 cm (Letter)
- Hướng giấy: Dọc (Portrait)
- Lề trên: 0.84 cm | Lề dưới: 2.01 cm | Lề trái: 1.91 cm | Lề phải: 1.83 cm

## Styles
- **Heading 1**: Font Calibri, 14pt, In đậm, Màu #1F3864, Khoảng cách sau 3pt, Giãn dòng 1.0
- **Heading 2**: Font Calibri, 12pt, In đậm, Màu #1F3864, Khoảng cách trước 12pt, Khoảng cách sau 12pt, Giãn dòng 1.0
- **Heading 3**: Font Calibri, 11pt, In đậm, Màu #1F3864, Khoảng cách trước 6pt, Khoảng cách sau 6pt, Giãn dòng 1.0
- **Normal**: Font Calibri, 11pt, Màu #000000
- **List Paragraph**: Font Calibri, 11pt, Khoảng cách trước 2pt, Khoảng cách sau 2pt, Giãn dòng 1.0, Thụt đầu dòng -0.63cm

## Bảng (Table)
- Header row: Background #D9D9D9, Font Calibri 11pt In đậm
- Data rows: Font Calibri 11pt, Màu #000000
- UC Info Table: Cột 1 (label) width ~4cm, Background #D9D9D9, In đậm | Cột 2 (value) width ~13.77cm
- Business Rules Table: 3 cột (Step ~1.46cm, BR Code ~1.78cm, Description ~14.55cm)

---

# NỘI DUNG TÀI LIỆU

---

## `[Trang bìa — Căn giữa (Center)]`

`[Logo khách hàng — Hình ảnh: 3.79cm x 2.27cm — Căn trái]`

**ABC CORPORATION – HỆ THỐNG QUẢN LÝ KHÁCH HÀNG (CRM)**
`Style: Normal, Căn giữa, Font Calibri 11pt`

**Đặc tả yêu cầu hệ thống (System Requirement Specification)**
`Style: Normal, Căn giữa, Font Calibri 11pt`

**Cho ứng dụng CRM**
`Style: Normal, Căn giữa, Font Calibri 11pt`

**Phiên bản: 1.0**
`Style: Normal, Căn giữa, Font Calibri 11pt`

**Hà Nội, Tháng 03/2026**
`Style: Normal, Căn giữa, Font Calibri 11pt, In đậm`

---

## `[Trang phê duyệt — Approval Page]`

`Style: Normal, Căn đều (Justify), Khoảng cách sau 6pt, Giãn dòng 1.15`

Việc xác nhận trên tài liệu này bởi đại diện ủy quyền của ABC Corporation cho thấy sự đồng ý giữa ABC Corporation và đơn vị phát triển về tài liệu "CRM – Đặc tả yêu cầu hệ thống".

`Style: Normal, Căn đều (Justify)`

### Bảng phê duyệt
`Table: 13 hàng x 4 cột`

| Cột 1 (2.85cm, In đậm) | Cột 2 (6.34cm) | Cột 3 (2.99cm) | Cột 4 (4.31cm) |
|---|---|---|---|
| Người soạn: | (Đơn vị phát triển) Business Analyst | Chữ ký: | ____________________ |
| | | Ngày: | ____/____/____ |
| | | | |
| | | | |
| Người review: | (Đơn vị phát triển) Project Manager | Chữ ký: | ____________________ |
| | | Ngày: | ____/____/____ |
| | | | |
| Hỗ trợ bởi: | (ABC Corporation) | Chữ ký: | ____________________ |
| | | Ngày: | ____/____/____ |
| | | | |
| | | | |
| Phê duyệt bởi: | (ABC Corporation) | Chữ ký: | ____________________ |
| | | Ngày: | ____/____/____ |

---

## `[Lịch sử phiên bản — Revision History]`

`Style: Normal, Căn đều (Justify), Khoảng cách sau 6pt, Giãn dòng 1.15`

### Bảng lịch sử phiên bản
`Table: 6 hàng x 4 cột, Header row background #D9D9D9`

| Ngày (2.75cm) | Phiên bản (2.07cm) | Tác giả (3.3cm) | Mô tả thay đổi (8.38cm) |
|---|---|---|---|
| 26/03/2026 | 0.5 | Nguyễn Văn A | Tạo mới lần đầu |
| | 0.7 | | Cho review nội bộ |
| | 0.8 | | Cho phát hành lần đầu tới khách hàng |
| | 0.9.x | | Cập nhật theo review của khách hàng |
| | 1.0 | | Cho ký duyệt chính thức |

---

## `[Mục lục — Table of Contents]`

`Style: Normal, Căn trái, Khoảng cách sau 3pt, Giãn dòng 1.08, keep_together: Có, keep_with_next: Có`

*(Mục lục tự động — Table of Contents sẽ được Word tự generate)*

---

# 1. Giới thiệu
`Style: Heading 1 — Font Calibri 14pt, In đậm, Màu #1F3864`

## 1.1. Mục đích
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal`
Tài liệu Đặc tả yêu cầu chức năng sẽ:

1. Xác định phạm vi mục tiêu kinh doanh, chức năng nghiệp vụ và các đơn vị tổ chức được bao phủ.
2. Xác định các quy trình nghiệp vụ mà giải pháp cần hỗ trợ.
3. Tạo sự hiểu biết chung về các yêu cầu chức năng cho tất cả các bên liên quan.
4. Thiết lập cơ sở để xác định các bài kiểm tra chấp nhận (Acceptance Test) cho giải pháp, nhằm xác nhận rằng sản phẩm bàn giao đáp ứng yêu cầu.

`[Numbered List, Level 0, Font Calibri 11pt, Màu #000000]`

`Style: Normal`
Mục đích của tài liệu này là thu thập và phân tích tất cả các ý tưởng để xác định hệ thống, các yêu cầu liên quan đến người dùng. Đồng thời, dự đoán và sắp xếp cách hệ thống sẽ hoạt động trong môi trường thực tế.

## 1.2. Tổng quan
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal`
Hệ thống Quản lý Khách hàng (CRM) là một nền tảng web cho phép doanh nghiệp quản lý toàn diện thông tin khách hàng, theo dõi lịch sử tương tác, quản lý cơ hội kinh doanh và tối ưu hóa quy trình chăm sóc khách hàng. Hệ thống hỗ trợ nhiều vai trò người dùng bao gồm: Nhân viên kinh doanh, Quản lý, và Quản trị hệ thống.

## 1.3. Đối tượng đọc và gợi ý
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal, Khoảng cách trước 6pt, Khoảng cách sau 6pt, Giãn dòng 1.15`
Tài liệu này dành cho:

1. Đội phát triển: Chịu trách nhiệm thiết kế chi tiết, lập trình và thực hiện kiểm thử đơn vị, kiểm thử tích hợp và kiểm thử hệ thống.
2. Đội di chuyển dữ liệu: Chịu trách nhiệm tạo script di chuyển dữ liệu và thực hiện di chuyển dữ liệu cho ứng dụng.
3. Đội tài liệu: Chịu trách nhiệm viết Hướng dẫn sử dụng cho ứng dụng.
4. Đội UAT: Chịu trách nhiệm tiến hành các phiên kiểm thử chấp nhận người dùng (UAT) với người dùng cuối.

`[Numbered List, Level 0, Font Calibri 11pt, Màu #000000]`

## 1.4. Thuật ngữ viết tắt
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

### Bảng thuật ngữ
`Table: 15 hàng x 2 cột, Header background #D9D9D9, Cột 1 width 3.04cm, Cột 2 width 14.76cm`

| Viết tắt | Tham chiếu |
|---|---|
| SRS | Đặc tả yêu cầu hệ thống (System Requirement Specification) |
| UC | Trường hợp sử dụng (Use Case) |
| BR | Quy tắc nghiệp vụ (Business Rules) |
| CBR | Quy tắc nghiệp vụ chung (Common Business Rules) |
| ET | Mẫu email (Email Template) |
| N/A | Không áp dụng hoặc Không có sẵn |
| MSG | Thông báo (Message) |
| [Field] | Quy ước đề cập đến tên trường |
| <<Field>> | Quy ước cho giá trị của trường |
| "Text Value" | Quy ước đề cập đến giá trị cụ thể |
| <Value> | Quy ước đề cập đến giá trị đặc biệt |
| TBU | Cần cập nhật (To be Updated) |
| CRM | Quản lý quan hệ khách hàng (Customer Relationship Management) |
| CSKH | Chăm sóc khách hàng |

## 1.5. Tài liệu tham chiếu
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

### Bảng tham chiếu
`Table: 3 hàng x 3 cột, Header background #D9D9D9`

| Tiêu đề (4.26cm) | Tham chiếu (5.08cm) | Mô tả (8.46cm) |
|---|---|---|
| Tài liệu BRD – CRM | Link nội bộ | Tài liệu yêu cầu nghiệp vụ cho hệ thống CRM |
| Tài liệu thiết kế UI/UX | Figma Link | Thiết kế giao diện người dùng cho CRM |

---

# 2. Yêu cầu tổng quan
`Style: Heading 1 — Font Calibri 14pt, In đậm, Màu #1F3864`

`Style: Normal, Căn đều (Justify)`
Phần này mô tả tổng quan chức năng hệ thống hoặc các quy trình nghiệp vụ được thể hiện trong các sơ đồ khác nhau. Nó cho thấy các loại người dùng, quyền hạn được cấp để thực hiện các chức năng cụ thể và mối quan hệ giữa từng chức năng trong hệ thống.

## 2.1. Sơ đồ ngữ cảnh (Context Diagram)
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal, Căn đều (Justify)`
Phần này cho thấy mối quan hệ tĩnh giữa các đối tượng trong hệ thống. Một đối tượng có thể được mô tả là một thực thể cụ thể trong hệ thống.

`[Hình ảnh: Sơ đồ ngữ cảnh — Kích thước tham khảo: 16.51cm x 11.19cm]`

`Style: Normal, Căn giữa (Center), Khoảng cách sau 10pt`
Hình 1: Sơ đồ ngữ cảnh hệ thống CRM

### Mô tả đối tượng
`Style: Normal`

### Bảng đối tượng
`Table: 12 hàng x 3 cột, Header background #D9D9D9`

| # (1.17cm, Căn giữa) | Đối tượng (4.02cm) | Mô tả (12.6cm) |
|---|---|---|
| **Đối tượng dữ liệu** | **Đối tượng dữ liệu** | **Đối tượng dữ liệu** |
| 1 | Khách hàng | Lưu trữ thông tin khách hàng bao gồm: họ tên, email, số điện thoại, địa chỉ, loại khách hàng |
| 2 | Cơ hội kinh doanh | Lưu trữ thông tin về các cơ hội bán hàng tiềm năng |
| | | |
| **Tác nhân** | **Tác nhân** | **Tác nhân** |
| 1 | Nhân viên kinh doanh | Tạo, xem, cập nhật thông tin khách hàng; quản lý cơ hội kinh doanh |
| 2 | Quản lý | Phê duyệt, xem báo cáo, quản lý phân quyền |
| | | |
| **Hệ thống bên ngoài** | **Hệ thống bên ngoài** | **Hệ thống bên ngoài** |
| 1 | Hệ thống Email | Gửi thông báo email tự động khi có sự kiện phát sinh |
| 2 | Hệ thống ERP | Đồng bộ thông tin khách hàng với hệ thống quản lý doanh nghiệp |

## 2.2. Quy trình nghiệp vụ (Workflow)
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal, Căn đều (Justify)`
Phần này mô tả luồng công việc hoặc các bước mà người dùng thực hiện để hoàn thành một quy trình nghiệp vụ.

`[Hình ảnh: Sơ đồ quy trình — Kích thước tham khảo: 17cm x 12cm]`

`Style: Normal, Căn giữa (Center), Khoảng cách sau 10pt`
Hình 2: Quy trình quản lý khách hàng

## 2.3. Sơ đồ chuyển trạng thái (State Transition)
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal`
Sơ đồ này thể hiện hành vi của hệ thống khi phản hồi hành động của người dùng bằng cách thay đổi trạng thái của đối tượng dữ liệu.

`[Hình ảnh: Sơ đồ trạng thái — Kích thước tham khảo: 16cm x 10cm]`

`Style: Normal, Căn giữa (Center), Khoảng cách sau 10pt`
Hình 3: Sơ đồ chuyển trạng thái — Khách hàng

## 2.4. Ma trận phân quyền (Permission Matrix)
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal`
Ma trận phân quyền ánh xạ chức năng và vai trò người dùng cho ứng dụng CRM được mô tả như sau:

`Style: Normal, Gạch chân`
Ghi chú:

`Style: Normal, Thụt trái 0.64cm, Thụt đầu dòng -0.64cm, Giãn dòng 1.15`
- "O" nghĩa là người dùng có quyền trên chức năng tương ứng. Để biết thêm chi tiết, vui lòng tham khảo use case tương ứng.
- "O*" nghĩa là người dùng có quyền trên chức năng tương ứng với các mục do chính họ tạo.
- "X" nghĩa là người dùng không có quyền trên chức năng tương ứng.

### Bảng phân quyền
`Table: Header background #D9D9D9, Font In đậm, Căn giữa`

| Chức năng (6.49cm) | Nhân viên KD (3cm) | Quản lý (3cm) | Quản trị hệ thống (3cm) |
|---|---|---|---|
| **Quản lý Khách hàng** | | | |
| Tạo thông tin khách hàng | O | O | O |
| Xem thông tin khách hàng | O | O | O |
| Cập nhật thông tin khách hàng | O* | O | O |
| Xóa thông tin khách hàng | X | O | O |
| Tìm kiếm khách hàng | O | O | O |
| Xuất báo cáo khách hàng | X | O | O |

## 2.5. Bản đồ trang (Site Map)
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal`
Bản đồ trang mô tả cách điều hướng qua hệ thống.

`[Hình ảnh: Site Map — Kích thước tham khảo: 16.51cm x 11.19cm]`

`Style: Normal, Căn giữa (Center), Khoảng cách sau 10pt`
Hình 5: Bản đồ trang hệ thống CRM

### Bảng mô tả trang
`Table: 5 hàng x 3 cột, Header background #D9D9D9, Căn giữa`

| Trang (3.23cm) | Mô tả (8.2cm) | Phân quyền (6.37cm) |
|---|---|---|
| Trang chủ (Dashboard) | Trang tổng quan sau đăng nhập | Tất cả người dùng |
| Danh sách khách hàng | Danh sách tất cả khách hàng | Nhân viên KD, Quản lý, Admin |
| Chi tiết khách hàng | Xem/chỉnh sửa thông tin khách hàng | Nhân viên KD, Quản lý, Admin |
| Tạo khách hàng mới | Nhập thông tin khách hàng mới | Nhân viên KD, Quản lý, Admin |

---

# 3. Đặc tả Use Case
`Style: Heading 1 — Font Calibri 14pt, In đậm, Màu #1F3864`

`Style: Normal`
Phần này bao gồm các yêu cầu chức năng chi tiết của hệ thống, mô tả những gì hệ thống phải thực hiện về đầu vào, hành vi và đầu ra mong đợi. Nó thể hiện sự tương tác giữa các tác nhân và hệ thống.

## 3.1. Quản lý Khách hàng
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

### UC 1: Tạo thông tin khách hàng
`Style: Heading 3 — Font Calibri 11pt, In đậm, Màu #1F3864`

---

### Bảng thông tin UC
`Table: 5 hàng x 2 cột, Cột 1 background #D9D9D9 width 4.03cm In đậm, Cột 2 width 13.77cm`

| Thuộc tính | Giá trị |
|---|---|
| **Mục tiêu (Objective):** | Cho phép người dùng tạo mới thông tin khách hàng trong hệ thống CRM bao gồm: thông tin cá nhân, thông tin liên hệ, phân loại khách hàng, và ghi chú. |
| **Tác nhân (Actor):** | User có role = "Nhân viên kinh doanh" hoặc "Quản lý" hoặc "Quản trị hệ thống" |
| **Kích hoạt (Trigger):** | User click vào nút "Tạo khách hàng mới" trên màn hình Danh sách khách hàng |
| **Điều kiện tiên quyết (Pre-condition):** | User đăng nhập thành công vào hệ thống CRM và có quyền tạo khách hàng |
| **Điều kiện sau (Post-condition):** | Thông tin khách hàng mới được lưu thành công vào hệ thống |

---

`Style: Normal`
**Activities Flow**

`[Hình ảnh: Sơ đồ luồng hoạt động UC Tạo thông tin khách hàng — Kích thước tham khảo: 17.86cm x 10.72cm]`

---

`Style: Normal`
**User Story:**

`Style: Normal, Khoảng cách sau 8pt, Giãn dòng 1.08`

**US: Tạo thông tin khách hàng**

Với vai trò là nhân viên kinh doanh

Tôi mong muốn có chức năng "Tạo thông tin khách hàng"

Để ghi nhận đầy đủ thông tin khách hàng tiềm năng vào hệ thống, phục vụ cho việc chăm sóc và theo dõi về sau.

---

**AC (Acceptance Criteria):**

1. Khi user click vào nút "Tạo khách hàng mới", hệ thống hiển thị màn hình "Tạo thông tin khách hàng" với các trường thông tin cần nhập.
`[Numbered List, Level 0, Font Calibri 11pt]`

   `[Hình ảnh: Screenshot màn hình Tạo thông tin khách hàng — Kích thước tham khảo: 17.86cm x 10.72cm]`

2. Khi user nhập các thông tin và ấn nút "Lưu", hệ thống cần validate theo các logic sau:
`[Numbered List, Level 0, Font Calibri 11pt]`

   1. Trường [Họ và tên] không được để trống. Nếu trống, hiển thị MSG 1: "Vui lòng nhập thông tin [Họ và tên]"
   `[Numbered List, Level 1, Font Calibri 11pt]`
   2. Trường [Email] phải đúng định dạng email hợp lệ (chứa @ và tên miền). Nếu sai, hiển thị MSG 2: "Định dạng [Email] không hợp lệ"
   `[Numbered List, Level 1, Font Calibri 11pt]`
   3. Trường [Số điện thoại] chỉ chấp nhận ký tự số, độ dài từ 10-11 ký tự. Nếu sai, hiển thị MSG 3: "Định dạng [Số điện thoại] không hợp lệ"
   `[Numbered List, Level 1, Font Calibri 11pt]`
   4. Trường [Email] phải là duy nhất trong hệ thống. Nếu trùng, hiển thị MSG 6: "Email này đã tồn tại trong hệ thống"
   `[Numbered List, Level 1, Font Calibri 11pt]`
   5. Trường [Loại khách hàng] phải được chọn. Nếu chưa chọn, hiển thị MSG 1: "Vui lòng chọn [Loại khách hàng]"
   `[Numbered List, Level 1, Font Calibri 11pt]`

3. Khi user ấn nút "Lưu" và pass qua tất cả validation, hệ thống xử lý các logic sau:
`[Numbered List, Level 0, Font Calibri 11pt]`

   1. Tạo bản ghi khách hàng mới với trạng thái mặc định = "Hoạt động"
   `[Numbered List, Level 1, Font Calibri 11pt]`
   2. Tự động sinh mã khách hàng theo format: KH-YYYYMMDD-XXX (XXX: số thứ tự tăng dần)
   `[Numbered List, Level 1, Font Calibri 11pt]`
   3. Ghi nhận thông tin người tạo và thời gian tạo
   `[Numbered List, Level 1, Font Calibri 11pt]`
   4. Hiển thị thông báo MSG 9: "Tạo thông tin khách hàng thành công" và chuyển hướng về màn hình Chi tiết khách hàng
   `[Numbered List, Level 1, Font Calibri 11pt]`

4. Khi user ấn nút "Hủy", hệ thống hiển thị hộp thoại xác nhận MSG 4: "Bạn có chắc chắn muốn hủy? Các thông tin đã nhập sẽ không được lưu." Nếu user chọn "Đồng ý", quay lại màn hình Danh sách khách hàng. Nếu chọn "Hủy", ở lại màn hình hiện tại.
`[Numbered List, Level 0, Font Calibri 11pt]`

---

`Style: Normal`
**Business Rules**

### Bảng quy tắc nghiệp vụ
`Table: 5 hàng x 3 cột, Header background #D9D9D9`

| Step (1.46cm, Căn giữa) | BR Code (1.78cm, Căn giữa) | Mô tả (14.55cm) |
|---|---|---|
| (1) | BR 1 | **Quy tắc hiển thị màn hình (Screen Displaying Rules):** Hệ thống hiển thị màn hình "Tạo thông tin khách hàng" với các trường: Họ và tên, Email, Số điện thoại, Ngày sinh, Giới tính (Nam/Nữ/Khác), Địa chỉ, Loại khách hàng (Cá nhân/Doanh nghiệp), Tên công ty, Mã số thuế, Nguồn khách hàng (Website/Giới thiệu/Quảng cáo/Sự kiện/Khác), Ghi chú. Các trường bắt buộc được đánh dấu (*). Mặc định: [Loại khách hàng] = "Cá nhân", [Giới tính] = chưa chọn. Khi [Loại khách hàng] = "Doanh nghiệp", hiển thị thêm trường [Tên công ty] và [Mã số thuế] (bắt buộc). |
| (2) | BR 2 | **Quy tắc kiểm tra dữ liệu (Validating Rules):** Hệ thống kiểm tra: (a) [Họ và tên]: bắt buộc, tối đa 200 ký tự, không chứa ký tự đặc biệt; (b) [Email]: bắt buộc, đúng format email, duy nhất trong hệ thống, tối đa 100 ký tự; (c) [Số điện thoại]: tùy chọn, chỉ chấp nhận số, 10-11 ký tự; (d) [Ngày sinh]: tùy chọn, phải nhỏ hơn ngày hiện tại; (e) [Địa chỉ]: tối đa 500 ký tự; (f) [Mã số thuế]: bắt buộc khi [Loại khách hàng] = "Doanh nghiệp", format 10 hoặc 13 chữ số. Nếu lỗi, hiển thị In-line Error Message màu đỏ bên dưới trường tương ứng. |
| (3) | BR 3 | **Quy tắc lưu dữ liệu (Saving Rules):** Sau khi pass tất cả validation: (a) Tạo bản ghi mới trong bảng Khách hàng; (b) Tự động sinh [Mã khách hàng] theo format KH-YYYYMMDD-XXX; (c) Set [Trạng thái] = "Hoạt động"; (d) Set [Ngày tạo] = thời điểm hiện tại; (e) Set [Người tạo] = user hiện tại; (f) Hiển thị MSG 9; (g) Redirect về màn Chi tiết khách hàng vừa tạo. |
| (3) | BR 4 | **Quy tắc thông báo email (Email Notification Rule):** Sau khi tạo khách hàng thành công, hệ thống gửi email thông báo cho Quản lý (nếu được cấu hình) theo mẫu ET 1. |

---

## 3.2. Quy tắc nghiệp vụ chung (Common Business Rules)
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal, Khoảng cách trước 6pt, Khoảng cách sau 6pt, Giãn dòng 1.15`
Phần này mô tả các quy tắc nghiệp vụ được sử dụng chung cho nhiều use case và có thể coi là quy tắc chung. Mỗi quy tắc bên dưới chỉ áp dụng cho những use case có tham chiếu đến nó.

### Bảng quy tắc chung
`Table: 2 hàng x 2 cột, Header background #D9D9D9`

| BR Code (2.51cm) | Mô tả (15.29cm) |
|---|---|
| CBR1 | **Quy tắc định dạng ngày tháng:** Tất cả các trường ngày tháng trong hệ thống hiển thị theo format DD/MM/YYYY. Khi nhập liệu sử dụng Date Picker. |

---

# 4. Màn hình giao diện (Mockups Screen)
`Style: Heading 1 — Font Calibri 14pt, In đậm, Màu #1F3864`

`Style: Normal`
Phần này chứa các màn hình và thuộc tính tương ứng, liên kết với một hoặc nhiều use case được mô tả trong phần Đặc tả Use Case ở trên.

## 4.1. Màn hình Danh sách khách hàng
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal`
Mục đích: Hiển thị danh sách tất cả khách hàng. Truy cập: Menu trái > Khách hàng > Danh sách.

`[Hình ảnh: Screenshot màn hình Danh sách khách hàng]`

`Style: Normal, Căn giữa (Center), Khoảng cách sau 10pt`
Màn hình 1: Danh sách khách hàng

### Bảng mô tả thành phần — Danh sách
`Table: 5 hàng x 4 cột, Header background #D9D9D9`

| # (1.6cm, Căn giữa) | Thành phần (5.4cm) | Giá trị (4.05cm) | Mô tả (12.36cm) |
|---|---|---|---|
| 1 | Ô tìm kiếm | Free text | Tìm kiếm theo tên, email, số điện thoại. Sắp xếp mặc định theo [Ngày tạo] giảm dần |
| 2 | Nút "Tạo khách hàng mới" | Button | Mở màn hình Tạo thông tin khách hàng mới. Tham chiếu UC 1 |
| 3 | Bảng danh sách | Table | Hiển thị: Mã KH, Họ tên, Email, SĐT, Loại KH, Trạng thái, Ngày tạo |
| 4 | Nút "Xuất Excel" | Button | Xuất danh sách khách hàng ra file Excel. Chỉ hiển thị cho role Quản lý và Admin |

## 4.2. Màn hình Tạo thông tin khách hàng
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal`
Mục đích: Cho phép nhập thông tin khách hàng mới. Truy cập: Từ nút "Tạo khách hàng mới" trên Danh sách khách hàng.

`[Hình ảnh: Screenshot màn hình Tạo khách hàng — Chế độ Nhập liệu]`

`Style: Normal, Căn giữa (Center), Khoảng cách sau 10pt`
Màn hình 2: Tạo thông tin khách hàng

### Bảng mô tả thành phần — Tạo khách hàng
`Table: Header background #D9D9D9`

| # (0.83cm, Căn giữa) | Thành phần (4.67cm) | Loại (3.54cm) | Chỉnh sửa (1.7cm, Căn giữa) | Bắt buộc (2.19cm, Căn giữa) | Giá trị mặc định (2.61cm) | Mô tả (9.06cm) |
|---|---|---|---|---|---|---|
| 1 | Họ và tên | Single Line of Text | Có | Có (*) | | Họ và tên đầy đủ của khách hàng. Tối đa 200 ký tự. |
| 2 | Email | Single Line of Text | Có | Có (*) | | Địa chỉ email liên hệ. Phải duy nhất. Tối đa 100 ký tự. |
| 3 | Số điện thoại | Single Line of Text | Có | Không | | Chỉ chấp nhận số, 10-11 ký tự. |
| 4 | Ngày sinh | Date Picker | Có | Không | | Phải nhỏ hơn ngày hiện tại. Format DD/MM/YYYY. |
| 5 | Giới tính | Radio Button | Có | Không | | Giá trị: Nam / Nữ / Khác |
| 6 | Địa chỉ | Multiple Line of Text | Có | Không | | Tối đa 500 ký tự. |
| 7 | Loại khách hàng | Drop Down List | Có | Có (*) | Cá nhân | Giá trị: "Cá nhân", "Doanh nghiệp". Khi chọn "Doanh nghiệp", hiển thị thêm trường #8, #9. |
| 8 | Tên công ty | Single Line of Text | Có | Có (*) khi #7="Doanh nghiệp" | | Chỉ hiển thị khi [Loại khách hàng] = "Doanh nghiệp". |
| 9 | Mã số thuế | Single Line of Text | Có | Có (*) khi #7="Doanh nghiệp" | | Format: 10 hoặc 13 chữ số. Chỉ hiển thị khi [Loại khách hàng] = "Doanh nghiệp". |
| 10 | Nguồn khách hàng | Drop Down List | Có | Không | | Giá trị: "Website", "Giới thiệu", "Quảng cáo", "Sự kiện", "Khác". |
| 11 | Ghi chú | Multiple Line of Text | Có | Không | | Tối đa 1000 ký tự. |
| 12 | Nút "Lưu" | Button | N/A | N/A | | Trigger UC 1 — Lưu thông tin khách hàng mới. |
| 13 | Nút "Hủy" | Button | N/A | N/A | | Hiển thị xác nhận trước khi quay lại Danh sách. |

---

# 5. Yêu cầu phi chức năng (Non-Functional Requirements)
`Style: Heading 1 — Font Calibri 14pt, In đậm, Màu #1F3864`

`Style: Normal`
Phần này mô tả hoạt động của hệ thống liên quan đến phần Đặc tả Use Case (yêu cầu chức năng). Bao gồm chủ yếu kiến trúc kỹ thuật của hệ thống.

## 5.1. Yêu cầu hiệu năng
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

### Bảng hiệu năng
`Table: 5 hàng x 3 cột, Header background #D9D9D9`

| Tiêu đề (2.21cm) | Biến số / Tiêu chí (6.1cm) | Ghi chú (9.5cm) |
|---|---|---|
| Thời gian phản hồi | Điểm đo: Từ lúc user click đến khi hiển thị kết quả. Thống kê: Trung bình < 2 giây. | 95% request phải phản hồi trong vòng 3 giây. |
| Tải trọng | Tải peak: 200 người dùng đồng thời. | Hệ thống phải hoạt động ổn định khi 200 user online cùng lúc. |
| Khả năng mở rộng | Horizontal scaling. | Hỗ trợ mở rộng thêm server khi số lượng người dùng tăng. |
| Nền tảng | Web browser: Chrome (latest), Firefox (latest), Edge (latest). | Responsive trên Desktop và Tablet. |

## 5.2. Yêu cầu bảo mật
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

### Bảng bảo mật
`Table: 2 hàng x 3 cột, Header background #D9D9D9`

| Tiêu đề (2.5cm) | Biến số / Tiêu chí (5.8cm) | Ghi chú (9.5cm) |
|---|---|---|
| Xác thực | Tỷ lệ thành công xác thực. | Hệ thống xác thực người dùng qua username/password kết hợp OTP. Hỗ trợ SSO. |

---

# 6. Yêu cầu khác (Other Requirements)
`Style: Heading 1 — Font Calibri 14pt, In đậm, Màu #1F3864`

## 6.1. Cấu hình thông báo chung (Common Messages Configuration)
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

### Bảng loại thông báo
`Table: 7 hàng x 2 cột, Header background #D9D9D9`

| Loại thông báo (3.72cm) | Ghi chú (14.08cm) |
|---|---|
| In-line Error Message | Hiển thị bằng chữ đỏ nghiêng. Hiển thị ngay bên dưới trường bị lỗi. |
| In-field Error Message | Hiển thị bằng chữ đỏ nghiêng. Hiển thị ngay trong trường nhập liệu. |
| Error Message | Pop-Up chỉ chứa nội dung thông báo và nút "Đóng". |
| Confirmation Message | Pop-Up chứa nội dung và 2 nút "Đồng ý" / "Hủy". |
| Informing Message | Pop-Up chứa nội dung thông báo và nút "OK". |
| Standard platform Message | Thông báo chuẩn của nền tảng, ví dụ: session timeout, lỗi kết nối. |

---

# 7. Tích hợp (Integration)
`Style: Heading 1 — Font Calibri 14pt, In đậm, Màu #1F3864`

`Style: Normal`
Hệ thống CRM tích hợp với Hệ thống Email (SMTP) để gửi thông báo tự động và có thể tích hợp với hệ thống ERP để đồng bộ dữ liệu khách hàng (phạm vi tích hợp sẽ được chi tiết trong tài liệu riêng).

---

# 8. Di chuyển dữ liệu (Data Migration)
`Style: Heading 1 — Font Calibri 14pt, In đậm, Màu #1F3864`

`Style: Normal`
Yêu cầu chi tiết cho phần Di chuyển dữ liệu sẽ được mô tả trong tài liệu SRS riêng. Tài liệu SRS chức năng và SRS di chuyển dữ liệu cần được đọc song song để có cái nhìn toàn diện.

---

# 9. Phụ lục (Appendices)
`Style: Heading 1 — Font Calibri 14pt, In đậm, Màu #1F3864`

## 9.1. Danh sách thông báo (Messages List)
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal`
Để biết mô tả loại thông báo, vui lòng tham khảo phần Cấu hình thông báo chung.

### Bảng thông báo
`Table: 10 hàng x 3 cột, Header background #D9D9D9`

| # (1.31cm, Căn giữa) | Mã và nội dung thông báo (12.96cm) | Loại (3.54cm) |
|---|---|---|
| 1 | MSG 1: Vui lòng nhập thông tin [Tên trường] | Error Message |
| 2 | MSG 2: Định dạng [Email] không hợp lệ | Error Message |
| 3 | MSG 3: Định dạng [Số điện thoại] không hợp lệ | Error Message |
| 4 | MSG 4: Bạn có chắc chắn muốn hủy? Các thông tin đã nhập sẽ không được lưu. | Confirmation Message |
| 5 | MSG 5: [Tên trường] không được vượt quá [N] ký tự | In-line Error Message |
| 6 | MSG 6: Email này đã tồn tại trong hệ thống | Error Message |
| 7 | MSG 7: Bạn có chắc chắn muốn xóa khách hàng này? | Confirmation Message |
| 8 | MSG 8: Mã số thuế không đúng định dạng (10 hoặc 13 chữ số) | Error Message |
| 9 | MSG 9: Tạo thông tin khách hàng thành công | Informing Message |

## 9.2. Mẫu Email (Email Templates)
`Style: Heading 2 — Font Calibri 12pt, In đậm, Màu #1F3864`

`Style: Normal`
Nội dung Email nên được viết ở thì quá khứ để trang trọng hơn.

`Style: Normal, keep_with_next: Có`
ET 1: Gửi email thông báo cho Quản lý khi Nhân viên kinh doanh tạo khách hàng mới.

### Bảng mẫu email
`Table: 4 hàng x 2 cột, Cột 1 background #E7E6E6, width 2.04cm`

| Trường | Giá trị |
|---|---|
| Gửi đến | Quản lý (Manager) |
| CC | |
| Tiêu đề | [CRM] Khách hàng mới đã được tạo: <<Tên khách hàng>> |
| Nội dung | Kính gửi <<Tên Quản lý>>,\n\nMột khách hàng mới đã được tạo trong hệ thống CRM:\n\n- Mã khách hàng: <<Mã KH>>\n- Họ và tên: <<Họ tên>>\n- Loại khách hàng: <<Loại KH>>\n- Người tạo: <<Tên NV kinh doanh>>\n- Ngày tạo: <<Ngày tạo>>\n\nVui lòng click vào đây để xem chi tiết.\n\nTrân trọng,\nHệ thống CRM |

`Style: Normal`
Ghi chú: Link "đây" dẫn đến màn hình Chi tiết khách hàng.

---

*Tài liệu SRS này được tạo dựa trên template rule từ Doc2MD Template Analyzer.*
