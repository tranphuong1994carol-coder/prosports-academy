/**
 * PROSPORTS TEXTILE ACADEMY - ENGINE & COMPREHENSIVE TEXTILE DATABASE
 * Developed strictly from "Textile Science" (Ahn Dong-jin)
 * Features: Pure Inter font, Light/Dark/System Theme, Bilingual (VIE/ENG, Zero Korean),
 * Strict Chapter Mini-Quiz Gating, 17 Garment Matrix Categories, ASTM 4-Point & Yarn Converters.
 */

// ==================== BILINGUAL TRANSLATION DICTIONARY ====================
const I18N_DICT = {
  vi: {
    tagline: "Học Viện Khoa Học Dệt May & Chất Liệu",
    nav_dashboard: "Tổng Quan",
    nav_curriculum: "Bài Học (10)",
    nav_tools: "Công Cụ",
    nav_matrix: "Ma Trận Vải",
    nav_quiz: "Chứng Chỉ",
    nav_glossary: "Thuật Ngữ",
    hero_badge: "HỆ THỐNG ĐÀO TẠO CHẤT LIỆU PROSPORTS",
    hero_title: "Khoa Học Chất Liệu & Kỹ Thuật Dệt May Thực Chiến",
    hero_desc: "Trang bị toàn diện tri thức từ Xơ (1D) → Sợi (2D) → Kiểu Dệt & Hoàn tất → Lập kế hoạch dòng hàng may mặc (3D). Dành riêng cho Merchandisers (MD), Designers, R&D và QA/QC Prosports.",
    btn_start_learning: "Bắt Đầu Học Ngay",
    btn_take_exam: "Thi Lấy Chứng Chỉ",
    btn_tools: "Công Cụ Quy Đổi",
    progress_label: "Tiến độ bài học:",
    completed_chapters: "Đã hoàn thành",
    best_score: "Điểm thi cao nhất",
    dash_cert_earned: "Đã Nhận Chứng Chỉ",
    view_now: "Xem Ngay",
    exp_badge: "TRẢI NGHIỆM TƯƠNG TÁC",
    exp_title: "Khám Phá Vi Cấu Trúc & Đặc Tính Xơ Sợi Dệt May",
    exp_sub: "Nhấp chọn loại xơ để xem phân tích cơ lý tính",
    rule_1_title: "Quy Tắc 1D → 2D → 3D",
    rule_1_desc: "Xơ (1D) → Sợi (2D) → Vải (2D) → Áo (3D). Xơ dệt phải có chiều dài gấp tối thiểu 100 lần đường kính (ASTM).",
    rule_2_title: "Pass ≠ Không Có Lỗi",
    rule_2_desc: "Vải đạt Pass (≤ 20 điểm/100yd) vẫn có lỗi trong ngưỡng. MD bắt buộc phải tính Buffer Allowance dự phòng.",
    rule_3_title: "Trượt Nước vs Thoát Ẩm",
    rule_3_desc: "Water Repellent (WR) giúp giọt nước lăn tròn; Wicking kéo mồ hôi ra ngoài. Phân biệt rõ tính năng khi làm việc.",
    rule_4_title: "Chất Liệu Phục Vụ Thiết Kế",
    rule_4_desc: "\"Nguyên liệu phục vụ thiết kế, không điều khiển thiết kế\". Hiểu chất liệu để tối ưu giá thành và độ bền sản phẩm.",
    roadmap_title: "Giáo Trình 10 Chuyên Đề Đào Tạo",
    view_all: "Xem chi tiết",
    chart_title: "Biểu Đồ So Sánh Tính Chất Vật Lý Xơ Dệt",
    chart_desc: "Trực quan hóa tỷ trọng, độ hồi ẩm và giới hạn nhiệt độ của các loại xơ sợi",
    chart_density: "Tỷ Trọng (g/cm³)",
    chart_moisture: "Độ Hồi Ẩm (%)",
    chart_melting: "Điểm Nóng Chảy (°C)",
    select_chapter: "Chọn bài:",
    toc_label: "Mục Lục Bài Học",
    btn_quick_quiz: "Làm Bài Ôn Tập (3 Câu)",
    tool_yarn_converter: "Quy Đổi Chỉ Số Sợi",
    tool_4point_calculator: "Tính Điểm Lỗi Vải 4 Điểm ASTM",
    tool_lab_standards: "Tiêu Chuẩn Test Lab",
    yarn_conv_sub: "Direct vs Indirect Count Systems",
    yarn_conv_title: "Bộ Quy Đổi Chỉ Số Sợi & Phân Tích Thể Tích",
    yarn_conv_desc: "Hệ gián tiếp (Ne, Nm): Số càng lớn sợi càng MẢNH. Hệ trực tiếp (Denier, Tex): Số càng lớn sợi càng DÀY.",
    input_val_label: "Giá trị chỉ số:",
    input_unit_label: "Hệ đơn vị đầu vào:",
    input_fiber_label: "Loại xơ (tính thể tích):",
    md_notice_label: "Lưu Ý MD:",
    fp_standard_title: "Tiêu Chuẩn ASTM D5430",
    fp_calc_title: "Kiểm Tra & Tính Điểm Lỗi Vải 4 Điểm",
    fp_limit_badge: "Chuẩn:",
    fp_step1_title: "1. Thông Tin Cuộn Vải",
    fp_length_label: "Chiều dài cuộn (Yards):",
    fp_width_label: "Khổ rộng vải (Inches):",
    fp_max_pass_label: "Ngưỡng điểm Pass tối đa:",
    fp_step2_title: "2. Số Lượng Khuyết Tật",
    fp_d1: "Lỗi 0 - 3\" (1 pt):",
    fp_d2: "Lỗi 3 - 6\" (2 pts):",
    fp_d3: "Lỗi 6 - 9\" (3 pts):",
    fp_d4: "Lỗi > 9\" / Lỗ (4 pts):",
    lab_sub: "Quality Assurance Protocols",
    lab_title: "Bảng Tiêu Chuẩn Kiểm Nghiệm Vải (Lab Test)",
    th_test_name: "Chỉ Tiêu Test",
    th_test_std: "Tiêu Chuẩn (ASTM/AATCC)",
    th_test_method: "Phương Pháp Đo",
    th_test_threshold: "Ngưỡng Yêu Cầu",
    th_test_app: "Ứng Dụng",
    matrix_sub: "Đề Xuất Tiêu Chuẩn Sản Phẩm",
    matrix_title: "Ma Trận Chọn Chất Liệu Theo 17 Dòng Sản Phẩm May Mặc",
    matrix_desc: "Trích xuất toàn diện từ Chương 9: Chi tiết công thức xơ sợi, cấu trúc dệt, hoàn tất và lưu ý kỹ thuật tránh khiếu nại (Claim) cho từng dòng sản phẩm.",
    exam_locked_title: "Bài Thi Chứng Chỉ Đang Bị Khóa",
    exam_locked_desc: "Bạn cần học và hoàn thành tối thiểu 5/10 chuyên đề bài học (làm mini quiz cuối mỗi chương) để mở khóa bài thi chứng chỉ chuyên gia Prosports!",
    locked_prog_label: "Tiến độ bài học hiện tại:",
    btn_goto_lessons: "Vào Học Các Chương",
    btn_override_unlock: "Bỏ qua khóa (Dành cho Kỹ thuật viên ôn lại)",
    exam_title: "Kiểm Tra Năng Lực & Nhận Chứng Chỉ PROSPORTS",
    exam_desc: "Bài thi gồm 15 câu hỏi trắc nghiệm tổng hợp kiến thức từ 9 chương. Đạt từ 80% (12/15 câu đúng) trở lên sẽ được cấp Chứng Chỉ Điện Tử Prosports Textile Specialist chính thức.",
    btn_start_exam_now: "Bắt Đầu Làm Bài Thi Ngay 🚀",
    glossary_sub: "Từ Điển A - Z",
    glossary_title: "Thuật Ngữ Dệt May Quốc Tế (Anh - Việt)",
    glossary_desc: "Tra cứu nhanh hơn 65 thuật ngữ dệt may quốc tế chuẩn ngành",
    emp_modal_title: "Hồ Sơ Nhân Viên Prosports",
    emp_name_label: "Họ và Tên Nhân Viên:",
    emp_id_label: "Mã Nhân Viên (Staff ID):",
    emp_dept_label: "Bộ Phận / Vị Trí:",
    btn_cancel: "Hủy",
    btn_save_profile: "Lưu Hồ Sơ",
    btn_print_pdf: "In Hoặc Lưu PDF",
    btn_close: "Đóng",
    cert_header_sub: "CHỨNG NHẬN ĐÀO TẠO NĂNG LỰC CHUYÊN MÔN",
    cert_header_title: "CHỨNG CHỈ KHOA HỌC CHẤT LIỆU DỆT MAY",
    cert_presented_to: "Chứng nhận cán bộ nhân viên:",
    cert_body_text: "Đã hoàn thành xuất sắc chương trình đào tạo chuyên sâu về Khoa Học Xơ Sợi, Kéo Sợi, Dệt Thoi & Dệt Kim, Quản Lý Màu & Nhuộm, Hoàn Tất Chức Năng và Kiểm Nghiệm Lab.",
    cert_result_lbl: "KẾT QUẢ",
    cert_grade_lbl: "XẾP LOẠI",
    cert_code_lbl: "MÃ CHỨNG CHỈ",
    cert_issue_date_lbl: "Ngày cấp:",
    cert_board_sign: "Hội Đồng Đào Tạo",
    cert_inst_sign: "Viện Nghiên Cứu",
    footer_credits: "Giáo trình Khoa học Chất liệu dệt may - Tác giả Ahn Dong-jin"
  },
  en: {
    tagline: "Textile Science & Materials Academy",
    nav_dashboard: "Overview",
    nav_curriculum: "Lessons (10)",
    nav_tools: "Tools",
    nav_matrix: "Fabric Matrix",
    nav_quiz: "Certification",
    nav_glossary: "Glossary",
    hero_badge: "PROSPORTS MATERIALS TRAINING SYSTEM",
    hero_title: "Applied Textile Science & Garment Engineering",
    hero_desc: "Master textile science from Fiber (1D) → Yarn (2D) → Fabric Construction & Finishing → Garment Planning (3D). Tailored for Prosports MDs, Designers, R&D, and QA/QC teams.",
    btn_start_learning: "Start Learning",
    btn_take_exam: "Take Certification Exam",
    btn_tools: "Conversion Tools",
    progress_label: "Lesson Progress:",
    completed_chapters: "Completed",
    best_score: "Best Score",
    dash_cert_earned: "Certificate Earned",
    view_now: "View Now",
    exp_badge: "INTERACTIVE EXPERIENCE",
    exp_title: "Explore Micro-Structure & Properties of Textile Fibers",
    exp_sub: "Click any fiber to inspect mechanical & thermal properties",
    rule_1_title: "1D → 2D → 3D Rule",
    rule_1_desc: "Fiber (1D) → Yarn (2D) → Fabric (2D) → Garment (3D). Textile fiber length must be at least 100x its diameter (ASTM).",
    rule_2_title: "Pass ≠ Flawless",
    rule_2_desc: "A passed fabric (≤ 20 pts/100yd) still has acceptable flaws. MDs must calculate a Buffer Allowance for production.",
    rule_3_title: "Water Repellent vs Wicking",
    rule_3_desc: "Water Repellent (WR) causes water to bead up; Wicking transports sweat away. Differentiate them in garment planning.",
    rule_4_title: "Material Serves Design",
    rule_4_desc: "\"Material must serve the design, not dictate it\". Master fiber properties to optimize cost, comfort, and brand DNA.",
    roadmap_title: "10-Module Training Curriculum",
    view_all: "View All",
    chart_title: "Physical Properties Comparison Chart",
    chart_desc: "Interactive visual comparison of fiber density, moisture regain, and temperature limits",
    chart_density: "Specific Gravity (g/cm³)",
    chart_moisture: "Moisture Regain (%)",
    chart_melting: "Melting Point (°C)",
    select_chapter: "Select Module:",
    toc_label: "Module Outline",
    btn_quick_quiz: "Quick Review (3 Questions)",
    tool_yarn_converter: "Yarn Unit Converter",
    tool_4point_calculator: "ASTM 4-Point Inspection Calculator",
    tool_lab_standards: "Lab Test Standards",
    yarn_conv_sub: "Direct vs Indirect Count Systems",
    yarn_conv_title: "Yarn Count Converter & Volume Analysis",
    yarn_conv_desc: "Indirect system (Ne, Nm): Higher number = FINER yarn. Direct system (Denier, Tex): Higher number = THICKER yarn.",
    input_val_label: "Input Value:",
    input_unit_label: "Input Unit System:",
    input_fiber_label: "Fiber Type (for Volume):",
    md_notice_label: "MD Technical Note:",
    fp_standard_title: "ASTM D5430 Standard",
    fp_calc_title: "Fabric 4-Point Inspection Calculator",
    fp_limit_badge: "Standard:",
    fp_step1_title: "1. Fabric Roll Information",
    fp_length_label: "Roll Length (Yards):",
    fp_width_label: "Fabric Width (Inches):",
    fp_max_pass_label: "Max Pass Threshold (Points):",
    fp_step2_title: "2. Number of Defects",
    fp_d1: "0 - 3\" Defects (1 pt):",
    fp_d2: "3 - 6\" Defects (2 pts):",
    fp_d3: "6 - 9\" Defects (3 pts):",
    fp_d4: "> 9\" Defects / Holes (4 pts):",
    lab_sub: "Quality Assurance Protocols",
    lab_title: "Fabric Testing Standards Matrix (Lab Test)",
    th_test_name: "Test Parameter",
    th_test_std: "Standard (ASTM/AATCC)",
    th_test_method: "Testing Method",
    th_test_threshold: "Requirement Threshold",
    th_test_app: "Apparel Applications",
    matrix_sub: "Smart Sourcing & Garment Planning",
    matrix_title: "Fabric Decision Matrix by 17 Garment Categories",
    matrix_desc: "Extracted from Chapter 9: Complete fiber formulas, weave structures, finishing processes, and QA warnings to eliminate customer claims.",
    exam_locked_title: "Certification Exam is Locked",
    exam_locked_desc: "You must complete at least 5 of the 10 learning modules (including the mini-quizzes) to unlock the final certification exam!",
    locked_prog_label: "Current Module Progress:",
    btn_goto_lessons: "Go to Learning Modules",
    btn_override_unlock: "Bypass Lock (For Experienced Technicians)",
    exam_title: "Competency Assessment & PROSPORTS Certificate",
    exam_desc: "Comprehensive 15-question exam based on all 9 chapters. Score 80% (12/15) or higher to earn the official Prosports Textile Specialist Certificate.",
    btn_start_exam_now: "Start Certification Exam 🚀",
    glossary_sub: "Glossary A - Z",
    glossary_title: "International Textile Terminology (EN - VI)",
    glossary_desc: "Search over 65 standardized international textile terms",
    emp_modal_title: "Prosports Employee Profile",
    emp_name_label: "Full Employee Name:",
    emp_id_label: "Employee Staff ID:",
    emp_dept_label: "Department / Role:",
    btn_cancel: "Cancel",
    btn_save_profile: "Save Profile",
    btn_print_pdf: "Print or Save as PDF",
    btn_close: "Close",
    cert_header_sub: "PROFESSIONAL COMPETENCY CERTIFICATE",
    cert_header_title: "CERTIFIED TEXTILE SPECIALIST",
    cert_presented_to: "This is proudly presented to:",
    cert_body_text: "For successfully mastering comprehensive professional training in Fiber Science, Yarn Spinning, Weaving & Knitting Technology, Colorfastness & Dyeing Management, Functional Finishing, and Lab Testing Protocols.",
    cert_result_lbl: "SCORE",
    cert_grade_lbl: "HONOR",
    cert_code_lbl: "CERTIFICATE ID",
    cert_issue_date_lbl: "Issue Date:",
    cert_board_sign: "Training Board",
    cert_inst_sign: "Research Institute",
    footer_credits: "Textile Science Curriculum - Author: Ahn Dong-jin"
  }
};

// ==================== INTERACTIVE FIBER EXPLORER DATA ====================
const FIBER_EXPLORER_DATA = {
  cotton: {
    btn_vi: "Bông",
    btn_en: "Cotton",
    name_vi: "Bông (Cotton)",
    name_en: "Cotton Fiber",
    type_vi: "Xơ Xenlulozo Tự Nhiên (Hạt)",
    type_en: "Natural Cellulose (Seed)",
    density: "1.54 g/cm³",
    moisture_vi: "8.4% (Tối đa 12% khi kiềm hóa)",
    moisture_en: "8.4% (Up to 12% Mercerized)",
    strength_vi: "2.1 - 6.3 g/d (Tăng bền khi ướt)",
    strength_en: "2.1 - 6.3 g/d (Stronger wet)",
    heat_vi: "Chịu nhiệt 220°C (Không nóng chảy)",
    heat_en: "Resists 220°C (No melting point)",
    desc_vi: "Xơ tự nhiên phổ biến nhất (90% đồ mặc hàng ngày). Có ruột rỗng (lumen) chứa không khí, hút ẩm cao, thoáng khí. Được kiềm hóa (Mercerization) bằng NaOH để tăng bóng và độ bền.",
    desc_en: "Most widely used natural fiber (90% of daily apparel). Contains hollow lumens, high absorbency, and breathability. Mercerized with NaOH for enhanced luster and tensile strength."
  },
  linen: {
    btn_vi: "Lanh",
    btn_en: "Linen",
    name_vi: "Lanh (Linen / Flax)",
    name_en: "Linen / Flax Bast Fiber",
    type_vi: "Xơ Vỏ Cây Tự Nhiên (Bast)",
    type_en: "Natural Bast Fiber",
    density: "1.50 g/cm³",
    moisture_vi: "8.5%",
    moisture_en: "8.5%",
    strength_vi: "10 - 17 g/d (Gấp 4 lần len)",
    strength_en: "10 - 17 g/d (4x stronger than wool)",
    heat_vi: "Chịu nhiệt cao, cháy không chảy",
    heat_en: "High heat resistance, burns without melting",
    desc_vi: "Xơ thực vật lâu đời nhất (hơn 5.000 năm từ Ai Cập cổ đại). Bền kéo cực cao, mát mẻ mùa hè nhờ tản nhiệt nhanh, có hiệu ứng sần tự nhiên (Slub / Vintage). Dễ nhăn do độ đàn hồi kém.",
    desc_en: "Oldest natural bast fiber (5,000+ years from ancient Egypt). Ultra-high tensile strength, rapid heat dissipation for summer coolness, natural slub texture. Wrinkles easily due to low resilience."
  },
  wool: {
    btn_vi: "Len Cừu",
    btn_en: "Wool",
    name_vi: "Len Cừu (Wool)",
    name_en: "Natural Sheep Wool",
    type_vi: "Xơ Protein Động Vật (Keratin)",
    type_en: "Natural Animal Protein (Keratin)",
    density: "1.32 g/cm³",
    moisture_vi: "13.0 - 15.0% (Hút đến 100% khi ướt)",
    moisture_en: "13.0 - 15.0% (Up to 100% wet absorbency)",
    strength_vi: "25 - 52 g/d",
    strength_en: "25 - 52 g/d",
    heat_vi: "Cháy âm ỉ (Tự tắt lửa, chống cháy tự nhiên)",
    heat_en: "Slow smoldering (Self-extinguishing, flame retardant)",
    desc_vi: "Độ xoăn tự nhiên (Crimp) giữ không khí cách nhiệt tuyệt hảo. Bề mặt có lớp vảy (scale) tạo hiệu ứng nỉ hóa (Felting) khi gặp nước nóng và ma sát. Phục hồi chống nhăn (Resilience) xuất sắc.",
    desc_en: "Natural crimp traps insulating air pockets. Scaly surface cuticles cause felting under heat and agitation. Exceptional wrinkle recovery and natural resilience."
  },
  silk: {
    btn_vi: "Lụa Tơ Tằm",
    btn_en: "Silk",
    name_vi: "Lụa Tơ Tằm (Silk)",
    name_en: "Mulberry Silk Filament",
    type_vi: "Xơ Filament Protein Tự Nhiên",
    type_en: "Natural Protein Continuous Filament",
    density: "1.37 g/cm³",
    moisture_vi: "11.0%",
    moisture_en: "11.0%",
    strength_vi: "30 - 45 g/d (Bền nhất theo tỷ trọng)",
    strength_en: "30 - 45 g/d (High strength-to-weight ratio)",
    heat_vi: "Chịu nhiệt tốt, không nóng chảy",
    heat_en: "Good heat resistance, no melting point",
    desc_vi: "Sợi filament tự nhiên duy nhất do tằm Bombyx mori nhả ra. Tiết diện tam giác phản xạ ánh sáng tạo độ bóng sang trọng. Cấu trúc protein fibroin (75%) + sericin (25%). Cách âm và giảm tiếng ồn khi chuyển động.",
    desc_en: "Only continuous natural filament from Bombyx mori silkworms. Triangular cross-section refracts light for luxurious sheen. Fibroin (75%) + sericin (25%). Natural acoustic dampening."
  },
  polyester: {
    btn_vi: "Polyester",
    btn_en: "Polyester",
    name_vi: "Polyester (PET / PTT / PBT)",
    name_en: "Polyester Polymer (PET / PTT / PBT)",
    type_vi: "Polymer Tổng Hợp Kỵ Nước",
    type_en: "Synthetic Hydrophobic Polymer",
    density: "1.38 g/cm³",
    moisture_vi: "0.4 - 0.5% (Kỵ nước)",
    moisture_en: "0.4 - 0.5% (Hydrophobic)",
    strength_vi: "4.5 - 5.0 g/d (Độ bền cực cao)",
    strength_en: "4.5 - 5.0 g/d (Ultra-durable)",
    heat_vi: "Nóng chảy ở 264°C",
    heat_en: "Melts at 264°C",
    desc_vi: "Loại sợi tổng hợp chiếm thị phần và lợi nhuận lớn nhất thế giới. Bền bỉ, chống nhăn, in chuyển nhiệt Sublimation cực đẹp. Chú ý hiện tượng thăng hoa nhiệt (>70°C) và loang màu khi lưu kho.",
    desc_en: "World's most dominant synthetic fiber. Highly durable, wrinkle-resistant, ideal for sublimation printing. Watch for thermal sublimation (>70°C) and storage color migration."
  },
  nylon: {
    btn_vi: "Nylon / Polyamide",
    btn_en: "Nylon / Polyamide",
    name_vi: "Nylon / Polyamide (N6 / N66)",
    name_en: "Nylon / Polyamide (N6 / N66)",
    type_vi: "Polymer Tổng Hợp Dai Mềm",
    type_en: "Synthetic High-Tenacity Polymer",
    density: "1.14 g/cm³ (Nhẹ hơn Poly)",
    moisture_vi: "4.1 - 4.5%",
    moisture_en: "4.1 - 4.5%",
    strength_vi: "45 - 60 g/d (Chống mài mòn số 1)",
    strength_en: "45 - 60 g/d (Top abrasion resistance)",
    heat_vi: "Nylon 6: 220°C | Nylon 66: 264°C",
    heat_en: "Nylon 6: 220°C | Nylon 66: 264°C",
    desc_vi: "Sợi tổng hợp đầu tiên trên thế giới (DuPont 1935). Cảm giác mềm mượt như lụa, nhuộm màu tươi sáng bằng thuốc nhuộm Axit. Rất bền ma sát, ứng dụng trong áo phao siêu nhẹ 20d-5d, đồ bơi, Cordura.",
    desc_en: "World's first commercial synthetic fiber (DuPont 1935). Silky tactile hand feel, brilliant luster with Acid dyes. Superior abrasion resistance for 20d-5d down jackets, swimwear, Cordura."
  },
  spandex: {
    btn_vi: "Spandex / Elastane",
    btn_en: "Spandex / Elastane",
    name_vi: "Spandex / Elastane (PU)",
    name_en: "Spandex / Elastane (PU)",
    type_vi: "Polyurethane Đàn Hồi Cực Cao",
    type_en: "Synthetic Elastomeric Polyurethane",
    density: "1.21 g/cm³",
    moisture_vi: "1.0 - 2.0%",
    moisture_en: "1.0 - 2.0%",
    strength_vi: "0.7 - 1.2 g/d",
    strength_en: "0.7 - 1.2 g/d",
    heat_vi: "Nhạy cảm nhiệt (Mất đàn hồi khi ủi nóng)",
    heat_en: "Heat-sensitive (Loses stretch under hot iron)",
    desc_vi: "Sợi đàn hồi kéo giãn tới 580% rồi phục hồi nguyên vẹn. Chỉ cần 3-5% pha vào vải giúp trang phục ôm dáng linh hoạt. Không thể nhuộm trực tiếp nên phải bọc lõi (Core-spun).",
    desc_en: "Elastomeric fiber elongating up to 580% with instantaneous recovery. Just 3-5% blended gives full ergonomics. Requires core-spun structures as it cannot take direct dye."
  },
  t400: {
    btn_vi: "Sợi Co Giãn T400",
    btn_en: "T400 Stretch",
    name_vi: "Sợi Co Giãn T400 / PTT (Sorona)",
    name_en: "T400 / PTT Stretch Fiber (Sorona)",
    type_vi: "Polymer Lưỡng Thành Phần (PET+PTT)",
    type_en: "Bi-Component Polymer (PET+PTT)",
    density: "1.34 g/cm³",
    moisture_vi: "0.5%",
    moisture_en: "0.5%",
    strength_vi: "4.0 - 4.8 g/d",
    strength_en: "4.0 - 4.8 g/d",
    heat_vi: "Chịu nhiệt bàn là tốt (Không mất đàn hồi)",
    heat_en: "Iron-safe (No loss of elasticity)",
    desc_vi: "Sợi lưỡng thành phần chiết xuất từ ngô sinh học (DuPont Sorona). Co giãn cơ học tự nhiên không dùng Spandex, bền màu, không sợ nhiệt bàn là, bề mặt mờ lì không bám dính da khi vận động.",
    desc_en: "Bi-component fiber engineered from corn bio-PDO (DuPont Sorona). Natural spring-like mechanical stretch without Spandex degradation, iron-safe, matte texture, and zero skin-cling."
  }
};

// ==================== 10 CHAPTERS FULL TEXTBOOK DATABASE ====================
const CHAPTERS_DATA = [
  {
    id: 1,
    number: "01",
    title_vi: "Khoa Học Xơ Dệt & Đặc Tính Cơ Lý Hóa (Fiber Science)",
    title_en: "Fiber Science & Fundamental Properties",
    subtitle_vi: "Bản chất xơ 1D, phân loại xơ tự nhiên, tái sinh, tổng hợp, bảng tỷ trọng, độ hồi ẩm và cơ tính",
    subtitle_en: "1D fiber nature, classification (natural, regenerated, synthetic), density, moisture regain, and mechanics",
    badge: "Cốt Lõi",
    readTime: "14 phút",
    sections_vi: [
      {
        id: "sec1_1",
        title: "1. Khởi Đầu Ngành Dệt & Quy Luật Không Gian (1D → 2D → 3D)",
        content: `
          <div class="space-y-3">
            <p>Khởi đầu của ngành dệt may có lẽ bắt đầu từ những tấm vải dệt thoi. Chỉ cần có sợi chỉ, ngay cả một con nhện cũng có thể tạo nên một tấm lưới theo thuật toán tự nhiên. Tuy nhiên, để tạo ra nguyên liệu bền bỉ cho trang phục đòi hỏi một quy trình phức tạp hơn nhiều.</p>
            <div class="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-cyan-500/30">
              <h5 class="font-bold text-cyan-600 dark:text-cyan-400 text-xs mb-1.5">Quy tắc hình học không gian trong Dệt May:</h5>
              <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                <li>• <strong>Điểm (0D)</strong>: Điểm không gian không chiều.</li>
                <li>• <strong>Xơ dệt (1D - Fiber)</strong>: Cấu trúc một chiều, chiều dài tối thiểu <strong>gấp 100 lần đường kính</strong> (Theo tiêu chuẩn ASTM của Mỹ).</li>
                <li>• <strong>Sợi / Chỉ (2D - Yarn / Thread)</strong>: Tập hợp các xơ được xe xoắn thành dải dài liên tục.</li>
                <li>• <strong>Vải & Trang phục (3D - Garment)</strong>: Kết cấu vải dệt hoàn thiện uốn lượn ôm sát cơ thể 3 chiều của con người.</li>
              </ul>
            </div>
            <p><strong>Tại sao phải bắt đầu từ xơ?</strong> Giống như Người Thiếc trong <em>The Wizard of Oz</em> có cơ thể kim loại cứng đơ không thể cử động, quần áo của con người phải uốn cong theo khớp xương và thích ứng chuyển động tự nhiên. Xơ dệt mang lại sự kết hợp hoàn hảo giữa độ mềm dẻo (Flexibility) và độ đàn hồi (Elasticity).</p>
          </div>
        `
      },
      {
        id: "sec1_2",
        title: "2. Phân Loại Toàn Diện: Xơ Tự Nhiên, Tái Sinh & Tổng Hợp",
        content: `
          <div class="space-y-3">
            <p>Trong hơn 50.000 loài thực vật, chỉ có 2 loài cung cấp xơ dệt chính cho may mặc: <strong>Bông (Cotton)</strong> và <strong>Lanh (Flax/Linen)</strong>.</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-emerald-500/30">
                <span class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">1. Xơ Tự Nhiên (Natural)</span>
                <p>• <strong>Thực vật</strong>: Bông (Seed), Lanh/Gai/Đay (Bast), Sisal/Pina (Leaf).</p>
                <p>• <strong>Động vật</strong>: Len cừu (Wool), Lụa tơ tằm (Silk), Cashmere (dê Tây Tạng 14-19µm), Alpaca (lạc đà Andes), Mohair (dê Angora), Thỏ Angora, Vicuña ($30.000/áo Loro Piana).</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-sky-500/30">
                <span class="text-sky-600 dark:text-sky-400 font-bold block mb-1">2. Xơ Tái Sinh (Regenerated)</span>
                <p>• <strong>Gen 1</strong>: Viscose, Acetate, Cupro (Bemberg tái sinh từ xơ hạt bông mềm như lụa).</p>
                <p>• <strong>Gen 2</strong>: Modal, Polynosic (bền hơn, ít co rút).</p>
                <p>• <strong>Gen 3 (Eco)</strong>: Tencel, Lyocell (sản xuất bằng dung môi NMMO hữu cơ khép kín).</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-orange-500/30">
                <span class="text-orange-600 dark:text-orange-400 font-bold block mb-1">3. Xơ Tổng Hợp (Synthetics)</span>
                <p>• <strong>Polyester</strong>: PET, PTT, PBT, T400 Sorona.</p>
                <p>• <strong>Polyamide</strong>: Nylon 6, Nylon 6-6.</p>
                <p>• <strong>Spandex (PU)</strong>: Co giãn 580%.</p>
                <p>• <strong>Khác</strong>: Acrylic (PAN - Len người nghèo), Aramid (Kevlar chống đạn / Nomex chống cháy), Olefin (PP/PE).</p>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs">
              <strong class="text-slate-900 dark:text-white">5 Lý do bắt buộc phải pha trộn xơ sợi (Blending):</strong> (1) Mở rộng dải đặc tính cơ lý; (2) Tăng độ bền và bù đắp điểm yếu; (3) Bổ sung tính năng mới (Wicking, Co giãn); (4) Tối ưu cảm giác tay (Hand feel); (5) Tối ưu hóa chi phí sản xuất.
            </div>
          </div>
        `
      },
      {
        id: "sec1_3",
        title: "3. Bảng Dữ Liệu Cơ Tính Vật Lý & Cảnh Báo Cotton Mùa Đông",
        content: `
          <div class="space-y-3 text-xs">
            <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table class="w-full text-left">
                <thead class="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-cyan-400 font-bold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th class="p-2.5">Loại Xơ</th>
                    <th class="p-2.5">Tỷ Trọng (g/cm³)</th>
                    <th class="p-2.5">Độ Hồi Ẩm (%)</th>
                    <th class="p-2.5">Độ Bền Kéo (g/d)</th>
                    <th class="p-2.5">Độ Giãn Dài (%)</th>
                    <th class="p-2.5">Giới Hạn Nhiệt Độ</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800/60 bg-white dark:bg-slate-900/40 text-slate-700 dark:text-slate-300">
                  <tr><td class="p-2 font-bold text-slate-900 dark:text-white">Polypropylene (PP)</td><td>0.90 (Nhẹ nhất, nổi nước)</td><td>0.0% (Kỵ nước)</td><td>35 - 40</td><td>25 - 30%</td><td>Chảy ở 167°C</td></tr>
                  <tr><td class="p-2 font-bold text-slate-900 dark:text-white">Nylon 6 / Nylon 66</td><td>1.14</td><td>4.1 - 4.5%</td><td>45 - 60 (Rất dai)</td><td>85 - 90%</td><td>220°C (N6) / 264°C (N66)</td></tr>
                  <tr><td class="p-2 font-bold text-slate-900 dark:text-white">Acrylic (PAN)</td><td>1.15</td><td>1.0 - 2.0%</td><td>2.3 - 2.6</td><td>80%</td><td>Cháy không chảy</td></tr>
                  <tr><td class="p-2 font-bold text-slate-900 dark:text-white">Spandex (PU)</td><td>1.21</td><td>1.0 - 2.0%</td><td>0.7 - 1.2</td><td>500 - 580%</td><td>Hỏng co giãn khi ủi nhiệt</td></tr>
                  <tr><td class="p-2 font-bold text-slate-900 dark:text-white">Len (Wool)</td><td>1.32</td><td>13.0 - 15.0% (Max 100%)</td><td>25 - 52</td><td>70 - 95%</td><td>Cháy âm ỉ (Tự tắt)</td></tr>
                  <tr><td class="p-2 font-bold text-slate-900 dark:text-white">Tơ tằm (Silk)</td><td>1.37</td><td>11.0%</td><td>30 - 45 (Bền theo tỷ trọng)</td><td>20 - 25%</td><td>Chịu nhiệt tốt</td></tr>
                  <tr><td class="p-2 font-bold text-slate-900 dark:text-white">Polyester (PET)</td><td>1.38</td><td>0.4 - 0.5% (Kỵ nước)</td><td>4.5 - 5.0</td><td>100%</td><td>Nóng chảy ở 264°C</td></tr>
                  <tr><td class="p-2 font-bold text-slate-900 dark:text-white">Lanh (Linen/Flax)</td><td>1.50</td><td>8.5%</td><td>10 - 17 (Gấp 4 lần len)</td><td>76 - 97%</td><td>Cháy không chảy</td></tr>
                  <tr><td class="p-2 font-bold text-slate-900 dark:text-white">Viscose Rayon</td><td>1.51</td><td>13.0% (Hút ẩm cao)</td><td>15 - 24</td><td>44 - 45%</td><td>Cháy không chảy</td></tr>
                  <tr><td class="p-2 font-bold text-slate-900 dark:text-white">Bông (Cotton)</td><td>1.54</td><td>7.0 - 8.5% (Max 12%)</td><td>2.1 - 6.3 (Tăng khi ướt)</td><td>110 - 130%</td><td>220°C an toàn</td></tr>
                </tbody>
              </table>
            </div>

            <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 text-amber-800 dark:text-amber-200 leading-relaxed">
              <strong>⚠️ Bí quyết sống còn của Merchandiser (MD):</strong> Quá trình hút ẩm (Water In) và quá trình bay hơi (Water Out) là hai hiện tượng đối lập. Cotton hút nước cực nhanh nhưng giữ nước lâu và bay hơi chậm. Trong thời tiết lạnh, quần áo cotton bị ẩm sẽ <em>rút trực tiếp nhiệt lượng khỏi cơ thể</em> thay vì cách nhiệt, gây nguy cơ hạ thân nhiệt nguy hiểm! Vì vậy trang phục thể thao mùa đông chuyên nghiệp không bao giờ dùng 100% cotton làm lớp sát da.
            </div>
          </div>
        `
      }
    ],
    sections_en: [
      {
        id: "sec1_1",
        title: "1. The Origin of Textiles & Dimensional Rule (1D → 2D → 3D)",
        content: `
          <div class="space-y-3">
            <p>The beginning of textiles started with woven fabrics. Unlike a spider web, human clothing requires flexible yet strong yarns engineered from microscopic fibers.</p>
            <div class="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-cyan-500/30">
              <h5 class="font-bold text-cyan-600 dark:text-cyan-400 text-xs mb-1.5">Geometric Rule in Apparel:</h5>
              <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                <li>• <strong>Point (0D)</strong>: Dimensionless state.</li>
                <li>• <strong>Fiber (1D)</strong>: 1-dimensional structure, length must be at least <strong>100x diameter</strong> (ASTM Standard).</li>
                <li>• <strong>Yarn / Thread (2D)</strong>: Continuous strands spun from fibers.</li>
                <li>• <strong>Garment (3D)</strong>: 3-dimensional clothing conforming to the human anatomy.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec1_2",
        title: "2. Full Fiber Classification: Natural, Regenerated & Synthetics",
        content: `
          <div class="space-y-3">
            <p>Out of 50,000 plant species, only <strong>Cotton</strong> and <strong>Flax (Linen)</strong> provide scalable apparel fibers.</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-emerald-500/30">
                <span class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">1. Natural Fibers</span>
                <p>• Plant: Cotton (Seed), Linen/Ramie/Hemp (Bast), Sisal (Leaf).</p>
                <p>• Animal: Wool, Silk, Cashmere (14-19µm), Alpaca, Mohair, Angora, Vicuña ($30,000 coats).</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-sky-500/30">
                <span class="text-sky-600 dark:text-sky-400 font-bold block mb-1">2. Regenerated (Cellulose)</span>
                <p>• Gen 1: Viscose, Acetate, Cupro (Bemberg silk-like).</p>
                <p>• Gen 2: Modal, Polynosic (stronger, low shrinkage).</p>
                <p>• Gen 3 (Eco): Tencel, Lyocell (NMMO closed-loop).</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-orange-500/30">
                <span class="text-orange-600 dark:text-orange-400 font-bold block mb-1">3. Synthetic Polymers</span>
                <p>• Polyester: PET, PTT, PBT, T400 Sorona.</p>
                <p>• Polyamide: Nylon 6, Nylon 6-6.</p>
                <p>• Spandex (PU): 580% stretch.</p>
                <p>• Others: Acrylic (PAN), Aramid (Kevlar/Nomex), Olefin (PP/PE).</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "sec1_3",
        title: "3. Physical Properties & Winter Cotton Hazard",
        content: `
          <div class="space-y-3 text-xs">
            <p>Moisture Regain determines comfort and thermal behavior: Wool (13-15%, up to 100%), Viscose (13%), Silk (11%), Cotton (7-8.5%), Nylon (4.1%), Polyester (0.4%), Polypropylene (0%).</p>
            <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 text-amber-800 dark:text-amber-200">
              <strong>⚠️ Winter Cotton Hazard:</strong> Cotton absorbs water fast but dries very slowly. In cold conditions, wet cotton draws body heat away, leading to hypothermia. Never use 100% cotton as a winter thermal base layer!
            </div>
          </div>
        `
      }
    ],
    miniQuiz: [
      {
        q_vi: "Tiêu chuẩn ASTM định nghĩa xơ dệt (Textile Fiber) có tỷ lệ chiều dài trên đường kính tối thiểu là bao nhiêu?",
        q_en: "According to ASTM standards, what is the minimum length-to-diameter ratio for a textile fiber?",
        opts_vi: ["A. Gấp 10 lần", "B. Gấp 100 lần (L/D ≥ 100:1)", "C. Gấp 1.000 lần", "D. Không có quy định"],
        opts_en: ["A. 10 times", "B. 100 times (L/D ≥ 100:1)", "C. 1,000 times", "D. No standard"],
        correct: 1,
        exp_vi: "ASTM quy định xơ dệt phải có chiều dài gấp tối thiểu 100 lần đường kính (1D) để đủ khả năng xe xoắn thành sợi.",
        exp_en: "ASTM defines a textile fiber as having a length at least 100 times its diameter (1D structure)."
      },
      {
        q_vi: "Loại xơ nào sau đây nhẹ nhất (tỷ trọng 0.90 g/cm³, có thể nổi trên mặt nước) và độ hồi ẩm tự nhiên xấp xỉ 0%?",
        q_en: "Which fiber has the lowest specific gravity (0.90 g/cm³, floats on water) and 0% moisture regain?",
        opts_vi: ["A. Cotton", "B. Polyester", "C. Polypropylene (PP / Olefin)", "D. Nylon"],
        opts_en: ["A. Cotton", "B. Polyester", "C. Polypropylene (PP / Olefin)", "D. Nylon"],
        correct: 2,
        exp_vi: "Polypropylene (PP) là xơ dệt nhẹ nhất (0.90 g/cm³) và hoàn toàn không hút ẩm (0%).",
        exp_en: "Polypropylene is the lightest textile fiber (density 0.90 g/cm³) and is completely hydrophobic."
      },
      {
        q_vi: "Tại sao không được dùng 100% Cotton làm lớp lót giữ nhiệt sát da trong mùa đông khắc nghiệt?",
        q_en: "Why should 100% cotton never be used as a next-to-skin insulating layer in severe cold?",
        opts_vi: ["A. Vì cotton quá đắt tiền", "B. Vì cotton hút mồ hôi nhanh nhưng giữ nước lâu, khi ướt sẽ rút trực tiếp nhiệt lượng cơ thể", "C. Vì cotton gây ngứa", "D. Vì cotton không thể giặt"],
        opts_en: ["A. Cotton is too expensive", "B. Cotton absorbs sweat quickly but dries slowly, pulling body heat away when wet", "C. Cotton causes skin itchiness", "D. Cotton cannot be washed"],
        correct: 1,
        exp_vi: "Cotton ướt giữ ẩm lâu và dẫn nhiệt nhanh, rút thân nhiệt của người mặc gây nguy cơ hạ thân nhiệt nguy hiểm.",
        exp_en: "Wet cotton rapidly draws heat away from the skin, causing severe hypothermia hazards."
      }
    ]
  },
  {
    id: 2,
    number: "02",
    title_vi: "Sợi Dệt & Hệ Đo Lường Độ Dày (Yarn Engineering)",
    title_en: "Yarn Engineering & Measurement Systems",
    subtitle_vi: "Phân biệt Fiber vs Yarn vs Thread, hệ thống đếm Ne, Nm, Denier, Tex, cấu trúc DTY, ATY, ITY, T400",
    subtitle_en: "Fiber vs Yarn vs Thread, Indirect (Ne, Nm) vs Direct (Denier, Tex) systems, DTY/ATY texturing",
    badge: "Kỹ Thuật Sợi",
    readTime: "12 phút",
    sections_vi: [
      {
        id: "sec2_1",
        title: "1. Phân Biệt Xơ (Fiber) - Sợi (Yarn) - Chỉ May (Thread)",
        content: `
          <div class="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>• <strong>Xơ (Fiber)</strong>: Đơn vị nguyên liệu thô ban đầu (Bông, lông cừu, hạt nhựa polymer...).</p>
            <p>• <strong>Sợi (Yarn)</strong>: Tập hợp các xơ được xe xoắn thành dải dài liên tục dùng để dệt thoi (Woven) hoặc dệt kim (Knit). Câu hỏi kỹ thuật của xưởng dệt: <em>"Vải này dùng bao nhiêu yarns?"</em></p>
            <p>• <strong>Chỉ may (Thread)</strong>: Sợi đã được xử lý hoàn thiện chuyên biệt, có độ bền cơ học cao, bôi trơn chống ma sát để may ráp quần áo. Câu hỏi kỹ thuật: <em>"May chiếc áo này cần bao nhiêu threads?"</em></p>
          </div>
        `
      },
      {
        id: "sec2_2",
        title: "2. Hệ Đếm Gián Tiếp (Indirect) vs Trực Tiếp (Direct)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-blue-500/30">
              <span class="text-cyan-600 dark:text-cyan-400 font-bold block mb-1">Hệ Gián Tiếp (Indirect Count - Ne, Nm)</span>
              <p class="font-bold text-slate-900 dark:text-white">Quy tắc vàng: Số càng LỚN → Sợi càng MẢNH!</p>
              <p class="text-slate-600 dark:text-slate-400 mt-1">• <strong>Ne (English Cotton Count)</strong>: Số đoạn 840 yards trong 1 pound. Sợi 40s mảnh hơn 20s. Sợi 100s/2 cực mịn và sang trọng.</p>
              <p class="text-slate-600 dark:text-slate-400">• <strong>Nm (Metric Count)</strong>: Số mét sợi trong 1 gram (hoặc km/kg). Dùng cho len và sợi spun.</p>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-orange-500/30">
              <span class="text-orange-600 dark:text-orange-400 font-bold block mb-1">Hệ Trực Tiếp (Direct Count - Denier, Tex)</span>
              <p class="font-bold text-slate-900 dark:text-white">Quy tắc vàng: Số càng LỚN → Sợi càng DÀY (NẶNG)!</p>
              <p class="text-slate-600 dark:text-slate-400 mt-1">• <strong>Denier (d / D)</strong>: Trọng lượng (gam) của 9.000 mét sợi. Vải lót thường 50d/75d, balo 500d-1000d (Cordura).</p>
              <p class="text-slate-600 dark:text-slate-400">• <strong>Tex</strong>: Trọng lượng (gam) của 1.000 mét sợi (1 Tex = 9 Denier).</p>
            </div>
          </div>
        `
      },
      {
        id: "sec2_3",
        title: "3. Sợi Biến Tính Nhiệt & Cơ Học (DTY, ATY, ITY, T400)",
        content: `
          <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <p>• <strong>DTY (Draw Textured Yarn)</strong>: Kéo dán nhăn bằng nhiệt và cơ học, tăng độ phồng, giảm bóng, tăng nhẹ độ đàn hồi. Phổ biến nhất trong hàng thể thao.</p>
            <p>• <strong>ATY (Air Textured Yarn)</strong>: Dùng luồng khí nén tạo các vòng sợi nhỏ (tiny loops) không dùng nhiệt. Cực kỳ thoáng khí, sờ mềm xốp như cotton (Taslan, Supplex 160d).</p>
            <p>• <strong>ITY (Interlock Twisted Yarn)</strong>: Xoắn 2 sợi có độ co rút nhiệt khác nhau tạo độ co giãn cực độ (135D).</p>
            <p>• <strong>Sợi T400 / PTT (DuPont Sorona)</strong>: Sợi polyester lưỡng thành phần co giãn tự nhiên không cần Spandex. Không bị hỏng khi ủi nhiệt cao, không ố vàng, giữ nếp memory.</p>
          </div>
        `
      }
    ],
    sections_en: [
      {
        id: "sec2_1",
        title: "1. Fiber vs Yarn vs Thread",
        content: `<p class="text-xs">• <strong>Fiber</strong>: Raw basic material.<br>• <strong>Yarn</strong>: Continuous twisted strand for fabric manufacturing.<br>• <strong>Thread</strong>: Lubricated, high-tenacity yarn for garment sewing.</p>`
      },
      {
        id: "sec2_2",
        title: "2. Indirect (Ne, Nm) vs Direct (Denier, Tex)",
        content: `<p class="text-xs">• <strong>Indirect</strong>: Higher count = Finer yarn (e.g. 80s is finer than 20s).<br>• <strong>Direct</strong>: Higher number = Thicker yarn (e.g. 150d is heavier than 75d).</p>`
      },
      {
        id: "sec2_3",
        title: "3. Textured Yarns: DTY, ATY, ITY, T400",
        content: `<p class="text-xs">• <strong>DTY</strong>: Heat & mechanical crimp.<br>• <strong>ATY</strong>: Air-jet textured loops for cotton-like touch.<br>• <strong>ITY</strong>: Differential shrinkage stretch yarn.<br>• <strong>T400</strong>: Heat-safe elastomeric PTT polyester.</p>`
      }
    ],
    miniQuiz: [
      {
        q_vi: "Trong hệ đếm chỉ số bông Ne, loại sợi nào sau đây MẢNH và MỊN nhất?",
        q_en: "In the English Cotton Count (Ne) system, which yarn is the FINEST?",
        opts_vi: ["A. Sợi 10s", "B. Sợi 20s", "C. Sợi 40s", "D. Sợi 100s/2"],
        opts_en: ["A. 10s yarn", "B. 20s yarn", "C. 40s yarn", "D. 100s/2 yarn"],
        correct: 3,
        exp_vi: "Hệ Ne là hệ gián tiếp, số càng lớn sợi càng mảnh. 100s/2 là sợi đôi siêu mảnh cao cấp.",
        exp_en: "In the indirect Ne system, higher numbers mean finer yarns. 100s/2 is ultra-fine premium yarn."
      },
      {
        q_vi: "Sợi ATY (Air Textured Yarn) tạo ra cảm giác xốp mềm giống sợi tự nhiên bằng phương pháp nào?",
        q_en: "How does Air Textured Yarn (ATY) create its natural cotton-like hand feel?",
        opts_vi: ["A. Dùng luồng khí nén tạo các vòng sợi nhỏ mà không dùng nhiệt", "B. Ngâm axit", "C. Cắt thành bột", "D. Đun sôi sáp"],
        opts_en: ["A. Using compressed air to create micro-loops without heat", "B. Soaking in acid", "C. Grinding to dust", "D. Boiling in wax"],
        correct: 0,
        exp_vi: "ATY dùng khí áp lực cao tạo các vòng loop nhỏ tự nhiên (như Taslan 160d).",
        exp_en: "ATY uses pressurized air to introduce micro-loops into synthetic filaments."
      },
      {
        q_vi: "Đơn vị Denier (d) được định nghĩa chuẩn là gì?",
        q_en: "What is the standard definition of Denier (d)?",
        opts_vi: ["A. Trọng lượng tính bằng gam của 1.000m sợi", "B. Trọng lượng tính bằng gam của 9.000m sợi", "C. Số mét trong 1 gam", "D. Độ dài sợi trong 1 pound"],
        opts_en: ["A. Grams per 1,000m", "B. Grams per 9,000m", "C. Meters per gram", "D. Yards per pound"],
        correct: 1,
        exp_vi: "Denier là khối lượng tính bằng gam của 9.000 mét sợi.",
        exp_en: "Denier is the mass in grams per 9,000 meters of yarn."
      }
    ]
  },
  {
    id: 3,
    number: "03",
    title_vi: "Quy Trình Kéo Sợi Thực Tế (Spinning Process)",
    title_en: "Fiber to Yarn Spinning Process",
    subtitle_vi: "7 bước kéo sợi chuẩn, Ring Spun, Open End (OE) và Murata Vortex (MVS)",
    subtitle_en: "7-step spinning sequence, Carded vs Combed, Ring Spun vs Open End (OE) vs Murata Vortex (MVS)",
    badge: "Kéo Sợi",
    readTime: "10 phút",
    sections_vi: [
      {
        id: "sec3_1",
        title: "1. 7 Bước Kéo Sợi Tuần Tự",
        content: `
          <div class="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            <p>Quy trình biến xơ ngắn thành sợi dài liên tục trải qua 7 bước tuần tự:</p>
            <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 font-mono text-[11px] text-cyan-700 dark:text-cyan-300 border border-slate-300 dark:border-slate-800">
              Bông thô → Xé trộn (Blowing) → Chải sơ (Carding) → Chải kỹ (Combing) → Ghép dải (Drawing / Sliver) → Kéo thô (Roving) → Kéo tinh (Spinning) → Cuộn ống (Winding Cone/Cheese)
            </div>
            <p>• <strong>Dải cúi (Sliver)</strong>: Dạng xơ xốp dài như ruy băng sau khi được định hướng song song.</p>
            <p>• <strong>Soft Winding</strong>: Quấn sợi lỏng lên ống có lỗ để chuẩn bị nhuộm sợi Cheese Dyeing.</p>
          </div>
        `
      },
      {
        id: "sec3_2",
        title: "2. Sợi Carded vs Sợi Combed",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span class="font-bold text-slate-900 dark:text-white block">Sợi Chải Thô (Carded)</span>
              <p class="text-slate-600 dark:text-slate-400 mt-1">Chỉ qua bước Carding sơ bộ, còn tạp chất và xơ ngắn. Giá rẻ, thường dùng cho sợi dưới 40s.</p>
            </div>
            <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-cyan-500/40">
              <span class="font-bold text-cyan-600 dark:text-cyan-400 block">Sợi Chải Kỹ (Combed)</span>
              <p class="text-slate-600 dark:text-slate-400 mt-1">Loại bỏ xơ ngắn dưới 2cm, bóng mịn và bền gấp đôi. Đắt gần gấp đôi, chuyên dùng cho hàng cao cấp (40s-100s).</p>
            </div>
          </div>
        `
      },
      {
        id: "sec3_3",
        title: "3. Công Nghệ Kéo Sợi: Ring Spun vs OE vs MVS",
        content: `
          <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <p>• <strong>Ring Spun (Kéo cọc)</strong>: Bền dai và mềm mại nhất, tiêu chuẩn cho hàng may cao cấp.</p>
            <p>• <strong>OE / Rotor (Open End)</strong>: Kéo trực tiếp từ Sliver, tốc độ cao, giá rẻ, khô cứng. Lý tưởng cho vải Denim jeans 7s/10s.</p>
            <p>• <strong>MVS (Murata Vortex Nhật Bản)</strong>: Khí xoáy siêu tốc, bề mặt sợi nhẵn bóng tuyệt đối, hoàn toàn không xù lông (Pilling-free), chuyên dùng cho vải Rayon Modal.</p>
          </div>
        `
      }
    ],
    sections_en: [
      {
        id: "sec3_1",
        title: "1. 7-Step Spinning Sequence",
        content: `<p class="text-xs">Opening → Blowing → Carding → Combing → Drawing → Roving → Spinning → Winding.</p>`
      },
      {
        id: "sec3_2",
        title: "2. Carded vs Combed Yarn",
        content: `<p class="text-xs">Combed yarn removes short fibers under 2cm, providing smoother, stronger, and premium yarns for counts above 40s.</p>`
      },
      {
        id: "sec3_3",
        title: "3. Spinning Systems: Ring Spun vs OE vs MVS",
        content: `<p class="text-xs">• <strong>Ring Spun</strong>: Standard for luxury soft apparel.<br>• <strong>OE Rotor</strong>: Fast and cost-efficient for heavy denim 7s/10s.<br>• <strong>MVS (Murata Vortex)</strong>: Air vortex high-speed, pilling-free yarn.</p>`
      }
    ],
    miniQuiz: [
      {
        q_vi: "Ưu điểm vượt trội nhất của công nghệ kéo sợi Murata Vortex (MVS) Nhật Bản là gì?",
        q_en: "What is the primary technical advantage of Japan's Murata Vortex Spinning (MVS)?",
        opts_vi: ["A. Tốc độ sản xuất cực cao và bề mặt sợi nhẵn bóng, hầu như không xù lông", "B. Chỉ dùng được cho sợi kim loại", "C. Giá rẻ nhất thế giới", "D. Tạo ra sợi màu vàng"],
        opts_en: ["A. Ultra-high speed and smooth, pilling-free yarn surface", "B. Only works with metal fibers", "C. Lowest price machinery", "D. Produces yellow yarn"],
        correct: 0,
        exp_vi: "MVS dùng luồng khí xoáy bọc chặt xơ ngoài quanh lõi song song, tạo sợi siêu nhẵn và chống xù lông.",
        exp_en: "MVS utilizes air vortex technology to wrap fibers tightly, producing ultra-smooth, pilling-resistant yarns."
      },
      {
        q_vi: "Vải Denim may quần jeans cổ điển thường sử dụng loại sợi nào để tối ưu chi phí?",
        q_en: "Classic denim jeans typically use which yarn type for cost efficiency?",
        opts_vi: ["A. Sợi tơ tằm 100s", "B. Sợi Open End (OE / Rotor) 7s hoặc 10s", "C. Sợi lanh xe tay", "D. Sợi thủy tinh"],
        opts_en: ["A. 100s silk yarn", "B. Open End (OE / Rotor) 7s or 10s yarn", "C. Hand-spun linen", "D. Fiberglass"],
        correct: 1,
        exp_vi: "Denim thường dùng sợi chải sơ OE 7s - 10s để đạt kết cấu dày dặn, bền chắc với chi phí hợp lý.",
        exp_en: "Denim standardly uses 7s or 10s OE carded yarns for durability and cost efficiency."
      },
      {
        q_vi: "Dạng xơ trung gian sau khi qua máy ghép dải có dạng dải bông dài được gọi là gì?",
        q_en: "What is the intermediate fiber strand called after the drawing process?",
        opts_vi: ["A. Sliver (Dải cúi)", "B. Denim", "C. Fabric", "D. Seam"],
        opts_en: ["A. Sliver", "B. Denim", "C. Fabric", "D. Seam"],
        correct: 0,
        exp_vi: "Dạng sợi trung gian mềm xốp sau khi ghép dải được gọi là Sliver (dải cúi).",
        exp_en: "The continuous strand of parallel fibers after drawing is called Sliver."
      }
    ]
  },
  {
    id: 4,
    number: "04",
    title_vi: "Từ Sợi Đến Vải: Dệt Thoi & Dệt Kim (Fabric Construction)",
    title_en: "Fabric Construction & Weaving/Knitting",
    subtitle_vi: "Dệt thoi (Plain, Twill, Satin, Dobby, Jacquard) vs Dệt kim (Weft & Warp Knit) và phân tích cơ tính",
    subtitle_en: "Woven (Plain, Twill, Satin, Jacquard) vs Knitted (Weft/Warp) fabrics and property comparison",
    badge: "Cấu Trúc Vải",
    readTime: "14 phút",
    sections_vi: [
      {
        id: "sec4_1",
        title: "1. 3 Kiểu Dệt Thoi Cơ Bản & Thông Số Vải",
        content: `
          <div class="space-y-3 text-xs text-slate-700 dark:text-slate-300">
            <p>Dệt thoi là quá trình đan cài vuông góc giữa hệ <strong>Sợi Dọc (Warp)</strong> và <strong>Sợi Ngang (Weft)</strong>. Máy dệt thoi truyền thống (Shuttle) đạt 120 rpm, máy dệt hiện đại Rapier / Air-jet đạt tới 600 rpm (năng suất gấp 3 lần).</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-cyan-600 dark:text-cyan-400 block mb-1">Dệt Trơn (Plain 1x1)</span>
                <p>Đan xen 1 lên 1 xuống luân phiên. Bền chắc nhất, ít co giãn. Vải: Poplin, Voile, Challis, Oxford (10x10, 65x42), Canvas Duck.</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-orange-600 dark:text-orange-400 block mb-1">Dệt Chéo (Twill 2/1, 3/1)</span>
                <p>Đường vân chéo nổi bật. Dày dặn, rủ tốt, chịu mài mòn. Vải: Denim, Chino twill (20x16 128x60), Gabardine Burberry.</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Dệt Satin / Sateen (4/1)</span>
                <p>Sợi nổi dài qua 4 sợi ngang. Bề mặt trơn bóng mượt, độ rủ cao nhưng dễ xước sợi. Vải đầm dạ hội, lót vest.</p>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 font-mono text-[11px]">
              <strong>Cách đọc thông số vải dệt thoi:</strong> 20 × 16 / 128 × 60 / 60"<br>
              → Sợi dọc 20s × Sợi ngang 16s / Mật độ 128 dọc × 60 ngang trên 1 inch / Khổ rộng 60 inches.
            </div>
          </div>
        `
      },
      {
        id: "sec4_2",
        title: "2. Dệt Kim Ngang (Weft Knit) vs Dệt Kim Dọc (Warp Knit)",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-cyan-500/30">
              <span class="font-bold text-cyan-600 dark:text-cyan-400 block mb-1">Dệt Kim Ngang (Weft Knit)</span>
              <p>Một sợi chạy ngang tạo vòng (loop). Co giãn cao, ôm dáng nhưng dễ tuột sợi. Vải: Single Jersey (T-shirt), Rib (bo cổ), Interlock, Pique (Polo), Terry.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-purple-500/30">
              <span class="font-bold text-purple-600 dark:text-purple-400 block mb-1">Dệt Kim Dọc (Warp Knit)</span>
              <p>Nhiều sợi cấp dọc tạo mạng zigzag. Kết cấu vững chắc, không tuột sợi, ổn định cao. Vải: Tricot (đồ lót, blouse), Raschel (lưới thể thao Power mesh), Milanese.</p>
            </div>
          </div>
        `
      },
      {
        id: "sec4_3",
        title: "3. Bảng So Sánh Cơ Tính Dệt Thoi (Woven) vs Dệt Kim (Knit)",
        content: `
          <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
            <table class="w-full text-left">
              <thead class="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-cyan-400 font-bold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th class="p-2.5">Đặc Tính Kỹ Thuật</th>
                  <th class="p-2.5">Vải Dệt Thoi (Woven)</th>
                  <th class="p-2.5">Vải Dệt Kim (Knit)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-800/60 bg-white dark:bg-slate-900/40 text-slate-700 dark:text-slate-300">
                <tr><td class="p-2 font-bold">Độ co giãn</td><td>Thấp (Cần pha Spandex)</td><td>Rất cao tự nhiên do vòng loop</td></tr>
                <tr><td class="p-2 font-bold">Giữ form dáng</td><td>Rất tốt (Vest, Trench coat)</td><td>Kém hơn, dễ bai dão</td></tr>
                <tr><td class="p-2 font-bold">Độ co rút sau giặt</td><td>Thấp (≤ 3%)</td><td>Cao hơn (5% - 8%)</td></tr>
                <tr><td class="p-2 font-bold">Kiểm tra độ bền</td><td>Độ bền xé (Tearing) & Kéo</td><td>Độ bền bục nổ (Bursting)</td></tr>
                <tr><td class="p-2 font-bold">Thời gian làm mẫu</td><td>Vài tuần (chuẩn bị trục dọc)</td><td>3 ngày (nhanh gấp nhiều lần)</td></tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    sections_en: [
      {
        id: "sec4_1",
        title: "1. Three Basic Weaves & Specs",
        content: `<p class="text-xs">• <strong>Plain</strong>: 1x1 durable interlacing (Poplin, Oxford).<br>• <strong>Twill</strong>: Diagonal ribs (Denim, Chino, Gabardine).<br>• <strong>Satin</strong>: Floating yarns for lustrous drape.</p>`
      },
      {
        id: "sec4_2",
        title: "2. Weft vs Warp Knitting",
        content: `<p class="text-xs">• <strong>Weft Knit</strong>: Crosswise single yarn loops (Jersey, Pique, Rib).<br>• <strong>Warp Knit</strong>: Vertical multi-yarn loops (Tricot, Raschel mesh, Milanese).</p>`
      },
      {
        id: "sec4_3",
        title: "3. Woven vs Knit Performance",
        content: `<p class="text-xs">Knits offer natural stretch, rapid 3-day sampling, and 3D seamless forming, but have higher shrinkage (5-8% vs 3%).</p>`
      }
    ],
    miniQuiz: [
      {
        q_vi: "Kiểu dệt thoi nào có đặc trưng sợi nổi dài qua 4 sợi ngang tạo bề mặt bóng láng sang trọng nhưng dễ bị xước sợi?",
        q_en: "Which weave is characterized by long floating threads creating a lustrous surface that easily snags?",
        opts_vi: ["A. Dệt trơn (Plain)", "B. Dệt chéo (Twill)", "C. Dệt Satin (Sateen)", "D. Vải không dệt"],
        opts_en: ["A. Plain weave", "B. Twill weave", "C. Satin weave", "D. Non-woven"],
        correct: 2,
        exp_vi: "Dệt Satin có các sợi nổi dài (floating threads) tạo độ bóng láng và độ rủ mềm mại.",
        exp_en: "Satin weave uses long floats for high luster and smooth drape."
      },
      {
        q_vi: "Loại vải dệt kim dọc nào được sử dụng phổ biến nhất cho đồ lót và áo blouse nhờ bề mặt mịn và không bị xổ sợi?",
        q_en: "Which warp-knit fabric is most widely used for lingerie and blouses due to its smooth, fray-resistant surface?",
        opts_vi: ["A. Tricot", "B. Denim", "C. Khăn bông terry", "D. Canvas"],
        opts_en: ["A. Tricot", "B. Denim", "C. Terry towel", "D. Canvas"],
        correct: 0,
        exp_vi: "Tricot là vải dệt kim dọc phổ biến nhất, có gân dọc mặt phải và gân ngang mặt trái, không bị tuột sợi.",
        exp_en: "Tricot is the most popular warp-knit fabric, soft and resistant to unravelling."
      },
      {
        q_vi: "Thời gian phát triển mẫu thử (Sample lead time) của vải dệt kim so với vải dệt thoi như thế nào?",
        q_en: "How does sample lead time for knit fabrics compare to woven fabrics?",
        opts_vi: ["A. Dệt kim chỉ mất khoảng 3 ngày, nhanh hơn nhiều so với vài tuần của dệt thoi", "B. Dệt kim lâu hơn 1 năm", "C. Cả hai luôn mất đúng 6 tháng", "D. Không thể làm mẫu dệt kim"],
        opts_en: ["A. Knits take as little as 3 days, much faster than weeks for wovens", "B. Knits take over 1 year", "C. Both take exactly 6 months", "D. Knits cannot be sampled"],
        correct: 0,
        exp_vi: "Vải dệt kim chỉ cần cấp sợi vào máy đan ngay, trong khi dệt thoi phải qua công đoạn chuẩn bị sợi dọc mất nhiều tuần.",
        exp_en: "Knitted samples can be produced in ~3 days because yarn feeds directly into knitting machines without warp preparation."
      }
    ]
  },
  {
    id: 5,
    number: "05",
    title_vi: "Kỹ Thuật Nhuộm & Độ Bền Màu (Dyeing & Colorfastness)",
    title_en: "Textile Dyeing & Colorfastness Management",
    subtitle_vi: "Bảng tương thích thuốc nhuộm, quy trình Dope/Piece/Garment, kiểm soát Shade và lỗi thăng hoa",
    subtitle_en: "Dyestuff compatibility, Dope/Piece dyeing, Shade defects (Listing, Ending), Grey Scale, Sublimation",
    badge: "Màu Sắc",
    readTime: "13 phút",
    sections_vi: [
      {
        id: "sec5_1",
        title: "1. Bảng Tương Thích Thuốc Nhuộm với Từng Loại Xơ",
        content: `
          <div class="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            <p>Mỗi loại xơ yêu cầu loại thuốc nhuộm hóa học tương thích riêng:</p>
            <ul class="space-y-1">
              <li>• <strong>Thuốc nhuộm Phản Ứng (Reactive)</strong>: Bông (Cotton), Lanh, Rayon, Tencel. Tạo liên kết cộng hóa trị bền vững với nhóm -OH.</li>
              <li>• <strong>Thuốc nhuộm Phân Tán (Disperse)</strong>: Polyester (PET, PTT), Acetate. Khuếch tán ở 130°C. Cần lưu ý lỗi thăng hoa nhiệt.</li>
              <li>• <strong>Thuốc nhuộm Axit (Acid)</strong>: Nylon (Polyamide), Len (Wool), Lụa (Silk). Cho màu sắc tươi sáng, rực rỡ.</li>
              <li>• <strong>Thuốc nhuộm Cationic (CDP)</strong>: Acrylic, Polyester biến tính Cation để tạo hiệu ứng 2 tông màu (Cross Dyeing).</li>
              <li>• <strong>Nhuộm Bột Màu (Pigment)</strong>: Dùng hạt màu bám cơ học bằng keo binder, dễ phai tạo hiệu ứng vintage.</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec5_2",
        title: "2. Nhuộm Dope Dyeing vs Nhuộm Cây Vải & Nhuộm 2 Bước",
        content: `
          <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <p>• <strong>Dope Dyeing (Solution Dyeing)</strong>: Trộn hạt màu (Masterbatch) trực tiếp vào dung dịch polymer nóng chảy trước khi kéo sợi. Màu ngấm tận lõi sợi, bền UV/hóa chất tuyệt đối, tiết kiệm 90% nước.</p>
            <p>• <strong>Nhuộm 2 bước (2-Step Dyeing)</strong>: Bắt buộc đối với vải pha như T/C hoặc N/C vì mỗi thành phần xơ đòi hỏi loại thuốc nhuộm khác nhau.</p>
          </div>
        `
      },
      {
        id: "sec5_3",
        title: "3. Các Lỗi Nhuộm & Thang Đo Grey Scale / Blue Scale",
        content: `
          <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <p>• <strong>Listing</strong>: Lệch màu giữa biên trái và biên phải vải.<br>• <strong>Ending / Tailing</strong>: Đuối màu đầu - cuối cây vải.<br>• <strong>Sublimation (Thăng hoa)</strong>: Thuốc nhuộm Poly bay hơi khi nhiệt độ >70°C.<br>• <strong>Ố vàng vải trắng (Yellowing)</strong>: Bắt buộc duy trì pH hoàn tất ở mức axit nhẹ 5.5 - 6.0.<br>• <strong>Thang Grey Scale (1-5)</strong>: Chuẩn xuất khẩu yêu cầu Cấp 4.0 - 5.0.<br>• <strong>Thang Blue Scale (1-8)</strong>: Đánh giá độ bền ánh sáng UV (chiếu đèn 20h).</p>
          </div>
        `
      }
    ],
    sections_en: [
      {
        id: "sec5_1",
        title: "1. Dyestuff Compatibility Chart",
        content: `<p class="text-xs">• <strong>Reactive</strong>: Cotton, Linen, Rayon.<br>• <strong>Disperse</strong>: Polyester, Acetate.<br>• <strong>Acid</strong>: Nylon, Wool, Silk.<br>• <strong>Cationic</strong>: Acrylic, CDP (Cross dyeing).</p>`
      },
      {
        id: "sec5_2",
        title: "2. Dope Dyeing vs Piece Dyeing",
        content: `<p class="text-xs">Dope dyeing blends colorants into polymer melt prior to spinning, giving maximum lightfastness and saving water.</p>`
      },
      {
        id: "sec5_3",
        title: "3. Dyeing Defects & Grey Scale",
        content: `<p class="text-xs">• <strong>Listing</strong>: Selvage-to-selvage shade variance.<br>• <strong>Ending</strong>: Shade shift from start to end of roll.<br>• <strong>Sublimation</strong>: Disperse dyes vaporize at >70°C.<br>• <strong>AATCC Grey Scale</strong>: Standard pass is Grade 4.0 - 5.0.</p>`
      }
    ],
    miniQuiz: [
      {
        q_vi: "Thuốc nhuộm phân tán (Disperse dye) chuyên dụng để nhuộm cho loại xơ nào sau đây?",
        q_en: "Disperse dyes are specifically formulated to dye which fiber?",
        opts_vi: ["A. 100% Cotton", "B. Polyester (PET)", "C. Len cừu (Wool)", "D. Tơ tằm"],
        opts_en: ["A. 100% Cotton", "B. Polyester (PET)", "C. Wool", "D. Silk"],
        correct: 1,
        exp_vi: "Polyester là xơ tổng hợp kỵ nước, bắt buộc phải dùng thuốc nhuộm phân tán ở nhiệt độ cao 130°C.",
        exp_en: "Polyester is hydrophobic and requires disperse dyes under high temperature/pressure."
      },
      {
        q_vi: "Hiện tượng khác màu giữa mép trái và mép phải của cùng một khổ vải được gọi là gì?",
        q_en: "What is the shade inconsistency between the left and right selvages called?",
        opts_vi: ["A. Listing (Loang biên)", "B. Ending (Đuối màu cuối cây)", "C. Bleaching", "D. Felting"],
        opts_en: ["A. Listing (Selvage shading)", "B. Ending (Tailing)", "C. Bleaching", "D. Felting"],
        correct: 0,
        exp_vi: "Listing là lỗi lệch tông màu theo chiều ngang (từ biên trái sang biên phải).",
        exp_en: "Listing refers to shade variation across the fabric width."
      },
      {
        q_vi: "Trên thang đo Grey Scale của AATCC (từ cấp 1 đến cấp 5), mức điểm nào được coi là đạt chuẩn thương mại xuất khẩu?",
        q_en: "On the AATCC Grey Scale (1 to 5), what grade is considered commercially acceptable?",
        opts_vi: ["A. Cấp 1", "B. Cấp 2", "C. Cấp 3", "D. Cấp 4 đến cấp 5"],
        opts_en: ["A. Grade 1", "B. Grade 2", "C. Grade 3", "D. Grade 4 to 5"],
        correct: 3,
        exp_vi: "Chuẩn thương mại quốc tế yêu cầu độ bền màu giặt và ma sát từ cấp 4.0 trở lên.",
        exp_en: "International commercial standards require colorfastness ratings of Grade 4 to 5."
      }
    ]
  },
  {
    id: 6,
    number: "06",
    title_vi: "Công Nghệ Hoàn Tất Vải (Finishing Technologies)",
    title_en: "Textile Finishing & Performance Treatments",
    subtitle_vi: "Hoàn tất cảm giác, chống thấm DWR, màng thở Gore-Tex, sợi rỗng Thermolite, Coolcore, phản quang",
    subtitle_en: "Sensory finishing, DWR water repellency, Gore-Tex breathable membranes, Thermolite, Coolcore, Retro-reflection",
    badge: "Công Nghệ Cao",
    readTime: "15 phút",
    sections_vi: [
      {
        id: "sec6_1",
        title: "1. Hoàn Tất Cảm Giác: Làm Bóng, Làm Mờ & Làm Mềm",
        content: `<p class="text-xs">• <strong>Mercerizing</strong>: Kiềm hóa NaOH làm bóng cotton, tăng bền kéo 50%.<br>• <strong>Cire</strong>: Ép nhiệt bóng sáp chống xì lông (Down-proof).<br>• <strong>Peach-skin</strong>: Mài xước nhẹ tạo nhung vi mô da đào.</p>`
      },
      {
        id: "sec6_2",
        title: "2. Chống Thấm (WR/DWR) vs Chống Áp Lực Nước vs Màng Thở",
        content: `<p class="text-xs">• <strong>DWR (Spray Test)</strong>: Giọt nước lăn tròn lá sen (Lotus effect).<br>• <strong>Waterproof (mmH₂O)</strong>: Cột áp lực nước (600mm áo nhẹ, >10.000mm dã ngoại).<br>• <strong>Breathable Waterproof (Gore-Tex)</strong>: Màng vi xốp thoát hơi nước (MVP 3000/5000).</p>`
      },
      {
        id: "sec6_3",
        title: "3. Giữ Nhiệt Thermolite, Làm Mát Coolcore & Phản Quang",
        content: `<p class="text-xs">• Sợi rỗng <strong>Thermolite</strong> mô phỏng lông gấu Bắc Cực.<br>• Vật liệu chuyển pha <strong>PCM (NASA)</strong> tự điều nhiệt.<br>• Công nghệ làm mát cơ học <strong>Coolcore</strong>.<br>• Vải phản quang ngược <strong>Retro-reflective</strong> (>500 cd/lux·m²).</p>`
      }
    ],
    sections_en: [
      {
        id: "sec6_1",
        title: "1. Sensory Finishing",
        content: `<p class="text-xs">• <strong>Mercerization</strong>: NaOH adds silk-like luster to cotton.<br>• <strong>Cire</strong>: Seals fabric pores for down-proof outerwear.<br>• <strong>Peach-skin</strong>: Microfiber buffing creates peach fuzz texture.</p>`
      },
      {
        id: "sec6_2",
        title: "2. DWR vs Waterproof vs Breathable",
        content: `<p class="text-xs">• <strong>DWR</strong>: Lotus effect water beading.<br>• <strong>Waterproof</strong>: mmH₂O pressure resistance.<br>• <strong>Gore-Tex</strong>: Microporous breathable membrane.</p>`
      },
      {
        id: "sec6_3",
        title: "3. Thermal & Cooling Technologies",
        content: `<p class="text-xs">• <strong>Thermolite</strong>: Hollow insulating fibers.<br>• <strong>PCM</strong>: NASA Phase Change Material.<br>• <strong>Coolcore</strong>: Mechanical channel cooling.<br>• <strong>Retro-reflective</strong>: High visibility reflective tech (>500 cd/lux·m²).</p>`
      }
    ],
    miniQuiz: [
      {
        q_vi: "Chỉ số mmH₂O trong kiểm nghiệm vải thể hiện đặc tính nào?",
        q_en: "What does the mmH₂O metric measure in fabric testing?",
        opts_vi: ["A. Độ bóng bề mặt", "B. Khả năng chống áp lực nước thủy tĩnh (Waterproofness)", "C. Độ co rút sau giặt", "D. Tỷ lệ pha sợi len"],
        opts_en: ["A. Surface gloss", "B. Hydrostatic water pressure resistance (Waterproofness)", "C. Laundry shrinkage", "D. Wool blend percentage"],
        correct: 1,
        exp_vi: "mmH₂O đo áp lực nước tối đa mà màng vải có thể ngăn chặn trước khi bị rò rỉ nước.",
        exp_en: "mmH₂O measures the hydrostatic water pressure a fabric can withstand before leaking."
      },
      {
        q_vi: "Sợi cách nhiệt Thermolite được thiết kế dựa trên cấu trúc tự nhiên nào?",
        q_en: "Thermolite insulating fibers were engineered based on which natural structure?",
        opts_vi: ["A. Sợi rỗng của lông gấu Bắc Cực (Polar bear fur)", "B. Da cá sấu", "C. Vỏ cây thông", "D. Mạng nhện"],
        opts_en: ["A. Hollow structure of polar bear fur", "B. Crocodile skin", "C. Pine bark", "D. Spider silk"],
        correct: 0,
        exp_vi: "Thermolite có lõi rỗng chứa không khí cách nhiệt như lông gấu Bắc Cực.",
        exp_en: "Thermolite mimics the hollow air-trapping core of polar bear fur."
      },
      {
        q_vi: "Tại sao công nghệ làm mát Coolcore được đánh giá cao hơn các chất làm mát hóa học thông thường?",
        q_en: "Why is Coolcore mechanical cooling superior to chemical cooling agents?",
        opts_vi: ["A. Vì dựa vào cấu trúc rãnh mao dẫn cơ học, không bị mất tác dụng sau nhiều lần giặt", "B. Vì làm từ đá lạnh", "C. Vì có chứa cồn bay hơi", "D. Vì đổi màu trong bóng tối"],
        opts_en: ["A. It relies on mechanical fiber channels, retaining cooling performance after repeated washing", "B. Made of real ice", "C. Contains evaporating alcohol", "D. Glows in the dark"],
        correct: 0,
        exp_vi: "Coolcore làm mát hoàn toàn bằng cấu trúc tiết diện sợi cơ học, vĩnh viễn không bị rửa trôi.",
        exp_en: "Coolcore uses engineered yarn cross-sections for permanent, wash-durable cooling."
      }
    ]
  },
  {
    id: 7,
    number: "07",
    title_vi: "Công Nghệ In Vải (Textile Printing 3+1)",
    title_en: "Textile Printing & 3+1 Framework",
    subtitle_vi: "Mô hình phân loại 3+1, in lưới tròn, in chuyển nhiệt Sublimation, in kỹ thuật số DTP",
    subtitle_en: "3+1 Printing classification, Rotary Screen (600 rpm), Heat Transfer Sublimation, Digital DTP",
    badge: "Kỹ Thuật In",
    readTime: "11 phút",
    sections_vi: [
      {
        id: "sec7_1",
        title: "1. Khung Phân Loại 3+1 Tiêu Chí",
        content: `<p class="text-xs">1. Chất màu: Thuốc nhuộm (Dye) vs Bột màu (Pigment).<br>2. Phương pháp: In lăn, In lưới phẳng, In lưới tròn Rotary (600 rpm), In chuyển nhiệt, In kỹ thuật số DTP.<br>3. Môi trường: In ướt (Wet) vs In khô (Dry).<br>+ Kỹ thuật Novelty: In phá màu (Discharge), In đốt (Burn-out), In ép kim (Foil).</p>`
      },
      {
        id: "sec7_2",
        title: "2. In Kỹ Thuật Số DTP (Digital Textile Printing)",
        content: `<p class="text-xs">In trực tiếp từ file CAD lên vải, hệ 4 màu CMYK, không cần làm bản in khuôn, không giới hạn kích thước hoa văn, không dùng nước, MOQ thấp cực nhanh cho mẫu và fast fashion.</p>`
      },
      {
        id: "sec7_3",
        title: "3. Thuật Ngữ: Strike Off (S/O) & Blank Screen",
        content: `<p class="text-xs">• <strong>Strike Off (S/O)</strong>: Mẫu in thử thực tế duyệt trước khi in đại trà.<br>• <strong>Blank Screen</strong>: Khung lưới trắng lắp xen kẽ để ngăn lem màu.</p>`
      }
    ],
    sections_en: [
      {
        id: "sec7_1",
        title: "1. 3+1 Classification Framework",
        content: `<p class="text-xs">1. Colorant: Dye vs Pigment.<br>2. Method: Roller, Flat Screen, Rotary Screen, Heat Transfer, Digital DTP.<br>3. Medium: Wet vs Dry.<br>+ Novelty: Discharge, Burn-out, Foil, Flock.</p>`
      },
      {
        id: "sec7_2",
        title: "2. Digital Textile Printing (DTP)",
        content: `<p class="text-xs">Direct CAD-to-fabric CMYK printing, zero screen setup, photo-realistic resolution, waterless dry process, low MOQ for fast sampling.</p>`
      },
      {
        id: "sec7_3",
        title: "3. Strike Off (S/O) & Blank Screen",
        content: `<p class="text-xs">• <strong>Strike Off (S/O)</strong>: Fabric print sample for customer approval.<br>• <strong>Blank Screen</strong>: Spacer screen preventing ghosting and color bleeding.</p>`
      }
    ],
    miniQuiz: [
      {
        q_vi: "Kỹ thuật in phá màu (Discharge Printing) giải quyết vấn đề gì trong in vải?",
        q_en: "What critical issue does Discharge Printing solve?",
        opts_vi: ["A. In màu sáng/trắng sắc nét lên nền vải tối mà không bị cộm viền", "B. Làm vải bị rách theo ý muốn", "C. Tẩy sạch toàn bộ quần áo", "D. Giảm trọng lượng vải xuống 50%"],
        opts_en: ["A. Printing bright/white colors crisply on dark backgrounds without stiff ink build-up", "B. Tearing fabric intentionally", "C. Bleaching entire garments", "D. Reducing weight by 50%"],
        correct: 0,
        exp_vi: "In phá màu tẩy sạch thuốc nhuộm nền ở vùng in trước rồi mới nạp màu mới, cho hình in siêu sạch.",
        exp_en: "Discharge printing strips background dye before depositing new color on dark fabrics."
      },
      {
        q_vi: "Mẫu in thử thực tế trên vải thật có gắn mã màu để khách hàng duyệt trước khi sản xuất hàng loạt gọi là gì?",
        q_en: "What is the physical print sample called that requires buyer approval before mass production?",
        opts_vi: ["A. Lab Dip", "B. Strike Off (S/O)", "C. Packing List", "D. Yarn Skein"],
        opts_en: ["A. Lab Dip", "B. Strike Off (S/O)", "C. Packing List", "D. Yarn Skein"],
        correct: 1,
        exp_vi: "Strike Off (S/O) là thuật ngữ duyệt mẫu in thử trước khi in hàng loạt.",
        exp_en: "Strike Off (S/O) is the print test swatch approved before bulk production."
      },
      {
        q_vi: "Công nghệ in vải kỹ thuật số DTP (Digital Textile Printing) sử dụng hệ phân màu nào?",
        q_en: "Which color separation system is used by Digital Textile Printing (DTP)?",
        opts_vi: ["A. Hệ màu RGB", "B. Hệ 4 màu CMYK (Cyan, Magenta, Yellow, Black)", "C. Hệ màu đơn sắc", "D. Chỉ in được màu đen"],
        opts_en: ["A. RGB color system", "B. CMYK 4-color system (Cyan, Magenta, Yellow, Black)", "C. Monochromatic system", "D. Black ink only"],
        correct: 1,
        exp_vi: "DTP sử dụng 4 màu mực cơ bản CMYK phối trộn thành hàng triệu điểm ảnh sắc nét.",
        exp_en: "DTP uses 4-color CMYK overlay dots to produce photo-realistic prints."
      }
    ]
  },
  {
    id: 8,
    number: "08",
    title_vi: "Kiểm Tra Lỗi & Kiểm Nghiệm Lab (Inspection & Testing)",
    title_en: "Fabric Inspection & Lab Testing Protocols",
    subtitle_vi: "Hệ thống chấm điểm 4 điểm ASTM D5430, Buffer allowance, các bài test bền xé, bục nổ, trượt đường may",
    subtitle_en: "ASTM D5430 4-point system, Buffer allowance, Tearing, Bursting, Seam Slippage, Shrinkage testing",
    badge: "Chất Lượng",
    readTime: "12 phút",
    sections_vi: [
      {
        id: "sec8_1",
        title: "1. Hệ Thống 4 Điểm ASTM D5430",
        content: `<p class="text-xs">Lỗi 0-3": 1đ | 3-6": 2đ | 6-9": 3đ | >9" hoặc lỗ thủng: 4đ. Chuẩn Pass: ≤ 20 điểm/100yd. <strong>Pass ≠ Không lỗi</strong> (MD phải tính Buffer Allowance dự phòng).</p>`
      },
      {
        id: "sec8_2",
        title: "2. Các Bài Kiểm Nghiệm Lab Quan Trọng",
        content: `<p class="text-xs">• <strong>Tearing Strength (ASTM D1424)</strong>: Độ bền xé con lắc Elmendorf.<br>• <strong>Bursting Strength (ASTM D3786)</strong>: Bục nổ cho vải dệt kim.<br>• <strong>Seam Slippage</strong>: Trượt dãn đường may.<br>• <strong>Shrinkage</strong>: Độ co rút (Woven ≤ 3%, Knit ≤ 8%).</p>`
      }
    ],
    sections_en: [
      {
        id: "sec8_1",
        title: "1. ASTM D5430 4-Point System",
        content: `<p class="text-xs">Defect 0-3": 1 pt | 3-6": 2 pts | 6-9": 3 pts | >9" or hole: 4 pts. Max Pass threshold: ≤ 20 pts/100yd. Always allocate Buffer Allowance.</p>`
      },
      {
        id: "sec8_2",
        title: "2. Key Physical Lab Tests",
        content: `<p class="text-xs">• <strong>Tearing (ASTM D1424)</strong>: Elmendorf pendulum test.<br>• <strong>Bursting (ASTM D3786)</strong>: Pressure rupture for knits.<br>• <strong>Seam Slippage</strong>: Yarn displacement along seam lines.<br>• <strong>Shrinkage</strong>: Dimensional stability after wash.</p>`
      }
    ],
    miniQuiz: [
      {
        q_vi: "Theo tiêu chuẩn 4-Point System (ASTM D5430), một khuyết tật dài 5 inches trên vải bị phạt bao nhiêu điểm?",
        q_en: "According to ASTM D5430 4-point system, how many penalty points for a 5-inch defect?",
        opts_vi: ["A. 1 điểm", "B. 2 điểm", "C. 3 điểm", "D. 4 điểm"],
        opts_en: ["A. 1 point", "B. 2 points", "C. 3 points", "D. 4 points"],
        correct: 1,
        exp_vi: "Lỗi từ 3 đến 6 inches bị phạt 2 điểm.",
        exp_en: "Defects between 3 and 6 inches receive 2 penalty points."
      },
      {
        q_vi: "Bài test kiểm tra độ bền bục nổ (Bursting Strength - ASTM D3786) chuyên áp dụng cho loại vải nào?",
        q_en: "Bursting Strength testing (ASTM D3786) is primarily conducted on which fabric type?",
        opts_vi: ["A. Vải Dệt Thoi (Woven)", "B. Vải Dệt Kim (Knit)", "C. Vải bạt Canvas", "D. Da bò thật"],
        opts_en: ["A. Woven fabric", "B. Knitted fabric", "C. Heavy Canvas", "D. Genuine Leather"],
        correct: 1,
        exp_vi: "Vải dệt kim có tính đàn hồi cao, rất khó test xé rách nên dùng bài test bục nổ áp lực thủy lực.",
        exp_en: "Knits stretch rather than tear, requiring hydraulic/pneumatic bursting strength evaluation."
      },
      {
        q_vi: "Tại sao vải đạt chứng nhận PASS theo kiểm vải vẫn cần Merchandiser tính thêm Buffer Allowance khi mua?",
        q_en: "Why must Merchandisers add a Buffer Allowance even if fabric passes inspection?",
        opts_vi: ["A. Vì Pass chỉ có nghĩa lỗi nằm trong ngưỡng cho phép chứ không phải hoàn toàn không có lỗi", "B. Vì mua nhiều để được tặng quà", "C. Vì vải tự co lại 50% trong kho", "D. Không cần thiết"],
        opts_en: ["A. Because Pass means defects are within limits, not that the fabric is 100% flawless", "B. To receive promotional gifts", "C. Fabric shrinks 50% automatically", "D. Not necessary"],
        correct: 0,
        exp_vi: "Vải Pass vẫn chứa khuyết tật rải rác và hao hụt khi trải bàn cắt, cần mua dư để đảm bảo đủ sản lượng may.",
        exp_en: "Pass allows minor defects up to 20 pts/100yd; buffer covers cutting waste and isolated defects."
      }
    ]
  },
  {
    id: 9,
    number: "09",
    title_vi: "Hoạch Định Phụ Liệu Theo Dòng Hàng (Garment Planning)",
    title_en: "Apparel Sourcing & Garment Category Planning",
    subtitle_vi: "Khoa học chọn chất liệu cho Quần (Jeans, Chino, Tech pants), Áo (Sơ mi, T-shirt, Puffa, Trench coat, Đồ bơi, Y tế)",
    subtitle_en: "Material selection for Bottoms (Jeans, Chino, Tech), Tops (Dress, Polo, Blouse), Outerwear (Puffa, Trench), Swimwear",
    badge: "Thực Chiến",
    readTime: "16 phút",
    sections_vi: [
      {
        id: "sec9_1",
        title: "1. Quần (Bottoms) & Cử Động Khớp Gối",
        content: `<p class="text-xs">• Quần Jeans (Denim chịu ma sát, hút 50% mồ hôi).<br>• Quần Chino (Twill 20x16 128x60 đứng dáng).<br>• Quần Tech Pants (Sợi T400 matte, chống dính da, co giãn 4 chiều).<br>• Quần Tây Slacks (T/W pha len hoặc T/R stretch Nhật Bản rủ mềm).</p>`
      },
      {
        id: "sec9_2",
        title: "2. Áo Sơ Mi (Dress Shirts, Casual, Blouse) & Áo Polo",
        content: `<p class="text-xs">• Sơ mi công sở: 100% cotton chống nhăn Liquid Ammonia hoặc sợi 100s/2.<br>• Áo Blouse: Rayon Crepe, Cupra (Bemberg) bóng sang trọng, Poly Georgette.<br>• Áo Polo: Pique cotton/poly Coolmax thoáng khí.</p>`
      },
      {
        id: "sec9_3",
        title: "3. Áo Khoác Phao Puffa, Trench Coat, Đồ Bơi & Đồ Bảo Hộ",
        content: `<p class="text-xs">• Áo Puffa: Nylon 20d/15d/8d siêu nhẹ, Seamless Bonding chống xì lông.<br>• Trench Coat: Cotton Gabardine Burberry, PTT Memory Sorona.<br>• Đồ bơi: Microfiber Spandex anti-cling, sợi Olefin nhẹ nổi nước.<br>• Đồ bảo hộ y tế: PE không dệt ép film laminate Level 1-4.</p>`
      }
    ],
    sections_en: [
      {
        id: "sec9_1",
        title: "1. Bottoms Engineering & Knee Joint Mobility",
        content: `<p class="text-xs">• Jeans: Durable denim balancing 50% moisture.<br>• Chinos: 20x16 128x60 structured twill.<br>• Tech Pants: Matte T400 fibers, non-cling, 4-way stretch.<br>• Slacks: T/W wool blends or Japanese T/R stretch.</p>`
      },
      {
        id: "sec9_2",
        title: "2. Shirts, Tops & Polo Shirts",
        content: `<p class="text-xs">• Dress Shirts: 100% wrinkle-free cotton (Liquid Ammonia) or 100s/2 yarns.<br>• Blouses: Drapable Rayon Crepe, silky Cupra Bemberg, Poly Georgette.<br>• Polo: Pique knit with Coolmax moisture wicking.</p>`
      },
      {
        id: "sec9_3",
        title: "3. Outerwear (Puffa, Trench), Swimwear & Medical PPE",
        content: `<p class="text-xs">• Puffa: Ultra-light 20d/15d/8d Nylon, Seamless bonded channels.<br>• Trench: Burberry tight-weave Gabardine, PTT Memory Sorona.<br>• Swimwear: Anti-cling microfiber spandex, water-floating Olefin.<br>• Medical PPE: Laminated non-woven PE Level 1-4.</p>`
      }
    ],
    miniQuiz: [
      {
        q_vi: "Chất liệu cao cấp nào sau đây có nguồn gốc từ cellulose tái sinh có độ bóng và cảm giác tay gần như lụa tự nhiên, chuyên dùng cho áo blouse và lót vest sang trọng?",
        q_en: "Which premium regenerated cellulose fiber offers silk-like luster for luxury blouses and suit linings?",
        opts_vi: ["A. Sợi Thép", "B. Cupra (Bemberg)", "C. Đay (Jute)", "D. Bông thủy tinh"],
        opts_en: ["A. Steel fiber", "B. Cupra (Bemberg)", "C. Jute", "D. Fiberglass"],
        correct: 1,
        exp_vi: "Cupra (Bemberg) là sợi tái sinh cao cấp nhất từ xơ hạt bông, mềm rủ và bóng mượt như lụa.",
        exp_en: "Cupra (Bemberg) is a premium regenerated fiber with silk-like touch and elegance."
      },
      {
        q_vi: "Áo khoác phao Puffa hiện đại sử dụng công nghệ nào để triệt tiêu hoàn toàn nguy cơ xì lông vũ từ đường chỉ may?",
        q_en: "Modern Puffa jackets utilize which innovation to prevent down leakage at seams?",
        opts_vi: ["A. May 10 đường chỉ chồng lên nhau", "B. Công nghệ ép dán không đường may (Seamless Bonding / Seam Tape)", "C. Ngâm áo vào nước sôi", "D. Dùng keo 502"],
        opts_en: ["A. Sewing 10 seam lines", "B. Seamless Bonding / Seam Tape technology", "C. Boiling in water", "D. Superglue"],
        correct: 1,
        exp_vi: "Seamless Bonding ép dính 2 lớp vải tạo ống chần mà không có lỗ đâm kim, ngăn xì lông tuyệt đối.",
        exp_en: "Seamless bonding and seam tape eliminate needle holes, preventing feather leakage."
      },
      {
        q_vi: "Loại sợi nào được sử dụng trong quần áo dã ngoại (Tech pants) giúp co giãn thoải mái, bề mặt mờ lì và không dính rít vào da khi đổ mồ hôi?",
        q_en: "Which specialized fiber in Tech Pants offers comfortable stretch, a matte look, and zero skin-cling when sweating?",
        opts_vi: ["A. Sợi T400 / PTT (DuPont Sorona)", "B. Sợi Amiăng", "C. Sợi đồng nguyên chất", "D. Sợi cước câu cá"],
        opts_en: ["A. T400 / PTT fiber (DuPont Sorona)", "B. Asbestos", "C. Pure copper", "D. Fishing line"],
        correct: 0,
        exp_vi: "Sợi T400 có độ đàn hồi cơ học tự nhiên, bề mặt mờ và thoát ẩm vượt trội.",
        exp_en: "T400 / PTT provides mechanical stretch and non-cling performance."
      }
    ]
  },
  {
    id: 10,
    number: "10",
    title_vi: "Sinh Lý Học Da & Tiện Nghi Nhiệt (Skin Physiology)",
    title_en: "Human Skin Physiology & Thermal Comfort",
    subtitle_vi: "Cấu trúc 3 lớp da người, cơ chế điều nhiệt 86% qua bức xạ và ứng dụng thiết kế đồ thể thao ProSports",
    subtitle_en: "Epidermis, Dermis, Subcutaneous fat, 86% radiant heat loss, and Prosports activewear engineering",
    badge: "Tiện Nghi Da",
    readTime: "10 phút",
    sections_vi: [
      {
        id: "sec10_1",
        title: "1. 3 Lớp Da & Thụ Thể Cảm Giác",
        content: `<p class="text-xs">• <strong>Biểu bì (Epidermis)</strong>: pH 5.5 kháng khuẩn, tế bào sừng.<br>• <strong>Trung bì (Dermis)</strong>: Collagen, elastin, 100-200 thụ thể áp lực, 6-23 thụ thể lạnh, <3 thụ thể nóng (da nhạy cảm với lạnh hơn nóng).<br>• <strong>Hạ bì (Mỡ)</strong>: Cách nhiệt và giữ năng lượng gấp đôi cơ bắp.</p>`
      },
      {
        id: "sec10_2",
        title: "2. Cơ Chế Điều Nhiệt 86% & Trang Phục Prosports",
        content: `<p class="text-xs">Bức xạ nhiệt và bay hơi qua da (nhiệt ẩn - Latent heat) chiếm tới <strong>86%</strong> cơ chế tản nhiệt. Vải thể thao Prosports phải tối ưu hóa lưu thông khí và mao dẫn thoát ẩm để tránh bí bách dính da.</p>`
      }
    ],
    sections_en: [
      {
        id: "sec10_1",
        title: "1. Skin Layers & Sensory Receptors",
        content: `<p class="text-xs">• <strong>Epidermis</strong>: pH 5.5 acidic bacterial barrier.<br>• <strong>Dermis</strong>: Collagen/elastin with 100-200 pressure, 6-23 cold, and <3 warmth receptors per cm².<br>• <strong>Subcutaneous Fat</strong>: Stores twice the heat of muscle.</p>`
      },
      {
        id: "sec10_2",
        title: "2. 86% Radiant Heat Dissipation & Activewear",
        content: `<p class="text-xs">Radiation and latent heat evaporation account for <strong>86%</strong> of body heat regulation. Activewear must balance wicking and airflow to support homeostasis.</p>`
      }
    ],
    miniQuiz: [
      {
        q_vi: "Độ pH tự nhiên trên bề mặt lớp biểu bì (Epidermis) của da người khỏe mạnh là bao nhiêu?",
        q_en: "What is the natural pH level of human skin epidermis?",
        opts_vi: ["A. pH 1.0 (Axit cực mạnh)", "B. pH 5.5 (Axit nhẹ kháng khuẩn)", "C. pH 7.0 (Trung tính)", "D. pH 12.0 (Kiềm mạnh)"],
        opts_en: ["A. pH 1.0", "B. pH 5.5 (Mildly acidic barrier)", "C. pH 7.0 (Neutral)", "D. pH 12.0"],
        correct: 1,
        exp_vi: "Lớp màng axit trên biểu bì có pH 5.5 giúp ức chế vi khuẩn có hại.",
        exp_en: "Human skin mantle is mildly acidic at pH 5.5 to inhibit bacterial growth."
      },
      {
        q_vi: "Trên 1cm² da người, mật độ thụ thể cảm giác nào nhiều hơn hẳn thụ thể cảm nhận nóng (<3)?",
        q_en: "On 1cm² of skin, which sensory receptors far outnumber warmth receptors (<3)?",
        opts_vi: ["A. Thụ thể lạnh (6-23) và thụ thể áp lực (100-200)", "B. Không có thụ thể nào", "C. Thụ thể phát sáng", "D. Thụ thể sóng âm"],
        opts_en: ["A. Cold receptors (6-23) and pressure receptors (100-200)", "B. None", "C. Light receptors", "D. Sound receptors"],
        correct: 0,
        exp_vi: "Da người có 6-23 thụ thể lạnh và 100-200 thụ thể áp lực trên 1cm², nên da cảm nhận lạnh nhanh hơn nóng.",
        exp_en: "Skin has 6-23 cold and 100-200 pressure receptors per cm², making it more sensitive to cold than warmth."
      },
      {
        q_vi: "Bức xạ nhiệt và bay hơi qua da (nhiệt ẩn) chiếm khoảng bao nhiêu % trong tổng cơ chế tản nhiệt của cơ thể?",
        q_en: "Radiation and skin evaporation account for approximately what % of total body heat dissipation?",
        opts_vi: ["A. 10%", "B. 35%", "C. 50%", "D. 86%"],
        opts_en: ["A. 10%", "B. 35%", "C. 50%", "D. 86%"],
        correct: 3,
        exp_vi: "Bức xạ và bay hơi qua da chiếm tới 86% tổng lượng tản nhiệt của cơ thể người.",
        exp_en: "Radiation and evaporation account for up to 86% of total body heat loss."
      }
    ]
  }
];

// ==================== 17 GARMENT CATEGORIES FULL DECISION MATRIX ====================
const COMPREHENSIVE_MATRIX = {
  "jeans": {
    name_vi: "Quần Jeans / Denim (Denim Pants)",
    name_en: "Classic & Stretch Denim Jeans",
    fiber_vi: "98% Cotton OE (hoặc Ring spun) + 2% Spandex (hoặc 100% Cotton)",
    fiber_en: "98% OE/Ring-spun Cotton + 2% Spandex (or 100% Cotton)",
    yarn_vi: "Sợi OE 7s, 10s hoặc Sợi chập 20/2",
    yarn_en: "7s or 10s OE yarn / 20/2 plied",
    struct_vi: "Dệt chéo Twill 3/1 (sợi dọc chàm Indigo lộ mặt ngoài)",
    struct_en: "3/1 Right-hand Twill (warp-faced indigo)",
    finish_vi: "Giặt đá bọt Pumice (Stonewash) + Giặt Enzyme + Xử lý rũ hồ Desizing",
    finish_en: "Stonewash + Bio-Enzyme wash + Desizing",
    dye_vi: "Nhuộm chàm nhúng sợi Warp Indigo Dyeing",
    dye_en: "Warp Yarn Indigo Dyeing",
    qa_vi: "Kiểm soát độ co rút sau giặt (Shrinkage ≤ 3-5%) và độ vẹo ống quần (Torque/Skewing ≤ 3%). Bù trừ độ co khi cắt rập."
  },
  "chino": {
    name_vi: "Quần Chino Nam/Nữ (Chino Pants)",
    name_en: "Structured Chino Trousers",
    fiber_vi: "97% Cotton chải kỹ (Combed) + 3% Spandex",
    fiber_en: "97% Combed Cotton + 3% Spandex",
    yarn_vi: "Sợi Twill mật độ 20x16 hoặc 128x60",
    yarn_en: "20x16 or 128x60 Twill counts",
    struct_vi: "Dệt chéo Twill 2/1 hoặc 3/1 đứng phom dáng cổ điển",
    struct_en: "2/1 or 3/1 Structured Twill",
    finish_vi: "Mài lông da đào nhẹ (Peach finish) + Chống nhăn nhẹ",
    finish_en: "Light Peach-skin finish + Wrinkle resistance",
    dye_vi: "Nhuộm hoạt tính Reactive Piece Dyeing các tông Khaki/Muted",
    dye_en: "Reactive Piece Dyeing in Khaki/Muted shades",
    qa_vi: "Tránh pha sợi tổng hợp chất lượng thấp làm giảm cảm giác tay và gây xù lông. Kiểm tra độ bền ma sát Crocking."
  },
  "techpants": {
    name_vi: "Quần Công Nghệ Dã Ngoại (Outdoor Tech Pants)",
    name_en: "Performance Outdoor Tech Pants",
    fiber_vi: "88% Nylon 6-6 (hoặc Sợi T400 Sorona) + 12% Spandex",
    fiber_en: "88% Nylon 6-6 (or T400 Sorona) + 12% Spandex",
    yarn_vi: "Sợi ATY (Air Textured) 160d hoặc Sợi T400",
    yarn_en: "160d ATY or T400 mechanical stretch filament",
    struct_vi: "Dệt thoi chéo Twill 2/1 co giãn 4 chiều (4-way stretch)",
    struct_en: "2/1 Twill 4-way stretch woven structure",
    finish_vi: "Phủ trượt nước DWR 80/20 + Chống tia UV UPF 50+ + Chống bám dính da",
    finish_en: "DWR 80/20 water repellency + UPF 50+ + Anti-cling",
    dye_vi: "Dope Dyeing (Nhuộm hạt nhựa) hoặc Nhuộm thuốc nhuộm Axit có chất khóa màu",
    dye_en: "Solution Dope Dyeing or Acid dyestuffs with fixers",
    qa_vi: "Kiểm tra độ bền ma sát ướt Crocking (≥ Cấp 3.5) và độ bền xé rách đáy quần Elmendorf Tearing (≥ 25N)."
  },
  "jogger": {
    name_vi: "Quần Jogger & Activewear Thể Thao",
    name_en: "3D Seamless Joggers & Activewear",
    fiber_vi: "70% Cotton Combed + 25% Polyester + 5% Spandex (hoặc 100% Poly 3D Knit)",
    fiber_en: "70% Combed Cotton + 25% Poly + 5% Spandex",
    yarn_vi: "Sợi 32s/1 Ring Spun + Sợi lót 150d DTY",
    yarn_en: "32s/1 Ring Spun + 150d DTY backing yarn",
    struct_vi: "Dệt kim French Terry hoặc Dệt kim 3D Seamless không đường may",
    struct_en: "French Terry or 3D Seamless Circular Knit",
    finish_vi: "Xử lý giặt enzyme (Bio-Wash) + Chống vón cục Pilling",
    finish_en: "Bio-Enzyme wash + Anti-pilling finish",
    dye_vi: "Nhuộm hoạt tính kết hợp Giặt khử hóa chất (Reduction Cleaning R/C)",
    dye_en: "Reactive Dyeing + Reduction Cleaning (R/C)",
    qa_vi: "Kiểm soát độ bền bục nổ Bursting Strength (≥ 70 psi) tại đầu gối và độ co giãn đàn hồi phục hồi."
  },
  "slacks": {
    name_vi: "Quần Tây Công Sở Nam / Nữ (Slacks)",
    name_en: "Tailored Business Slacks (Men/Women)",
    fiber_vi: "Nam: 55% Polyester + 45% Wool (T/W). Nữ: 65% Poly + 32% Rayon + 3% Spandex (T/R Stretch Nhật)",
    fiber_en: "Men: 55% Poly + 45% Wool. Women: 65% Poly + 32% Rayon + 3% Spandex (Japanese T/R Stretch)",
    yarn_vi: "Sợi Worsted len mảnh 40s-80s hoặc Sợi T/R xoắn kỹ",
    yarn_en: "Worsted wool 40s-80s or high-twist T/R yarn",
    struct_vi: "Dệt thoi Tropical, Gabardine hoặc Venetian rủ mềm",
    struct_en: "Tropical, Gabardine, or Venetian Weave",
    finish_vi: "Hoàn tất chống nhăn (Resilience finish) + Xử lý khử mùi",
    finish_en: "Resilience wrinkle-free finish + Anti-odor",
    dye_vi: "Top Dyeing (nhuộm dải bông) tạo Melange hoặc Piece Dyeing",
    dye_en: "Top Dyeing for melange tones or Piece Dyeing",
    qa_vi: "Kiểm soát độ rủ (Drapability) và hạn chế xù lông Pilling khi ma sát với ghế ngồi làm việc."
  },
  "pajamas": {
    name_vi: "Quần Ngủ & Đồ Mặc Nhà (Pajamas & Loungewear)",
    name_en: "Pajamas & Winter Loungewear",
    fiber_vi: "Mùa đông: Micro Polar Fleece / Acrylic Boa. Mùa hè: 100% Rayon Chiffon / Crepe (<15% pha)",
    fiber_en: "Winter: Micro Polar Fleece / Acrylic Boa. Summer: 100% Rayon Crepe/Chiffon",
    yarn_vi: "Sợi vi mô Microfiber 75d hoặc Sợi Rayon Crepe xoắn cao",
    yarn_en: "75d Microfiber or High-twist Rayon Crepe",
    struct_vi: "Dệt kim vòng xốp thoáng khí hoặc Dệt thoi Crepe mỏng nhẹ",
    struct_en: "Looped Knit Fleece or Lightweight Crepe",
    finish_vi: "Chải cào lông mềm (Brushing) + Xử lý thoáng khí vùng đùi",
    finish_en: "Soft Brushing + Airflow optimization",
    dye_vi: "Nhuộm hoạt tính dịu nhẹ cho da nhạy cảm",
    dye_en: "Mild Reactive Dyeing for sensitive skin",
    qa_vi: "Độ thoáng khí thoát ẩm là yếu tố sống còn tránh bí bách dính rít da vùng đùi. Hạn chế Rayon >15% co rút giặt."
  },
  "dressshirt": {
    name_vi: "Áo Sơ Mi Công Sở Cao Cấp (Dress Shirts)",
    name_en: "Wrinkle-Free Premium Dress Shirts",
    fiber_vi: "100% Cotton ELS (Pima / Giza Ai Cập) hoặc CVC (60% Cotton + 40% Poly)",
    fiber_en: "100% ELS Cotton (Pima/Giza) or CVC (60/40)",
    yarn_vi: "Sợi đôi 80s/2 hoặc 100s/2 Combed Ring Spun Yarn",
    yarn_en: "80s/2 or 100s/2 two-ply Combed Ring Spun",
    struct_vi: "Dệt trơn Poplin, Cotton Lawn 60s+ hoặc Voile 80s thoáng mát",
    struct_en: "Poplin, 60s+ Cotton Lawn, or 80s Voile",
    finish_vi: "Chống nhăn vĩnh viễn Liquid Ammonia + Kiềm hóa Mercerizing + Snow White",
    finish_en: "Liquid Ammonia wrinkle-free + Mercerization + Optical White",
    dye_vi: "Nhuộm sợi Yarn-Dyed hoặc Nhuộm hoạt tính cao cấp",
    dye_en: "Yarn-Dyed woven checks or Reactive Piece Dyeing",
    qa_vi: "Kiểm soát độ pH hoàn tất 5.5 - 6.0 để tránh ố vàng (Yellowing) và trượt đường may (Seam Slippage)."
  },
  "casualshirt": {
    name_vi: "Áo Sơ Mi Casual & Oxford (Casual Oxford Shirts)",
    name_en: "Casual & Oxford Button-Down Shirts",
    fiber_vi: "100% Cotton hoặc CVC Cotton/Poly",
    fiber_en: "100% Cotton or CVC Cotton/Poly",
    yarn_vi: "Sợi đôi 40s/2 hoặc 80/2 Combed",
    yarn_en: "40s/2 or 80/2 Combed Yarn",
    struct_vi: "Dệt Oxford (10x10, 65x42) hoặc Dệt caro sọc nhuộm sợi",
    struct_en: "Oxford Plain Weave (10x10, 65x42)",
    finish_vi: "Giặt Bio-Washing mềm mặt + Xử lý chống co",
    finish_en: "Bio-Enzyme wash + Pre-shrinking",
    dye_vi: "Nhuộm sợi Yarn-Dyed (họa tiết caro tối giúp giấu nếp nhăn và vết bẩn)",
    dye_en: "Yarn-Dyed check patterns (hides creases)",
    qa_vi: "Kiểm soát độ lệch họa tiết (Joint line / Skewing ≤ 2%) khi may ráp thân và túi áo."
  },
  "polo": {
    name_vi: "Áo Polo Thể Thao Mùa Hè (Summer Pique Polo)",
    name_en: "Performance Pique Polo Shirts",
    fiber_vi: "65% Cotton Pima + 35% Polyester Coolmax (hoặc pha 5% Spandex)",
    fiber_en: "65% Pima Cotton + 35% Coolmax Polyester",
    yarn_vi: "Sợi 40s/2 hoặc 80/2 Combed Ring Spun",
    yarn_en: "40s/2 or 80/2 Combed Ring Spun Yarn",
    struct_vi: "Dệt kim ngang kiểu Lacoste Pique dạng tổ ong thoáng khí",
    struct_en: "Honeycomb Weft-knitted Lacoste Pique",
    finish_vi: "Kiềm hóa Mercerizing + Hoàn tất thoát ẩm nhanh Wicking",
    finish_en: "Mercerization + Quick-dry Wicking Finish",
    dye_vi: "Nhuộm 2 bước: Reactive (Cotton) + Disperse (Poly)",
    dye_en: "2-Step Dyeing: Reactive + Disperse",
    qa_vi: "Kiểm soát độ co rút sau giặt (≤ 5%) và độ vặn sườn Torque (≤ 3%). Ưu tiên màu Assorted tránh loang màu."
  },
  "blouse": {
    name_vi: "Áo Blouse Nữ Thời Trang (Women's Blouses)",
    name_en: "Flowy Women's Blouses",
    fiber_vi: "100% Rayon Georgette / Crepe, hoặc Cupra (Bemberg), hoặc Poly Dobby Chiffon",
    fiber_en: "100% Rayon Georgette/Crepe, Cupra (Bemberg), or Poly Chiffon",
    yarn_vi: "Sợi Filament siêu mảnh 50d/75d hoặc Sợi xoắn cao High-twist",
    yarn_en: "50d/75d Microfiber or High-twist yarn",
    struct_vi: "Dệt thoi rủ mềm (Drapable woven): Georgette, Challis, Dobby Chiffon",
    struct_en: "Drapable Woven: Georgette, Challis, Chiffon",
    finish_vi: "Giặt cát Sand-washing tạo cảm giác bột mịn (Powdery feel)",
    finish_en: "Sand-washing for powdery hand feel",
    dye_vi: "Nhuộm phân tán Disperse hoặc In kỹ thuật số DTP",
    dye_en: "Disperse Dyeing or Digital DTP printing",
    qa_vi: "Cảnh báo người dùng về giặt nhẹ/giặt khô đối với Rayon và Cupra để tránh co rút biến dạng."
  },
  "wintershirt": {
    name_vi: "Áo Sơ Mi Mùa Đông (Winter Flannel & Wool Shirts)",
    name_en: "Warm Winter Flannel & Fine Wool Shirts",
    fiber_vi: "100% Cotton Flannel chải cào (NM36/2) hoặc Fine Wool Merino (<18µm) / Cashmere (<14µm)",
    fiber_en: "100% Brushed Cotton Flannel (NM36/2) or Fine Wool (<18µm) / Cashmere (<14µm)",
    yarn_vi: "Sợi chải kỹ NM36/2 hoặc Sợi len siêu mịn",
    yarn_en: "NM36/2 twill yarn or ultra-fine wool",
    struct_vi: "Dệt chéo Twill chải lông bề mặt (Brushed nap) hoặc Áo ép dán Bonding lót lông vũ",
    struct_en: "Brushed Twill or Bonded Down shirt",
    finish_vi: "Chải cào bông bề mặt (Brushing) tăng túi khí giữ nhiệt",
    finish_en: "Surface Brushing for air trapping",
    dye_vi: "Nhuộm sợi Yarn-dyed họa tiết caro truyền thống",
    dye_en: "Yarn-dyed classic winter plaids",
    qa_vi: "Sợi len tiếp xúc trực tiếp da phải nhỏ hơn 18 micron để không gây ngứa châm chích (Itchiness)."
  },
  "puffa": {
    name_vi: "Áo Khoác Phao Giữ Nhiệt Cao Cấp (Puffa Jacket)",
    name_en: "Premium Insulated Puffa Jacket",
    fiber_vi: "Vỏ ngoài: 100% Nylon siêu nhẹ 20d/15d/8d/5d. Lót: Sợi rỗng Thermolite / Lông vũ",
    fiber_en: "Shell: Ultra-light 20d/15d/8d/5d Nylon. Fill: Thermolite / Down",
    yarn_vi: "Sợi Filament Microfiber 20d/36f hoặc 15d Full Dull",
    yarn_en: "20d/36f or 15d Full Dull Microfiber",
    struct_vi: "Dệt thoi Plain Weave mật độ cao + Ép dán Seamless Bonding Channels 3-5 lớp",
    struct_en: "High-density Plain Weave + 3-5 Layer Seamless Bonding",
    finish_vi: "Cán ép nhiệt Cire Finishing (Down-proof) + Lớp phủ mờ Matt 8d + Màng thở TPU",
    finish_en: "Cire down-proof pressing + Matt 8d finish + Breathable TPU",
    dye_vi: "Thuốc nhuộm Axit (Nylon) hoặc Dope Dyeing",
    dye_en: "Acid dyestuff (Nylon) or Dope Dyeing",
    qa_vi: "Bắt buộc test kiểm tra xì lông vũ (Down Leakage Test) và dán Seam Tape các đường may."
  },
  "trench": {
    name_vi: "Áo Khoác Dáng Dài Trench Coat (Burberry Style)",
    name_en: "Classic Trench Coat (Burberry Style)",
    fiber_vi: "60% Cotton chải kỹ + 40% Polyester PTT Memory (Sorona)",
    fiber_en: "60% Combed Cotton + 40% PTT Memory Polyester (Sorona)",
    yarn_vi: "Sợi xoắn đôi 80s/2 hoặc sợi lai PTT/Microfiber",
    yarn_en: "80s/2 two-ply yarn or PTT/Microfiber blend",
    struct_vi: "Dệt chéo Gabardine mật độ sợi dọc cực cao (Warp-dominant)",
    struct_en: "High-density Warp-dominant Gabardine Twill",
    finish_vi: "Xử lý nhớ phom dáng Memory Finish + Chống thấm DWR",
    finish_en: "Memory wrinkle-retention finish + DWR water repellency",
    dye_vi: "Nhuộm 2 bước: Disperse (Poly) + Reactive (Cotton)",
    dye_en: "2-Step Dyeing: Disperse (Poly) + Reactive (Cotton)",
    qa_vi: "Kiểm soát hiện tượng loang màu Migration và giữ độ cứng đứng phom dáng (Stiffness)."
  },
  "swimwear": {
    name_vi: "Đồ Bơi & Quần Bơi Hiệu Suất Cao (Swimwear)",
    name_en: "Performance Swimwear & Trunks",
    fiber_vi: "80% Microfiber Nylon (hoặc Sợi Olefin nhẹ nổi nước) + 20% X-tra Life Spandex",
    fiber_en: "80% Microfiber Nylon (or water-floating Olefin) + 20% Spandex",
    yarn_vi: "Sợi Filament Microfiber 40d/72f",
    yarn_en: "40d/72f Microfiber filament",
    struct_vi: "Dệt kim dọc Warp Knit kiểu Tricot hoặc Seersucker dệt nổi chống dính",
    struct_en: "Warp-knit Tricot or Anti-cling Seersucker",
    finish_vi: "Kháng clo nước hồ bơi + Chống tia cực tím UPF 50+ + Chống bám dính da (Anti-cling)",
    finish_en: "Chlorine resistant + UPF 50+ + Anti-cling quick dry",
    dye_vi: "Thuốc nhuộm Axit có chất khóa màu chống phai nước muối & clo",
    dye_en: "Acid dyestuff with chlorine/saltwater color lock",
    qa_vi: "Tránh giặt sấy nhiệt cao trên 60°C làm đứt gãy sợi đàn hồi Spandex."
  },
  "scrubs": {
    name_vi: "Đồ Bảo Hộ Y Tế & Áo Phẫu Thuật (Medical PPE & Scrubs)",
    name_en: "Medical PPE, Hazmat & Barrier Gowns",
    fiber_vi: "Vải không dệt Non-woven Polyethylene (PE) hoặc 100% Polyester Microfiber dệt chặt",
    fiber_en: "Non-woven Polyethylene (PE) or high-density Microfiber",
    yarn_vi: "Màng sợi Melt-blown cán ép nhiệt kết dính",
    yarn_en: "Melt-blown continuous web matrix",
    struct_vi: "Cấu trúc mạng sợi kỹ thuật không dệt (Nonwoven laminated)",
    struct_en: "Laminated non-woven membrane matrix",
    finish_vi: "Kháng khuẩn (Antimicrobial) + Chống thấm chất lỏng và máu + Hấp tiệt trùng Autoclavable",
    finish_en: "Antimicrobial + Fluid-repellent + 75+ Autoclavable cycles",
    dye_vi: "Dope Dyeing (Nhuộm hạt nhựa)",
    dye_en: "Solution Dope Dyeing",
    qa_vi: "Phải đạt chứng chỉ kháng thấm màng cấp độ Level 1 - 4 và chịu được 75+ chu kỳ hấp tiệt trùng."
  },
  "traveler": {
    name_vi: "Trang Phục Du Lịch Lịch Sự (Traveler Suit)",
    name_en: "Comfortable Airport-Ready Traveler Suit",
    fiber_vi: "85% Polyester Microfiber + 15% Spandex (hoặc Vải Velour dệt kim)",
    fiber_en: "85% Microfiber Polyester + 15% Spandex (or Velour Knit)",
    yarn_vi: "Sợi Microfiber dệt kim đàn hồi nhẹ",
    yarn_en: "Elastic soft-touch Microfiber knit yarn",
    struct_vi: "Dệt kim Velour có độ rủ, mềm mại và co giãn đa chiều",
    struct_en: "Stretchable Velour Knit with soft luster",
    finish_vi: "Xử lý chống nhăn tuyệt đối (Wrinkle-Free) + Thoáng khí + Bề mặt mờ (Matte)",
    finish_en: "Wrinkle-Free + Breathable + Matte finish",
    dye_vi: "Nhuộm phân tán Disperse Dyeing",
    dye_en: "Disperse Dyeing",
    qa_vi: "Vải phải chịu được hơn 10 tiếng ngồi trên máy bay mà không bị nhàu gãy nếp, giữ form lịch sự ngay khi hạ cánh."
  },
  "farmer": {
    name_vi: "Đồ Lao Động Nông Nghiệp Hiện Đại (Farmer Wear)",
    name_en: "Modern Functional Farmer Workwear",
    fiber_vi: "65% Polyester + 35% Cotton (T/C) hoặc Canvas gia cố sợi Ripstop",
    fiber_en: "65% Poly + 35% Cotton (T/C) with Ripstop grid",
    yarn_vi: "Sợi xoắn đôi 20s/2 chịu lực kéo đứt cao",
    yarn_en: "High-tenacity 20s/2 plied yarn",
    struct_vi: "Dệt chéo Twill dày dặn kết hợp lưới thoáng khí (Mesh) vùng lưng và nách",
    struct_en: "Heavyweight Twill with breathable mesh panels",
    finish_vi: "Chống bám bẩn (Soil release) + Chống tia UV gay gắt UPF 50+ + Chống thấm nhẹ",
    finish_en: "Soil release + UPF 50+ UV blocking + Light DWR",
    dye_vi: "Nhuộm thuốc nhuộm Hoàn nguyên (Vat Dyes) hoặc Dope Dyeing chịu nắng",
    dye_en: "Vat Dyeing or Dope Dyeing for extreme sunfastness",
    qa_vi: "Tích hợp công nghệ thời trang Outdoor dã ngoại vào đồ lao động để tăng tối đa độ bền và sự thoáng mát."
  }
};

// ==================== 65+ GLOSSARY DATABASE (NO KOREAN CHARACTERS) ====================
const GLOSSARY_DATA = [
  { term: "AATCC", trans: "American Association of Textile Chemists and Colorists", def: "Hiệp hội Kỹ sư Hóa học & Màu sắc Dệt may Hoa Kỳ - Tổ chức tiêu chuẩn kiểm nghiệm hóa học và độ bền màu lớn nhất thế giới.", cat: "Tiêu Chuẩn" },
  { term: "Air Permeation", trans: "Độ thông khí của vải", def: "Khả năng cho không khí lưu thông qua bề mặt vải, đánh giá tính thoáng mát hoặc cản gió (Windproof).", cat: "Kiểm Nghiệm" },
  { term: "ASTM", trans: "American Society for Testing and Materials", def: "Hiệp hội Thử nghiệm & Vật liệu Hoa Kỳ - Thiết lập các phương pháp kiểm tra cơ lý tính (bền kéo, bền xé, bục nổ...).", cat: "Tiêu Chuẩn" },
  { term: "ATY", trans: "Air Textured Yarn", def: "Sợi nhăn xử lý bằng khí nén tạo các vòng loop xốp, mang lại cảm giác mềm mại như bông/len tự nhiên (Taslan 160d).", cat: "Sợi" },
  { term: "Autoclavable", trans: "Khả năng hấp tiệt trùng", def: "Tiêu chuẩn vải y tế chịu được nhiệt độ và áp suất cao trong nồi hấp vô trùng (trên 75 chu kỳ).", cat: "Hoàn Tất" },
  { term: "Bale Packing", trans: "Đóng gói kiện vải dạng gấp", def: "Phương pháp gấp xếp vải thành chồng kiện hàng, tiết kiệm không gian lưu kho.", cat: "Sản Xuất" },
  { term: "Ballistic Nylon", trans: "Nylon chịu lực cao", def: "Vải nylon siêu bền sử dụng sợi 1680d, có lõi Kevlar gia cố, chuyên dùng cho đồ bảo hộ và thiết bị quân sự.", cat: "Chất Liệu" },
  { term: "Bast Fiber", trans: "Xơ thân cây (Xơ gai)", def: "Nhóm xơ tự nhiên thu hoạch từ thân cây: Lanh (Flax/Linen), Gai (Ramie), Gai dầu (Hemp), Đay (Jute).", cat: "Xơ" },
  { term: "Beaming", trans: "Cuộn sợi lên trục dệt", def: "Bước chuẩn bị cuối cùng gom hàng nghìn sợi dọc lên một trục lớn trước khi đưa lên máy dệt.", cat: "Dệt" },
  { term: "Bio-Washing", trans: "Giặt xử lý bằng Enzyme Cellulase", def: "Quy trình sử dụng enzyme sinh học ăn mòn các sợi bông thừa, làm bề mặt vải mềm mịn như da đào.", cat: "Hoàn Tất" },
  { term: "Blank Screen", trans: "Khung in trắng ngăn cách", def: "Khung lưới không mang mực lắp xen kẽ trong máy in lưới phẳng để tránh hiện tượng lem màu và bóng ma.", cat: "In Vải" },
  { term: "Blue Scale", trans: "Thang màu xanh chuẩn AATCC", def: "Thang đo 8 cấp độ dùng để đánh giá độ bền màu của vải trước tác động của tia tử ngoại (UV).", cat: "Kiểm Nghiệm" },
  { term: "Bowing", trans: "Hiện tượng võng canh", def: "Lỗi dệt/nhuộm làm hoa văn sợi ngang bị cong võng hình cánh cung (tiêu chuẩn cho phép ≤ 3%).", cat: "Lỗi Vải" },
  { term: "Buffer Allowance", trans: "Tỷ lệ dự phòng hao hụt", def: "Lượng vải mua dự phòng thêm ngoài định mức để bù trừ phần vải lỗi khi cắt may chuyền.", cat: "Quản Lý Đơn Hàng" },
  { term: "Bursting Strength", trans: "Độ bền bục nổ", def: "Phương pháp đo áp lực thủy lực phá vỡ mẫu vải dệt kim theo tiêu chuẩn ASTM D3786.", cat: "Kiểm Nghiệm" },
  { term: "Carding", trans: "Chải sơ bông", def: "Công đoạn xé tơi và làm sạch sơ bộ các bó xơ bông trước khi kéo sợi.", cat: "Kéo Sợi" },
  { term: "Cashmere", trans: "Len dê Kashmir", def: "Xơ lông tơ dê cực mịn (14 - 19 micron), mềm mại và giữ nhiệt gấp nhiều lần len cừu thông thường.", cat: "Xơ" },
  { term: "Cheese Dyeing", trans: "Nhuộm búp sợi phô mai", def: "Kỹ thuật nhuộm sợi đã cuộn chặt quanh ống có lỗ bằng áp suất cao, cho độ đều màu tuyệt đối.", cat: "Nhuộm" },
  { term: "Cire Finishing", trans: "Hoàn tất lăn ép nhiệt bóng sáp", def: "Ép nhiệt làm chảy nhẹ bề mặt sợi nylon/poly để làm bóng và chống xì lông vũ (Down-proof).", cat: "Hoàn Tất" },
  { term: "Clo Value", trans: "Chỉ số giữ nhiệt", def: "Đơn vị đo lường khả năng cách nhiệt của quần áo (≤1 cho mùa hè, ≥3 cho mùa đông).", cat: "Kiểm Nghiệm" },
  { term: "Combing", trans: "Chải kỹ sợi", def: "Bước tinh lọc loại bỏ xơ ngắn dưới 2cm để tạo ra sợi Combed Yarn cao cấp, mịn dai và ít xù lông.", cat: "Kéo Sợi" },
  { term: "Coolcore", trans: "Công nghệ sợi làm mát cơ học", def: "Vải làm mát dựa trên cấu trúc tiết diện rãnh mao dẫn cơ học, không dùng hóa chất phụ gia.", cat: "Hoàn Tất" },
  { term: "Crimp", trans: "Độ xoăn gợn tự nhiên của xơ", def: "Cấu trúc lượn sóng tự nhiên của len giúp giữ lại các túi khí cách nhiệt và tăng tính đàn hồi.", cat: "Xơ" },
  { term: "Crocking", trans: "Độ bền màu ma sát", def: "Hiện tượng màu vải bị lem sang bề mặt da hoặc vải khác do cọ xát cơ học khô hoặc ướt.", cat: "Kiểm Nghiệm" },
  { term: "Cross Dyeing", trans: "Kỹ thuật nhuộm chéo 2 màu", def: "Nhuộm kết hợp sợi Poly thường và Cationic Poly trong 1 bể nhuộm để tạo hiệu ứng 2 màu Z-tone.", cat: "Nhuộm" },
  { term: "Cupra (Bemberg)", trans: "Xơ tái sinh cao cấp Cupra", def: "Xơ xenlulozo tái sinh từ xơ vụn hạt bông, mềm rủ và bóng láng như lụa tự nhiên.", cat: "Xơ" },
  { term: "Denier (D)", trans: "Chỉ số độ dày sợi trực tiếp", def: "Trọng lượng tính bằng gam của 9.000 mét sợi (Denier càng lớn sợi càng to/dày).", cat: "Đo Lường" },
  { term: "Discharge Print", trans: "Kỹ thuật in phá màu", def: "In hóa chất tẩy màu nền tối trước khi in họa tiết màu sáng lên trên, cho hình in mềm sạch.", cat: "In Vải" },
  { term: "Dope Dyeing", trans: "Nhuộm trước khi kéo sợi", def: "Pha trộn hạt màu Masterbatch vào polymer nóng chảy trước khi ép thành sợi, bền màu vĩnh viễn.", cat: "Nhuộm" },
  { term: "Down-Proof", trans: "Xử lý chống xì lông vũ", def: "Công nghệ dệt mật độ cao và cán màng cire giúp ngăn chặn lông vũ chui qua các khe vải.", cat: "Hoàn Tất" },
  { term: "DTY", trans: "Draw Textured Yarn", def: "Sợi filament kéo dán xử lý nhiệt tạo nhăn, phổ biến nhất trong đồ thể thao.", cat: "Sợi" },
  { term: "DWR", trans: "Durable Water Repellent", def: "Lớp phủ hóa học giúp bề mặt vải trượt nước dạng hạt theo hiệu ứng lá sen (Lotus effect).", cat: "Hoàn Tất" },
  { term: "Ending / Tailing", trans: "Lỗi đuối màu cuối cây vải", def: "Hiện tượng khác màu ở phần cuối cuộn vải do cạn thuốc nhuộm trong mẻ nhuộm.", cat: "Lỗi Vải" },
  { term: "Felting", trans: "Hiện tượng nỉ hóa của xơ len", def: "Các vảy biểu bì trên xơ len khóa chặt vào nhau khi gặp ma sát và nước nóng.", cat: "Xơ" },
  { term: "Four-Point System", trans: "Hệ thống kiểm vải 4 điểm", def: "Tiêu chuẩn chấm điểm phạt lỗi vải theo ASTM D5430 (tối đa 20 điểm/100yd là Pass).", cat: "Kiểm Nghiệm" },
  { term: "Gabardine", trans: "Vải dệt chéo Gabardine", def: "Vải dệt twill sợi dọc mật độ cao, chống gió nước truyền thống của áo khoác Burberry.", cat: "Chất Liệu" },
  { term: "Gauge (G)", trans: "Mật độ kim máy dệt kim", def: "Số lượng kim đan trên mỗi inch của máy dệt kim (Gauge càng cao vải càng mịn dày).", cat: "Dệt" },
  { term: "Gore-Tex", trans: "Màng vi xốp chống thấm thoáng khí", def: "Màng polytetrafluoroethylene giãn nở (ePTFE) cho hơi mồ hôi thoát ra và chặn nước mưa.", cat: "Chất Liệu" },
  { term: "Grey Scale", trans: "Thước xám AATCC đánh giá phai màu", def: "Thang đo 5 cấp độ đánh giá mức độ phai màu và lem màu trong phòng Lab (chuẩn ≥ Cấp 4).", cat: "Kiểm Nghiệm" },
  { term: "Hydrophilic", trans: "Tính chất ưa nước (hút ẩm)", def: "Đặc tính của xơ tự nhiên và xơ tái sinh hấp thụ nước vào cấu trúc phân tử.", cat: "Xơ" },
  { term: "Hydrophobic", trans: "Tính chất kỵ nước (chống thấm)", def: "Đặc tính của sợi tổng hợp như Polyester, PP, đẩy lùi nước.", cat: "Xơ" },
  { term: "ITY", trans: "Interlock Twisted Yarn", def: "Sợi xoắn kết hợp 2 loại sợi có độ co rút khác nhau tạo độ co giãn cực đại.", cat: "Sợi" },
  { term: "Jacquard", trans: "Công nghệ dệt hoa văn Jacquard", def: "Kiểu dệt phức tạp điều khiển từng sợi dọc độc lập để dệt hoa văn lớn nghệ thuật.", cat: "Dệt" },
  { term: "Kevlar", trans: "Sợi Aramid siêu bền chịu lực", def: "Sợi nhân tạo chịu lực kéo và nhiệt độ cực cao, dùng cho áo chống đạn và đồ bảo hộ.", cat: "Xơ" },
  { term: "Lab Dip (B/T)", trans: "Mẫu nhuộm thử phòng thí nghiệm", def: "Mẫu vải nhỏ nhuộm thử trong Lab để khách hàng duyệt màu trước khi sản xuất đại trà.", cat: "Nhuộm" },
  { term: "Listing", trans: "Lỗi lệch màu hai biên vải", def: "Hiện tượng màu sắc ở mép trái và mép phải cây vải không đồng đều.", cat: "Lỗi Vải" },
  { term: "LOI", trans: "Limiting Oxygen Index", def: "Chỉ số nồng độ oxy tối thiểu cần thiết để duy trì sự cháy của xơ dệt.", cat: "Kiểm Nghiệm" },
  { term: "Lumen", trans: "Ruột rỗng trong xơ bông", def: "Khoảng không khí bên trong xơ bông giúp giữ nhiệt và tạo độ xốp nhẹ.", cat: "Xơ" },
  { term: "Mercerization", trans: "Xử lý kiềm hóa bông", def: "Xử lý bông bằng NaOH dưới lực căng để tăng độ bóng, tăng 50% độ bền và tăng hút màu.", cat: "Hoàn Tất" },
  { term: "Microfiber", trans: "Vi sợi siêu mịn", def: "Sợi có độ mảnh dưới 1 Denier (mảnh bằng 1/16 sợi tóc người), siêu mềm mại.", cat: "Sợi" },
  { term: "MVS", trans: "Murata Vortex Spinning", def: "Công nghệ kéo sợi khí xoáy Nhật Bản tạo ra sợi siêu mịn không xù lông.", cat: "Kéo Sợi" },
  { term: "Ne (English Count)", trans: "Chỉ số sợi bông hệ Anh", def: "Số cuộn 840 yards nặng 1 pound (Ne càng lớn sợi càng mảnh).", cat: "Đo Lường" },
  { term: "Non-woven", trans: "Vải không dệt", def: "Vải tạo thành bằng cách ép nhiệt/hóa học trực tiếp các xơ ngắn không qua kéo sợi.", cat: "Dệt" },
  { term: "Packing Factor (PF)", trans: "Độ đặc kết cấu xơ", def: "Tỷ lệ đặc của xơ sợi ảnh hưởng đến độ rủ và độ thoáng khí của vải.", cat: "Xơ" },
  { term: "PCM", trans: "Phase Change Material", def: "Vật liệu chuyển pha của NASA tự điều hòa nhiệt độ hấp thụ và giải phóng nhiệt.", cat: "Hoàn Tất" },
  { term: "Pilling", trans: "Hiện tượng xù lông vón hạt", def: "Các sợi xơ ngắn bị cọ xát cuộn tròn thành các viên hạt nhỏ trên mặt vải.", cat: "Lỗi Vải" },
  { term: "Reduction Cleaning (R/C)", trans: "Quy trình giặt khử hóa chất", def: "Giặt bằng hóa chất khử sau khi nhuộm poly để loại bỏ thuốc nhuộm dư thừa.", cat: "Nhuộm" },
  { term: "Resilience", trans: "Khả năng hồi phục chống nhăn", def: "Khả năng xơ vải bật trở lại hình dạng ban đầu sau khi bị nén ép.", cat: "Cơ Tính" },
  { term: "Retro-reflective", trans: "Phản quang ngược", def: "Công nghệ dệt phủ phản xạ ánh sáng thẳng về nguồn phát (>500 cd/lux·m²).", cat: "Hoàn Tất" },
  { term: "Rotary Screen", trans: "In lưới trục tròn", def: "Máy in lưới hình trụ quay tròn tốc độ cao 600 rpm cho đơn hàng lớn.", cat: "In Vải" },
  { term: "Seam Slippage", trans: "Trượt giãn đường may", def: "Hiện tượng các sợi dệt thoi bị tuột trượt khỏi mép may khi chịu lực kéo.", cat: "Lỗi Vải" },
  { term: "Skewing", trans: "Lỗi thiên canh / Vặn chéo sợi", def: "Lỗi sợi dọc và sợi ngang bị lệch góc sau giặt sấy (chuẩn cho phép ≤ 3%).", cat: "Lỗi Vải" },
  { term: "Spandex / Elastane", trans: "Sợi co giãn Polyurethane", def: "Sợi tổng hợp có độ giãn dài lên tới 580%, tạo phom dáng ôm sát cơ thể.", cat: "Xơ" },
  { term: "Strike Off (S/O)", trans: "Mẫu in thử duyệt đơn hàng", def: "Mẫu vải in thử thực tế để kiểm tra độ chuẩn của hoa văn và màu sắc.", cat: "In Vải" },
  { term: "T400 / PTT", trans: "Sợi co giãn cấu trúc Elasterell-P", def: "Sợi polyester lưỡng thành phần co giãn tự nhiên không cần Spandex.", cat: "Sợi" },
  { term: "Tencel (Lyocell)", trans: "Xơ tái sinh sinh thái Tencel", def: "Xơ cellulose thế hệ 3 sản xuất bằng dung môi hữu cơ NMMO tuần hoàn khép kín.", cat: "Xơ" },
  { term: "Tex", trans: "Chỉ số độ dày sợi hệ mét chuẩn", def: "Trọng lượng tính bằng gam của 1.000 mét sợi (1 Tex = 9 Denier).", cat: "Đo Lường" },
  { term: "UPF", trans: "Chỉ số bảo vệ tia tử ngoại", def: "Ultraviolet Protection Factor - mức độ vải cản tia UV (UPF 50+ cản 98% UV).", cat: "Kiểm Nghiệm" },
  { term: "Wicking", trans: "Cơ chế mao dẫn thoát ẩm nhanh", def: "Khả năng dẫn truyền mồ hôi từ da ra bề mặt ngoài của vải để bay hơi.", cat: "Hoàn Tất" },
  { term: "Wrinkle-Free", trans: "Hoàn tất chống nhăn", def: "Xử lý vải bằng nhựa resin hoặc amoniac lỏng giúp áo sơ mi giữ phẳng sau giặt.", cat: "Hoàn Tất" }
];

// ==================== APPLICATION STATE ====================
let appState = {
  lang: localStorage.getItem('prosports_lang') || 'vi',
  theme: localStorage.getItem('prosports_theme') || 'system',
  activeTab: 'dashboard',
  currentChapterId: 1,
  readChapters: JSON.parse(localStorage.getItem('prosports_read_chapters') || '[]'),
  chapterMiniQuizStatus: JSON.parse(localStorage.getItem('prosports_mq_status') || '{}'),
  userProfile: JSON.parse(localStorage.getItem('prosports_user_profile') || JSON.stringify({
    name: 'Cán Bộ Prosports',
    id: 'PS-2026-88',
    department: 'Merchandiser (MD)'
  })),
  quizState: {
    inProgress: false,
    currentIndex: 0,
    answers: {},
    bestScore: parseInt(localStorage.getItem('prosports_best_score') || '0'),
    certificateCode: localStorage.getItem('prosports_cert_code') || '',
    overrideUnlocked: localStorage.getItem('prosports_override_unlocked') === 'true'
  },
  activeToolSubtab: 'converter',
  selectedMatrixKey: 'polo',
  selectedFiberKey: 'cotton',
  chartInstance: null,
  activeGlossaryLetter: 'ALL'
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(appState.theme);
  applyLanguage(appState.lang);
  updateUserProfileDisplay();
  renderFiberExplorerButtons();
  loadFiberDetail('cotton');
  renderDashboardModules();
  renderChapterSelector();
  loadChapter(1);
  calculateYarnConversion();
  calculateFourPoint();
  renderLabTable();
  renderMatrixButtons();
  loadMatrixDetail('polo');
  renderGlossary();
  updateProgressUI();
  initDataChart('density');
  initIcons();

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (appState.theme === 'system') applyTheme('system');
  });

  if (!localStorage.getItem('prosports_user_profile')) {
    setTimeout(openEmployeeModal, 600);
  }
});

function initIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

// ==================== THEME CONTROLLER ====================
function applyTheme(mode) {
  appState.theme = mode;
  localStorage.setItem('prosports_theme', mode);

  const root = document.documentElement;
  const isDarkOS = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let effectiveDark = mode === 'system' ? isDarkOS : (mode === 'dark');

  if (effectiveDark) root.classList.add('dark');
  else root.classList.remove('dark');

  const iconEl = document.getElementById('themeIcon');
  if (iconEl) {
    if (mode === 'system') iconEl.setAttribute('data-lucide', 'monitor');
    else if (mode === 'dark') iconEl.setAttribute('data-lucide', 'moon');
    else iconEl.setAttribute('data-lucide', 'sun');
  }

  if (appState.chartInstance) initDataChart('density');
  initIcons();
}

function cycleTheme() {
  if (appState.theme === 'system') applyTheme('dark');
  else if (appState.theme === 'dark') applyTheme('light');
  else applyTheme('system');
}

// ==================== LANGUAGE CONTROLLER ====================
function applyLanguage(lang) {
  appState.lang = lang;
  localStorage.setItem('prosports_lang', lang);

  const flag = document.getElementById('langFlagIcon');
  const label = document.getElementById('langLabel');
  if (flag) flag.textContent = lang === 'vi' ? '🇻🇳' : '🇬🇧';
  if (label) label.textContent = lang === 'vi' ? 'VIE' : 'ENG';

  const isVi = lang === 'vi';
  const dict = I18N_DICT[lang] || I18N_DICT.vi;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  // Dynamic select dropdown options
  const unitSelect = document.getElementById('converterUnitSelect');
  if (unitSelect) {
    const curVal = unitSelect.value || 'D';
    unitSelect.innerHTML = isVi ? `
      <option value="D">Denier (d / D) - Sợi Filament (Poly, Nylon, Silk)</option>
      <option value="Ne">Ne (English Cotton Count) - Sợi Bông, T/C</option>
      <option value="Nm">Nm (Metric Count) - Sợi Len, Sợi Spun</option>
      <option value="Tex">Tex (g / 1.000m) - Chuẩn ISO</option>
      <option value="Dtex">Decitex (dtex = 0.1 Tex)</option>
    ` : `
      <option value="D">Denier (d / D) - Synthetic Filaments (Poly, Nylon, Silk)</option>
      <option value="Ne">Ne (English Cotton Count) - Spun Cotton, T/C</option>
      <option value="Nm">Nm (Metric Count) - Wool & Spun Yarns</option>
      <option value="Tex">Tex (g / 1,000m) - ISO Standard</option>
      <option value="Dtex">Decitex (dtex = 0.1 Tex)</option>
    `;
    unitSelect.value = curVal;
  }

  const fiberSelect = document.getElementById('converterFiberSelect');
  if (fiberSelect) {
    const curVal = fiberSelect.value || '1.38';
    fiberSelect.innerHTML = isVi ? `
      <option value="1.38">Polyester (PET - 1.38 g/cm³)</option>
      <option value="1.14">Polyamide (Nylon - 1.14 g/cm³)</option>
      <option value="1.54">Cotton / Bông (1.54 g/cm³)</option>
      <option value="1.32">Wool / Len (1.32 g/cm³)</option>
      <option value="1.37">Silk / Lụa (1.37 g/cm³)</option>
      <option value="1.51">Viscose Rayon (1.51 g/cm³)</option>
      <option value="0.90">Polypropylene (PP - 0.90 g/cm³ siêu nhẹ)</option>
    ` : `
      <option value="1.38">Polyester (PET - 1.38 g/cm³)</option>
      <option value="1.14">Polyamide (Nylon - 1.14 g/cm³)</option>
      <option value="1.54">Cotton (1.54 g/cm³)</option>
      <option value="1.32">Wool (1.32 g/cm³)</option>
      <option value="1.37">Silk (1.37 g/cm³)</option>
      <option value="1.51">Viscose Rayon (1.51 g/cm³)</option>
      <option value="0.90">Polypropylene (PP - 0.90 g/cm³ Ultra-light)</option>
    `;
    fiberSelect.value = curVal;
  }

  const deptSelect = document.getElementById('empModalDept');
  if (deptSelect) {
    const curVal = deptSelect.value || 'Merchandiser (MD)';
    deptSelect.innerHTML = isVi ? `
      <option value="Merchandiser (MD)">Quản lý đơn hàng (Merchandiser - MD)</option>
      <option value="Fashion & Technical Designer">Thiết kế Thời trang & Kỹ thuật (Designer)</option>
      <option value="Quality Assurance / QC (QA/QC)">Quản lý Chất lượng (QA/QC)</option>
      <option value="R&D / Material Sourcing">Nghiên cứu & Khai thác Nguyên liệu (R&D)</option>
      <option value="Production & Factory Ops">Kỹ thuật & Quản lý Sản xuất (Production)</option>
    ` : `
      <option value="Merchandiser (MD)">Merchandiser (MD)</option>
      <option value="Fashion & Technical Designer">Fashion & Technical Designer</option>
      <option value="Quality Assurance / QC (QA/QC)">Quality Assurance / QC (QA/QC)</option>
      <option value="R&D / Material Sourcing">R&D / Material Sourcing</option>
      <option value="Production & Factory Ops">Production & Factory Operations</option>
    `;
    deptSelect.value = curVal;
  }

  // Dynamic input placeholders
  const globalSearch = document.getElementById('globalSearchInput');
  if (globalSearch) globalSearch.placeholder = isVi ? 'Tìm nhanh kiến thức...' : 'Quick search textile knowledge...';

  const mobileSearch = document.getElementById('mobileSearchInput');
  if (mobileSearch) mobileSearch.placeholder = isVi ? 'Tìm kiếm tài liệu...' : 'Search textile curriculum...';

  const labSearch = document.getElementById('labSearchInput');
  if (labSearch) labSearch.placeholder = isVi ? 'Tìm bài test...' : 'Search lab tests...';

  const glossSearch = document.getElementById('glossarySearchInput');
  if (glossSearch) glossSearch.placeholder = isVi ? 'Lọc từ khóa (DWR, DTY, Loom, Crimp...)' : 'Filter terms (DWR, DTY, Loom, Crimp...)';

  const empName = document.getElementById('empModalName');
  if (empName) empName.placeholder = isVi ? 'Ví dụ: Nguyễn Văn A' : 'e.g. John Doe';

  const empId = document.getElementById('empModalId');
  if (empId) empId.placeholder = isVi ? 'Ví dụ: PS-2026-88' : 'e.g. PS-2026-88';

  renderFiberExplorerButtons();
  loadFiberDetail(appState.selectedFiberKey);
  renderDashboardModules();
  renderChapterSelector();
  loadChapter(appState.currentChapterId);
  renderMatrixButtons();
  loadMatrixDetail(appState.selectedMatrixKey);
  calculateFourPoint();
  renderLabTable();
  renderGlossary();
  calculateYarnConversion();
  initDataChart();
  initIcons();
}

function toggleLanguage() {
  applyLanguage(appState.lang === 'vi' ? 'en' : 'vi');
}

// ==================== TAB NAVIGATION ====================
function switchTab(tabId) {
  appState.activeTab = tabId;

  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.add('hidden');
    tab.classList.remove('block');
  });

  const activeContent = document.getElementById(`tab-${tabId}`);
  if (activeContent) {
    activeContent.classList.remove('hidden');
    activeContent.classList.add('block');
  }

  if (tabId === 'quiz') checkQuizLockStatus();
  if (tabId === 'glossary') renderGlossary();

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('text-cyan-600', 'dark:text-cyan-400', 'bg-cyan-50', 'dark:bg-cyan-950/60', 'border', 'border-cyan-200', 'dark:border-cyan-800/50');
    btn.classList.add('text-slate-600', 'dark:text-slate-300');
  });

  const activeBtn = document.getElementById(`nav-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-600', 'dark:text-slate-300');
    activeBtn.classList.add('text-cyan-600', 'dark:text-cyan-400', 'bg-cyan-50', 'dark:bg-cyan-950/60', 'border', 'border-cyan-200', 'dark:border-cyan-800/50');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  initIcons();
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('hidden');
  initIcons();
}

// ==================== FIBER EXPLORER COMPONENT ====================
function renderFiberExplorerButtons() {
  const container = document.getElementById('fiberExplorerButtons');
  if (!container) return;
  const isVi = appState.lang === 'vi';

  container.innerHTML = Object.keys(FIBER_EXPLORER_DATA).map(k => {
    const f = FIBER_EXPLORER_DATA[k];
    const isActive = k === appState.selectedFiberKey;
    const btnText = isVi ? f.btn_vi : f.btn_en;
    return `
      <button onclick="loadFiberDetail('${k}')" class="py-2 px-1.5 rounded-xl text-xs font-bold transition-all text-center ${isActive ? 'bg-cyan-600 text-white shadow' : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'}">
        ${btnText}
      </button>
    `;
  }).join('');
}

function loadFiberDetail(key) {
  appState.selectedFiberKey = key;
  renderFiberExplorerButtons();

  const f = FIBER_EXPLORER_DATA[key];
  const display = document.getElementById('fiberExplorerDisplay');
  if (!display || !f) return;

  const isVi = appState.lang === 'vi';

  display.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      <div class="lg:col-span-7 space-y-1.5">
        <div class="flex items-center space-x-2">
          <h4 class="text-base font-bold text-slate-900 dark:text-white">${isVi ? f.name_vi : f.name_en}</h4>
          <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800">${isVi ? f.type_vi : f.type_en}</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${isVi ? f.desc_vi : f.desc_en}</p>
      </div>

      <div class="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
        <div class="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span class="text-[10px] text-slate-400 block font-medium">${isVi ? 'Tỷ Trọng' : 'Specific Gravity'}</span>
          <span class="font-bold text-cyan-600 dark:text-cyan-400 font-mono">${f.density}</span>
        </div>
        <div class="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span class="text-[10px] text-slate-400 block font-medium">${isVi ? 'Độ Hồi Ẩm' : 'Moisture Regain'}</span>
          <span class="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">${isVi ? f.moisture_vi : f.moisture_en}</span>
        </div>
        <div class="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span class="text-[10px] text-slate-400 block font-medium">${isVi ? 'Độ Bền Kéo' : 'Tensile Tenacity'}</span>
          <span class="font-bold text-slate-900 dark:text-white font-mono text-[11px]">${isVi ? f.strength_vi : f.strength_en}</span>
        </div>
        <div class="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span class="text-[10px] text-slate-400 block font-medium">${isVi ? 'Nhiệt Độ' : 'Thermal Limit'}</span>
          <span class="font-bold text-orange-500 font-mono text-[11px]">${isVi ? f.heat_vi : f.heat_en}</span>
        </div>
      </div>
    </div>
  `;
}

// ==================== USER PROFILE & PROGRESS ====================
function updateUserProfileDisplay() {
  const nameEl = document.getElementById('userDisplayName');
  const deptEl = document.getElementById('userDepartment');
  const headerName = document.getElementById('headerEmployeeName');
  const avatarEl = document.getElementById('userAvatarText');

  if (nameEl) nameEl.textContent = appState.userProfile.name;
  if (deptEl) deptEl.textContent = appState.userProfile.department;
  if (headerName) headerName.textContent = appState.userProfile.name.split(' ').pop();

  if (avatarEl && appState.userProfile.name) {
    const initials = appState.userProfile.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    avatarEl.textContent = initials || 'PS';
  }
}

function openEmployeeModal() {
  document.getElementById('empModalName').value = appState.userProfile.name;
  document.getElementById('empModalId').value = appState.userProfile.id;
  document.getElementById('empModalDept').value = appState.userProfile.department;
  
  const modal = document.getElementById('employeeModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeEmployeeModal() {
  const modal = document.getElementById('employeeModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function saveEmployeeProfile() {
  const name = document.getElementById('empModalName').value.trim() || 'Cán Bộ Prosports';
  const id = document.getElementById('empModalId').value.trim() || 'PS-2026-88';
  const dept = document.getElementById('empModalDept').value;

  appState.userProfile = { name, id, department: dept };
  localStorage.setItem('prosports_user_profile', JSON.stringify(appState.userProfile));
  
  updateUserProfileDisplay();
  closeEmployeeModal();
}

function updateProgressUI() {
  const readCount = appState.readChapters.length;
  const totalCount = CHAPTERS_DATA.length;
  const percent = Math.round((readCount / totalCount) * 100);

  const dashProgress = document.getElementById('dashProgressPercent');
  const dashBar = document.getElementById('dashProgressBar');
  const dashCount = document.getElementById('dashChaptersRead');
  const dashScore = document.getElementById('dashQuizScore');
  const certBadge = document.getElementById('dashCertificateBadge');

  if (dashProgress) dashProgress.textContent = `${percent}%`;
  if (dashBar) dashBar.style.width = `${percent}%`;
  if (dashCount) dashCount.textContent = `${readCount}/${totalCount}`;
  
  if (dashScore && appState.quizState.bestScore > 0) {
    dashScore.textContent = `${appState.quizState.bestScore}%`;
  }

  if (certBadge && appState.quizState.bestScore >= 80) {
    certBadge.classList.remove('hidden');
  }

  const lockedProgress = document.getElementById('lockedCurrentProgress');
  const lockedBar = document.getElementById('lockedProgressBar');
  if (lockedProgress) lockedProgress.textContent = `${readCount}/${totalCount} ${appState.lang === 'vi' ? 'chương' : 'modules'}`;
  if (lockedBar) lockedBar.style.width = `${percent}%`;
}

// ==================== DASHBOARD MODULES ====================
function renderDashboardModules() {
  const container = document.getElementById('dashboardModulesGrid');
  if (!container) return;

  const isVi = appState.lang === 'vi';

  container.innerHTML = CHAPTERS_DATA.map(ch => {
    const isRead = appState.readChapters.includes(ch.id);
    const title = isVi ? ch.title_vi : ch.title_en;
    const subtitle = isVi ? ch.subtitle_vi : ch.subtitle_en;

    return `
      <div onclick="openChapter(${ch.id})" class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 cursor-pointer hover:border-cyan-500/50 hover:shadow-md transition-all flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] font-black font-mono px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60">${isVi ? 'CHƯƠNG' : 'MODULE'} ${ch.number}</span>
            <div>
              ${isRead ? '<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 flex items-center"><i data-lucide="check" class="w-3 h-3 mr-0.5"></i>' + (isVi ? 'Đã học' : 'Done') + '</span>' : '<span class="text-[10px] text-slate-400 flex items-center"><i data-lucide="clock" class="w-3 h-3 mr-1"></i>' + ch.readTime + '</span>'}
            </div>
          </div>
          <h4 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug mb-1">${title}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">${subtitle}</p>
        </div>

        <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <span class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 group-hover:underline flex items-center">
            ${isVi ? 'Vào học bài' : 'Start'} <i data-lucide="arrow-right" class="w-3 h-3 ml-1"></i>
          </span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">${ch.badge}</span>
        </div>
      </div>
    `;
  }).join('');

  initIcons();
}

function openChapter(chapterId) {
  switchTab('curriculum');
  loadChapter(chapterId);
}

// ==================== CURRICULUM & STRICT GATED MINI-QUIZ ====================
function renderChapterSelector() {
  const isVi = appState.lang === 'vi';

  const select = document.getElementById('chapterSelectDropdown');
  if (select) {
    select.innerHTML = CHAPTERS_DATA.map(ch => `
      <option value="${ch.id}" ${ch.id === appState.currentChapterId ? 'selected' : ''}>
        ${isVi ? 'Chương' : 'Module'} ${ch.number}: ${(isVi ? ch.title_vi : ch.title_en).substring(0, 32)}...
      </option>
    `).join('');
  }

  const grid = document.getElementById('chapterButtonsGrid');
  if (grid) {
    grid.innerHTML = CHAPTERS_DATA.map(ch => {
      const isCurrent = ch.id === appState.currentChapterId;
      const isRead = appState.readChapters.includes(ch.id);
      return `
        <button onclick="loadChapter(${ch.id})" class="py-1.5 px-1 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center space-x-1 ${isCurrent ? 'bg-cyan-600 text-white shadow' : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'}">
          <span>C${ch.number}</span>
          ${isRead ? '<i data-lucide="check" class="w-3 h-3 text-emerald-500"></i>' : ''}
        </button>
      `;
    }).join('');
  }

  initIcons();
}

function loadChapter(chapterId) {
  appState.currentChapterId = chapterId;
  renderChapterSelector();

  const isVi = appState.lang === 'vi';
  const ch = CHAPTERS_DATA.find(c => c.id === chapterId);
  if (!ch) return;

  const titleEl = document.getElementById('currentChapterHeaderTitle');
  const badgeEl = document.getElementById('currentChapterHeaderBadge');
  const timeEl = document.getElementById('currentChapterHeaderTime');

  if (titleEl) titleEl.textContent = isVi ? ch.title_vi : ch.title_en;
  if (badgeEl) badgeEl.textContent = `${isVi ? 'CHƯƠNG' : 'MODULE'} ${ch.number}`;
  if (timeEl) timeEl.textContent = `${ch.readTime} ${isVi ? 'đọc' : 'read'}`;

  const sections = isVi ? ch.sections_vi : ch.sections_en;

  const tocList = document.getElementById('chapterTocList');
  if (tocList) {
    tocList.innerHTML = sections.map(sec => `
      <a href="#${sec.id}" class="block px-2.5 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors truncate">
        ${sec.title}
      </a>
    `).join('');
  }

  const viewer = document.getElementById('chapterArticleViewer');
  if (viewer) {
    const isRead = appState.readChapters.includes(ch.id);
    const mqState = appState.chapterMiniQuizStatus[ch.id] || {};
    const answeredCount = Object.keys(mqState).length;
    const canComplete = answeredCount === 3;

    viewer.innerHTML = `
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-7 space-y-6 shadow-sm">
        
        <!-- SECTIONS CONTENT -->
        ${sections.map(sec => `
          <div id="${sec.id}" class="space-y-2.5 pt-1">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-cyan-300 flex items-center">
              <i data-lucide="bookmark" class="w-4 h-4 mr-2 text-orange-500"></i> ${sec.title}
            </h3>
            <div class="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              ${sec.content}
            </div>
          </div>
        `).join('<hr class="border-slate-200 dark:border-slate-800 my-4">')}

        <!-- ==================== MINI QUIZ SECTION (3 QUESTIONS) ==================== -->
        <div id="miniQuizSection" class="mt-8 pt-6 border-t-2 border-orange-500/30 space-y-4 bg-orange-50/50 dark:bg-slate-950/70 p-5 rounded-2xl border border-orange-200 dark:border-slate-800">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <span class="w-6 h-6 rounded-lg bg-orange-500 text-white flex items-center justify-center text-xs font-bold">✍️</span>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white">${isVi ? 'Ôn Tập Nhanh: 3 Câu Hỏi Củng Cố Kiến Thức Chương ' + ch.number : 'Quick Review: 3 Key Questions for Module ' + ch.number}</h4>
            </div>
            <span class="text-[10px] text-orange-600 dark:text-orange-400 font-bold" id="mqStatusCount">${isVi ? `Đã làm: ${answeredCount}/3 câu` : `Completed: ${answeredCount}/3`}</span>
          </div>

          <div class="space-y-4" id="miniQuizContainer">
            ${ch.miniQuiz.map((mq, mqIdx) => {
              const qText = isVi ? mq.q_vi : mq.q_en;
              const opts = isVi ? mq.opts_vi : mq.opts_en;
              const savedAns = mqState[mqIdx];
              const isAnswered = savedAns !== undefined;

              return `
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs" id="mq_card_${ch.id}_${mqIdx}">
                  <p class="font-bold text-slate-900 dark:text-white">${isVi ? `Câu ${mqIdx + 1}` : `Question ${mqIdx + 1}`}: ${qText}</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    ${opts.map((opt, optIdx) => {
                      let btnCls = "w-full text-left p-2 rounded-lg border text-xs font-medium transition-all ";
                      if (isAnswered) {
                        if (optIdx === mq.correct) btnCls += "border-emerald-500 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold";
                        else if (optIdx === savedAns) btnCls += "border-red-500 bg-red-100 dark:bg-red-950/80 text-red-800 dark:text-red-300";
                        else btnCls += "border-slate-200 dark:border-slate-800 text-slate-400 opacity-50";
                      } else {
                        btnCls += "border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300";
                      }
                      return `
                        <button onclick="answerMiniQuiz(${ch.id}, ${mqIdx}, ${optIdx})" id="mq_btn_${ch.id}_${mqIdx}_${optIdx}" ${isAnswered ? 'disabled' : ''} class="${btnCls}">
                          ${opt}
                        </button>
                      `;
                    }).join('')}
                  </div>
                  <div id="mq_exp_${ch.id}_${mqIdx}" class="${isAnswered ? 'block' : 'hidden'} p-2 rounded-lg text-[11px] mt-1.5 leading-relaxed ${isAnswered ? (savedAns === mq.correct ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800' : 'bg-red-50 dark:bg-red-950/50 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-800') : ''}">
                    ${isAnswered ? `<strong>${savedAns === mq.correct ? (isVi ? '✓ Chính xác!' : '✓ Correct!') : (isVi ? '✗ Chưa đúng:' : '✗ Incorrect:')}</strong> ${isVi ? mq.exp_vi : mq.exp_en}` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- BOTTOM NAV & MARK AS DONE (GATED) -->
        <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button onclick="navigateChapter(-1)" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center ${ch.id === 1 ? 'opacity-40 cursor-not-allowed' : ''}" ${ch.id === 1 ? 'disabled' : ''}>
            <i data-lucide="arrow-left" class="w-3.5 h-3.5 mr-1"></i>${isVi ? 'Chương Trước' : 'Previous'}
          </button>

          <button onclick="handleCompleteChapterClick(${ch.id})" id="btnCompleteModuleBottom" class="w-full sm:w-auto px-5 py-2.5 rounded-xl ${isRead ? 'bg-emerald-600 text-white' : (canComplete ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-md' : 'bg-slate-300 dark:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-not-allowed')} text-xs font-bold transition-all flex items-center justify-center">
            <i data-lucide="check-circle" class="w-4 h-4 mr-1.5"></i>
            <span id="completeBtnText">${isRead ? (isVi ? 'Đã Hoàn Thành Chuyên Đề ✓' : 'Module Completed ✓') : (canComplete ? (isVi ? 'Xác Nhận Đã Học Xong' : 'Mark as Completed') : (isVi ? 'Làm 3 câu ôn tập để hoàn thành' : 'Answer 3 questions to complete'))}</span>
          </button>

          <button onclick="navigateChapter(1)" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center ${ch.id === CHAPTERS_DATA.length ? 'opacity-40 cursor-not-allowed' : ''}" ${ch.id === CHAPTERS_DATA.length ? 'disabled' : ''}>
            ${isVi ? 'Chương Tiếp' : 'Next'} <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1"></i>
          </button>
        </div>

      </div>
    `;
  }

  initIcons();
}

function answerMiniQuiz(chId, qIdx, selectedOptIdx) {
  const ch = CHAPTERS_DATA.find(c => c.id === chId);
  if (!ch) return;
  const q = ch.miniQuiz[qIdx];
  const isVi = appState.lang === 'vi';

  if (!appState.chapterMiniQuizStatus[chId]) {
    appState.chapterMiniQuizStatus[chId] = {};
  }
  appState.chapterMiniQuizStatus[chId][qIdx] = selectedOptIdx;
  localStorage.setItem('prosports_mq_status', JSON.stringify(appState.chapterMiniQuizStatus));

  // Disable buttons & show result
  q.opts_vi.forEach((_, optIdx) => {
    const btn = document.getElementById(`mq_btn_${chId}_${qIdx}_${optIdx}`);
    if (!btn) return;
    btn.disabled = true;
    if (optIdx === q.correct) {
      btn.className = "w-full text-left p-2 rounded-lg border border-emerald-500 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold";
    } else if (optIdx === selectedOptIdx) {
      btn.className = "w-full text-left p-2 rounded-lg border border-red-500 bg-red-100 dark:bg-red-950/80 text-red-800 dark:text-red-300";
    } else {
      btn.className = "w-full text-left p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 opacity-50";
    }
  });

  const expEl = document.getElementById(`mq_exp_${chId}_${qIdx}`);
  if (expEl) {
    const isCorrect = selectedOptIdx === q.correct;
    expEl.classList.remove('hidden');
    expEl.className = isCorrect 
      ? "p-2 rounded-lg text-[11px] mt-1.5 leading-relaxed bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 block"
      : "p-2 rounded-lg text-[11px] mt-1.5 leading-relaxed bg-red-50 dark:bg-red-950/50 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-800 block";
    expEl.innerHTML = `<strong>${isCorrect ? (isVi ? '✓ Chính xác!' : '✓ Correct!') : (isVi ? '✗ Chưa đúng:' : '✗ Incorrect:')}</strong> ${isVi ? q.exp_vi : q.exp_en}`;
  }

  // Update status count & check if unlock complete button
  const answeredCount = Object.keys(appState.chapterMiniQuizStatus[chId]).length;
  const statusCountEl = document.getElementById('mqStatusCount');
  if (statusCountEl) {
    statusCountEl.textContent = isVi ? `Đã làm: ${answeredCount}/3 câu` : `Completed: ${answeredCount}/3`;
  }

  if (answeredCount === 3) {
    const completeBtn = document.getElementById('btnCompleteModuleBottom');
    const completeText = document.getElementById('completeBtnText');
    if (completeBtn && completeText) {
      if (!appState.readChapters.includes(chId)) {
        completeBtn.className = "w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white shadow-md text-xs font-bold transition-all flex items-center justify-center";
        completeText.textContent = isVi ? 'Xác Nhận Đã Học Xong' : 'Mark as Completed';
      }
    }
  }

  if (selectedOptIdx === q.correct && window.confetti) {
    confetti({ particleCount: 20, spread: 50, origin: { y: 0.85 } });
  }
}

function handleCompleteChapterClick(chId) {
  const isVi = appState.lang === 'vi';
  const mqState = appState.chapterMiniQuizStatus[chId] || {};
  const answeredCount = Object.keys(mqState).length;

  if (answeredCount < 3 && !appState.readChapters.includes(chId)) {
    alert(isVi ? "Vui lòng trả lời đủ 3 câu hỏi ôn tập bên dưới trước khi xác nhận hoàn thành bài học!" : "Please complete all 3 review questions below before marking this module as done!");
    document.getElementById('miniQuizSection').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  toggleChapterReadStatus(chId);
}

function navigateChapter(direction) {
  const nextId = appState.currentChapterId + direction;
  if (nextId >= 1 && nextId <= CHAPTERS_DATA.length) {
    loadChapter(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function toggleChapterReadStatus(chId) {
  const targetId = chId || appState.currentChapterId;
  const idx = appState.readChapters.indexOf(targetId);
  if (idx > -1) {
    appState.readChapters.splice(idx, 1);
  } else {
    appState.readChapters.push(targetId);
    if (window.confetti) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    }
  }
  localStorage.setItem('prosports_read_chapters', JSON.stringify(appState.readChapters));
  updateProgressUI();
  renderDashboardModules();
  renderChapterSelector();
  loadChapter(targetId);
}

// ==================== TECHNICAL TOOLS ====================
function activateToolTab(toolId) {
  appState.activeToolSubtab = toolId;

  document.querySelectorAll('.tool-panel').forEach(p => {
    p.classList.add('hidden');
    p.classList.remove('block');
  });

  const panel = document.getElementById(`tool-${toolId}-panel`);
  if (panel) {
    panel.classList.remove('hidden');
    panel.classList.add('block');
  }

  document.querySelectorAll('.tool-subtab-btn').forEach(btn => {
    btn.classList.remove('bg-cyan-50', 'dark:bg-cyan-950', 'text-cyan-700', 'dark:text-cyan-400', 'border-cyan-300', 'dark:border-cyan-700/50', 'font-bold');
    btn.classList.add('text-slate-600', 'dark:text-slate-400', 'font-medium');
  });

  const activeBtn = document.getElementById(`tooltab-${toolId}`);
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-600', 'dark:text-slate-400', 'font-medium');
    activeBtn.classList.add('bg-cyan-50', 'dark:bg-cyan-950', 'text-cyan-700', 'dark:text-cyan-400', 'border-cyan-300', 'dark:border-cyan-700/50', 'font-bold');
  }

  initIcons();
}

function calculateYarnConversion() {
  const val = parseFloat(document.getElementById('converterInputVal').value) || 0;
  const unit = document.getElementById('converterUnitSelect').value;
  const density = parseFloat(document.getElementById('converterFiberSelect').value) || 1.38;

  if (val <= 0) return;

  let denier = 0;
  if (unit === 'D') denier = val;
  else if (unit === 'Tex') denier = val * 9;
  else if (unit === 'Dtex') denier = val * 0.9;
  else if (unit === 'Ne') denier = 5314.9 / val;
  else if (unit === 'Nm') denier = 9000 / val;

  const tex = denier / 9;
  const dtex = denier / 0.9;
  const ne = 5314.9 / denier;
  const nm = 9000 / denier;

  const container = document.getElementById('conversionResultsGrid');
  if (container) {
    container.innerHTML = `
      <div class="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border ${unit === 'D' ? 'border-cyan-500 ring-1 ring-cyan-500' : 'border-slate-200 dark:border-slate-800'} text-center">
        <span class="text-[10px] text-slate-400 font-bold block">Denier (d / D)</span>
        <span class="text-base font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">${denier.toFixed(1)}</span>
        <span class="text-[9px] text-slate-400 block">g / 9000m</span>
      </div>
      <div class="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border ${unit === 'Tex' ? 'border-cyan-500 ring-1 ring-cyan-500' : 'border-slate-200 dark:border-slate-800'} text-center">
        <span class="text-[10px] text-slate-400 font-bold block">Tex</span>
        <span class="text-base font-extrabold text-slate-800 dark:text-white font-mono">${tex.toFixed(2)}</span>
        <span class="text-[9px] text-slate-400 block">g / 1000m</span>
      </div>
      <div class="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border ${unit === 'Dtex' ? 'border-cyan-500 ring-1 ring-cyan-500' : 'border-slate-200 dark:border-slate-800'} text-center">
        <span class="text-[10px] text-slate-400 font-bold block">Decitex (dtex)</span>
        <span class="text-base font-extrabold text-slate-800 dark:text-white font-mono">${dtex.toFixed(2)}</span>
        <span class="text-[9px] text-slate-400 block">0.1 Tex</span>
      </div>
      <div class="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border ${unit === 'Ne' ? 'border-cyan-500 ring-1 ring-cyan-500' : 'border-slate-200 dark:border-slate-800'} text-center">
        <span class="text-[10px] text-slate-400 font-bold block">Ne (Cotton)</span>
        <span class="text-base font-extrabold text-orange-600 dark:text-orange-400 font-mono">${ne.toFixed(2)}s</span>
        <span class="text-[9px] text-slate-400 block">840 yds/lb</span>
      </div>
      <div class="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border ${unit === 'Nm' ? 'border-cyan-500 ring-1 ring-cyan-500' : 'border-slate-200 dark:border-slate-800'} text-center">
        <span class="text-[10px] text-slate-400 font-bold block">Nm (Metric)</span>
        <span class="text-base font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">${nm.toFixed(2)}</span>
        <span class="text-[9px] text-slate-400 block">1000m/kg</span>
      </div>
    `;
  }

  const expEl = document.getElementById('densityComparisonText');
  if (expEl) {
    const polyDenierEq = (denier * (1.38 / density)).toFixed(1);
    expEl.innerHTML = appState.lang === 'vi'
      ? `Với tỷ trọng xơ đang chọn (<strong>${density} g/cm³</strong>), sợi <strong>${denier.toFixed(1)}D</strong> chiếm thể tích tương đương sợi Polyester <strong>${polyDenierEq}D</strong>. Sợi Polypropylene (0.90) dày hơn Polyester (1.38) đến 53% ở cùng chỉ số Denier!`
      : `With selected density (<strong>${density} g/cm³</strong>), a <strong>${denier.toFixed(1)}D</strong> yarn occupies the physical volume of a <strong>${polyDenierEq}D</strong> Polyester yarn. PP (0.90) is 53% thicker in volume than PET (1.38) at the exact same Denier!`;
  }
}

function calculateFourPoint() {
  const lengthYards = parseFloat(document.getElementById('fpLengthYards').value) || 100;
  const widthInches = parseFloat(document.getElementById('fpWidthInches').value) || 60;
  const maxThreshold = parseFloat(document.getElementById('fpMaxThreshold').value) || 20;

  const d1 = parseInt(document.getElementById('fpDefect1').value) || 0;
  const d2 = parseInt(document.getElementById('fpDefect2').value) || 0;
  const d3 = parseInt(document.getElementById('fpDefect3').value) || 0;
  const d4 = parseInt(document.getElementById('fpDefect4').value) || 0;

  const totalPoints = (d1 * 1) + (d2 * 2) + (d3 * 3) + (d4 * 4);
  const pointsPer100SqYards = (totalPoints * 3600) / (lengthYards * widthInches);
  const isPass = pointsPer100SqYards <= maxThreshold;
  const isVi = appState.lang === 'vi';

  const resultContainer = document.getElementById('fpResultContainer');
  if (resultContainer) {
    resultContainer.innerHTML = `
      <div class="space-y-2.5">
        <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
          <span class="text-xs font-bold text-slate-500 uppercase">${isVi ? '3. Đánh Giá ASTM D5430' : '3. ASTM D5430 Evaluation'}</span>
          <span class="text-xs px-2 py-0.5 rounded-full font-bold font-mono ${isPass ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800' : 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-800'}">
            ${isPass ? (isVi ? 'PASS (ĐẠT)' : 'PASS') : (isVi ? 'FAIL (HỎNG)' : 'FAIL')}
          </span>
        </div>

        <div class="flex justify-between items-baseline text-xs">
          <span class="text-slate-500">${isVi ? 'Tổng điểm lỗi:' : 'Total Defect Points:'}</span>
          <span class="font-bold text-slate-900 dark:text-white font-mono">${totalPoints} pts</span>
        </div>
        <div class="flex justify-between items-baseline text-xs">
          <span class="text-slate-500">${isVi ? 'Quy đổi / 100 sq.yd:' : 'Points / 100 sq.yd:'}</span>
          <span class="text-lg font-black font-mono ${isPass ? 'text-cyan-600 dark:text-cyan-400' : 'text-red-500'}">${pointsPer100SqYards.toFixed(2)} pts</span>
        </div>
      </div>

      <div class="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px]">
        ${isPass 
          ? `<p class="text-emerald-700 dark:text-emerald-300 font-medium">${isVi ? '✓ Đạt chuẩn xuất xưởng. Khuyến nghị cộng <strong>3% - 5% Buffer Allowance</strong> dự phòng khi cắt may.' : '✓ Factory inspection passed. Recommend adding <strong>3% - 5% Buffer Allowance</strong> for cutting room.'}</p>`
          : `<p class="text-red-700 dark:text-red-400 font-medium">${isVi ? '⚠️ Vượt ngưỡng lỗi! Cần lập biên bản khiếu nại (Claim) để đàm phán giảm giá (Discount) hoặc cấp bù vải.' : '⚠️ Defect threshold exceeded! Issue formal Claim notice for discount or replacement fabric.'}</p>`
        }
      </div>
    `;
  }
}

// LAB STANDARDS
const LAB_STANDARDS_DATA = [
  { testName_vi: "Độ bền xé rách (Tearing Strength)", testName_en: "Tearing Strength", standard: "ASTM D1424", method: "Con lắc Elmendorf Pendulum", threshold: "≥ 15 - 25 N", app: "Quần dã ngoại, Áo khoác ngoài" },
  { testName_vi: "Độ bền kéo đứt (Tensile Strength)", testName_en: "Tensile Strength", standard: "ASTM D5034", method: "Grab / Strip Test", threshold: "W/F ≥ 200 - 450 N", app: "Vải dệt thoi, Chino, Uniforms" },
  { testName_vi: "Độ bền bục nổ (Bursting Strength)", testName_en: "Bursting Strength", standard: "ASTM D3786", method: "Màng cao su thủy lực", threshold: "≥ 50 - 90 psi", app: "Vải dệt kim (Knit), Áo thun, Jogger" },
  { testName_vi: "Trượt đường may (Seam Slippage)", testName_en: "Seam Slippage", standard: "ASTM D434", method: "Kéo giãn mối may chịu tải 6mm", threshold: "Lực kháng ≥ 80 - 120 N", app: "Vải sơ mi mỏng, Vải satin, Lót vest" },
  { testName_vi: "Độ co rút sau giặt (Shrinkage)", testName_en: "Dimensional Stability", standard: "AATCC 135", method: "Giặt sấy máy 3 chu kỳ ở 40°C", threshold: "Woven ≤ 3% | Knit ≤ 8%", app: "Tất cả sản phẩm may mặc thành phẩm" },
  { testName_vi: "Độ vặn xoắn / Thiên canh (Torque / Skewing)", testName_en: "Torque / Skewing", standard: "AATCC 179", method: "Đo độ lệch đường may sườn", threshold: "Độ lệch ≤ 3.0%", app: "Áo thun T-shirt, Quần Twill" },
  { testName_vi: "Độ bền màu khi giặt (Washing Fastness)", testName_en: "Colorfastness to Washing", standard: "AATCC 61", method: "Thang Grey Scale (1-5)", threshold: "Self ≥ 4.0 | Stain ≥ 3.5-4.0", app: "Tất cả vải nhuộm và in" },
  { testName_vi: "Độ bền màu ma sát (Crocking Fastness)", testName_en: "Crocking Fastness", standard: "AATCC 8", method: "Thiết bị Crockmeter", threshold: "Khô: Cấp 4 | Ướt: Cấp 3-3.5", app: "Denim Jeans, Lớp lót túi" },
  { testName_vi: "Độ chống thấm nước (Water Repellency)", testName_en: "Water Repellency (WR)", standard: "AATCC 22", method: "Phun nước góc 45° Spray Test", threshold: "Ban đầu: 100 | Sau giặt: ≥ 80", app: "Áo gió, Áo phao ngoài, Tech Pants" },
  { testName_vi: "Chống áp lực nước (Waterproofness)", testName_en: "Waterproof Pressure", standard: "AATCC 127", method: "Cột áp lực thủy tĩnh mmH₂O", threshold: "Áo nhẹ ≥ 600mm | Outdoor ≥ 10.000mm", app: "Áo mưa, Đồ trượt tuyết, Áo phẫu thuật" },
  { testName_vi: "Chỉ số cản tia tử ngoại (UPF Rating)", testName_en: "UV Protection Factor", standard: "AATCC 183", method: "Quang phổ Spectrophotometer", threshold: "UPF 40 - 50+ (Cản ≥ 98% UV)", app: "Áo chống nắng, Đồ bơi, Đồ golf" },
  { testName_vi: "Độ pH chiết xuất (pH of Water Extract)", testName_en: "pH Indicator", standard: "AATCC 81", method: "Đo pH dung dịch chiết", threshold: "pH chuẩn: 5.5 - 7.0", app: "Đồ lót, Đồ trẻ em, Sơ mi trắng" }
];

function renderLabTable(filter = '') {
  const tbody = document.getElementById('labStandardsTableBody');
  if (!tbody) return;

  const isVi = appState.lang === 'vi';
  const filtered = LAB_STANDARDS_DATA.filter(item => {
    const name = isVi ? item.testName_vi : item.testName_en;
    return name.toLowerCase().includes(filter.toLowerCase()) ||
           item.standard.toLowerCase().includes(filter.toLowerCase()) ||
           item.app.toLowerCase().includes(filter.toLowerCase());
  });

  tbody.innerHTML = filtered.map(item => `
    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
      <td class="p-3 font-semibold text-slate-900 dark:text-white">${isVi ? item.testName_vi : item.testName_en}</td>
      <td class="p-3 font-mono text-cyan-600 dark:text-cyan-400 font-bold">${item.standard}</td>
      <td class="p-3 text-slate-600 dark:text-slate-300">${item.method}</td>
      <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">${item.threshold}</td>
      <td class="p-3 text-slate-500 dark:text-slate-400">${item.app}</td>
    </tr>
  `).join('');
}

function filterLabTable(val) {
  renderLabTable(val);
}

// ==================== 17 GARMENT CATEGORIES MATRIX ====================
function renderMatrixButtons() {
  const container = document.getElementById('matrixCategoryButtons');
  if (!container) return;

  const isVi = appState.lang === 'vi';

  container.innerHTML = Object.keys(COMPREHENSIVE_MATRIX).map(key => {
    const item = COMPREHENSIVE_MATRIX[key];
    const isActive = key === appState.selectedMatrixKey;
    const name = (isVi ? item.name_vi : item.name_en).split('(')[0].trim();
    return `
      <button onclick="loadMatrixDetail('${key}')" class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${isActive ? 'bg-cyan-600 text-white shadow' : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'}">
        ${name}
      </button>
    `;
  }).join('');
}

function loadMatrixDetail(key) {
  appState.selectedMatrixKey = key;
  renderMatrixButtons();

  const data = COMPREHENSIVE_MATRIX[key];
  const card = document.getElementById('matrixDetailCard');
  if (!card || !data) return;

  const isVi = appState.lang === 'vi';

  card.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <h3 class="text-base font-bold text-slate-900 dark:text-white">${isVi ? data.name_vi : data.name_en}</h3>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800">PRO-SPEC APPROVED</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span class="text-cyan-600 dark:text-cyan-400 font-bold block mb-0.5">${isVi ? '1. Thành Phần Xơ Sợi' : '1. Fiber Composition'}</span>
          <p class="font-semibold text-slate-800 dark:text-slate-200">${isVi ? data.fiber_vi : data.fiber_en}</p>
        </div>
        <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span class="text-cyan-600 dark:text-cyan-400 font-bold block mb-0.5">${isVi ? '2. Tiêu Chuẩn Sợi Dệt' : '2. Yarn Engineering Specs'}</span>
          <p class="font-semibold text-slate-800 dark:text-slate-200">${isVi ? data.yarn_vi : data.yarn_en}</p>
        </div>
        <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span class="text-orange-600 dark:text-orange-400 font-bold block mb-0.5">${isVi ? '3. Cấu Trúc Vải & Kiểu Dệt' : '3. Fabric & Weave Construction'}</span>
          <p class="font-semibold text-slate-800 dark:text-slate-200">${isVi ? data.struct_vi : data.struct_en}</p>
        </div>
        <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span class="text-emerald-600 dark:text-emerald-400 font-bold block mb-0.5">${isVi ? '4. Hoàn Tất Bề Mặt' : '4. Surface Finishing'}</span>
          <p class="font-semibold text-slate-800 dark:text-slate-200">${isVi ? data.finish_vi : data.finish_en}</p>
        </div>
      </div>

      <div class="p-3 rounded-xl bg-cyan-50 dark:bg-blue-950/40 border border-cyan-200 dark:border-blue-900/60 text-xs">
        <span class="text-cyan-800 dark:text-cyan-300 font-bold block mb-0.5">${isVi ? '5. Kỹ Thuật Nhuộm' : '5. Dyeing Technology'}</span>
        <p class="text-slate-700 dark:text-slate-300">${isVi ? data.dye_vi : data.dye_en}</p>
      </div>

      <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 text-xs text-amber-800 dark:text-amber-200">
        <span class="font-bold flex items-center mb-0.5"><i data-lucide="alert-circle" class="w-3.5 h-3.5 mr-1 text-amber-500"></i> ${isVi ? 'Lưu Ý Kỹ Thuật & QA/QC:' : 'Technical & QA/QC Advice:'}</span>
        <p>${isVi ? data.qa_vi : data.qa_en}</p>
      </div>
    </div>
  `;

  initIcons();
}

// ==================== 15 COMPREHENSIVE CERTIFICATION EXAM QUESTIONS ====================
const FINAL_EXAM_QUESTIONS = [
  {
    chapter_vi: "Chương 1: Khoa Học Xơ Dệt",
    chapter_en: "Module 1: Fiber Science",
    question_vi: "1. Tiêu chuẩn ASTM quy định điều kiện kích thước hình học tiên quyết để một vật liệu được phân loại là 'Xơ dệt' (Textile Fiber) là gì?",
    question_en: "1. What is the fundamental geometric criterion defined by ASTM for a material to be classified as a 'Textile Fiber'?",
    options_vi: [
      "A. Tỷ lệ chiều dài trên đường kính tối thiểu phải đạt 100:1 (L/D ≥ 100)",
      "B. Phải có nguồn gốc 100% từ thực vật tự nhiên",
      "C. Phải có độ giãn đứt trên 500%",
      "D. Phải có khả năng tự phân hủy trong 30 ngày"
    ],
    options_en: [
      "A. Length-to-diameter ratio must be at least 100:1 (L/D ≥ 100)",
      "B. Must be 100% derived from natural plants",
      "C. Elongation at break must exceed 500%",
      "D. Must biodegrade within 30 days"
    ],
    correct: 0,
    explanation_vi: "Tiêu chuẩn ASTM quy định cấu trúc 1D của xơ dệt phải có chiều dài gấp tối thiểu 100 lần đường kính để có thể xe xoắn tạo thành sợi liên tục.",
    explanation_en: "ASTM defines a 1D textile fiber as having a length at least 100 times its diameter to enable spinning into continuous yarns."
  },
  {
    chapter_vi: "Chương 1: Khoa Học Xơ Dệt",
    chapter_en: "Module 1: Fiber Science",
    question_vi: "2. Loại xơ nào sau đây có tỷ trọng nhẹ nhất (0.90 g/cm³, nhẹ hơn nước) và độ hồi ẩm tự nhiên xấp xỉ 0%?",
    question_en: "2. Which fiber has the lowest specific gravity (0.90 g/cm³, floats on water) and near 0% moisture regain?",
    options_vi: [
      "A. Bông (Cotton - 1.54 g/cm³)",
      "B. Polypropylene (PP / Olefin - 0.90 g/cm³)",
      "C. Polyester (PET - 1.38 g/cm³)",
      "D. Nylon 66 (1.14 g/cm³)"
    ],
    options_en: [
      "A. Cotton (1.54 g/cm³)",
      "B. Polypropylene (PP / Olefin - 0.90 g/cm³)",
      "C. Polyester (PET - 1.38 g/cm³)",
      "D. Nylon 66 (1.14 g/cm³)"
    ],
    correct: 1,
    explanation_vi: "Polypropylene (PP/Olefin) là xơ dệt nhẹ nhất (0.90 g/cm³) và hoàn toàn kỵ nước, dùng làm đồ bơi nổi hoặc lớp sát da thoát ẩm.",
    explanation_en: "PP is the lightest commercial fiber (0.90 g/cm³) and is completely hydrophobic."
  },
  {
    chapter_vi: "Chương 1: Khoa Học Xơ Dệt",
    chapter_en: "Module 1: Fiber Science",
    question_vi: "3. Tại sao trang phục thể thao mùa đông leo núi chuyên nghiệp tuyệt đối KHÔNG dùng 100% Cotton làm lớp lót sát da (Next-to-skin base layer)?",
    question_en: "3. Why do professional winter mountaineering garments strictly forbid 100% cotton as a next-to-skin base layer?",
    options_vi: [
      "A. Cotton hút ẩm nhanh nhưng bay hơi rất chậm; khi ướt sẽ rút trực tiếp nhiệt lượng cơ thể gây hạ thân nhiệt chết người (Hypothermia)",
      "B. Cotton làm biến màu áo khoác ngoài",
      "C. Cotton sinh ra tĩnh điện nguy hiểm",
      "D. Cotton có giá thành quá cao"
    ],
    options_en: [
      "A. Cotton absorbs sweat quickly but evaporates very slowly; wet cotton conducts heat away from the body causing lethal hypothermia",
      "B. Cotton discolors outerwear",
      "C. Cotton generates dangerous static electricity",
      "D. Cotton is too costly"
    ],
    correct: 0,
    explanation_vi: "Hiện tượng Cotton Hazard: Cotton ướt dẫn nhiệt nhanh gấp nhiều lần không khí, rút nhiệt khỏi cơ thể gây hạ thân nhiệt nhanh chóng trong môi trường lạnh.",
    explanation_en: "Wet cotton loses its thermal insulation and rapidly conducts core heat away, leading to hypothermia in cold conditions."
  },
  {
    chapter_vi: "Chương 2: Kỹ Thuật Sợi Dệt",
    chapter_en: "Module 2: Yarn Engineering",
    question_vi: "4. Theo nguyên lý hệ đếm chỉ số sợi gián tiếp (Indirect Count như Ne, Nm), phát biểu nào sau đây là CHÍNH XÁC?",
    question_en: "4. According to indirect yarn count systems (e.g. Ne, Nm), which statement is CORRECT?",
    options_vi: [
      "A. Số chỉ số càng LỚN thì sợi càng MẢNH và MỊN",
      "B. Số chỉ số càng LỚN thì sợi càng DÀY và NẶNG",
      "C. Chỉ số sợi không liên quan đến độ mảnh",
      "D. Sợi Ne 20s mảnh hơn sợi Ne 80s"
    ],
    options_en: [
      "A. A HIGHER count number indicates a FINER and lighter yarn",
      "B. A HIGHER count number indicates a THICKER and heavier yarn",
      "C. Yarn count does not correlate with yarn diameter",
      "D. 20s Ne yarn is finer than 80s Ne yarn"
    ],
    correct: 0,
    explanation_vi: "Hệ gián tiếp Ne đo chiều dài trên một đơn vị trọng lượng cố định (840 yards/lb), do đó số càng lớn thì sợi càng mảnh (80s mảnh hơn 20s rất nhiều).",
    explanation_en: "Indirect count measures length per fixed mass; thus a higher number represents a finer yarn."
  },
  {
    chapter_vi: "Chương 2: Kỹ Thuật Sợi Dệt",
    chapter_en: "Module 2: Yarn Engineering",
    question_vi: "5. Sợi ATY (Air Textured Yarn) tạo ra cảm giác tay xốp mềm như sợi tự nhiên nhờ vào cơ chế kỹ thuật nào?",
    question_en: "5. How does Air Textured Yarn (ATY) create its natural, cotton-like tactile feel?",
    options_vi: [
      "A. Sử dụng luồng khí nén siêu tốc tạo ra vô số vòng sợi vi mô (micro loops) mà không cần gia nhiệt",
      "B. Ngâm trong bể axit đậm đặc",
      "C. Kéo căng nhiệt độ 300°C",
      "D. Phủ một lớp sáp ong nhân tạo"
    ],
    options_en: [
      "A. Using high-velocity compressed air to generate micro-loops without heat degradation",
      "B. Acid bath immersion",
      "C. Stretching at 300°C",
      "D. Coating with synthetic beeswax"
    ],
    correct: 0,
    explanation_vi: "ATY sử dụng luồng khí áp lực cao làm rối cơ học các sợi filament tạo thành các vòng loop xốp nhẹ như sợi bông (Taslan 160d, Supplex).",
    explanation_en: "ATY uses pressurized air to entangle filament fibers into micro-loops, yielding a dry, natural hand feel."
  },
  {
    chapter_vi: "Chương 3: Quy Trình Kéo Sợi",
    chapter_en: "Module 3: Spinning Process",
    question_vi: "6. Điểm đột phá kỹ thuật nổi bật nhất của công nghệ kéo sợi khí xoáy Murata Vortex (MVS) Nhật Bản là gì?",
    question_en: "6. What is the greatest technical advantage of Japan's Murata Vortex Spinning (MVS)?",
    options_vi: [
      "A. Cấu trúc sợi được bọc xoắn chặt giúp bề mặt nhẵn bóng, triệt tiêu gần như hoàn toàn hiện tượng xù lông (Pilling-free)",
      "B. Chỉ kéo được sợi có màu xanh",
      "C. Không thể sử dụng cho sợi Rayon/Modal",
      "D. Làm tăng độ co rút sau giặt lên 50%"
    ],
    options_en: [
      "A. Tightly wrapped sheath structure provides an ultra-smooth surface virtually free of pilling",
      "B. Only spins green-colored yarn",
      "C. Cannot process Rayon/Modal",
      "D. Increases fabric shrinkage by 50%"
    ],
    correct: 0,
    explanation_vi: "Sợi MVS có lõi sợi thẳng được các xơ ngoài bọc kín bằng khí xoáy, tạo độ bền mài mòn cao và chống vón hạt pilling tuyệt vời.",
    explanation_en: "MVS uses vortex air currents to wrap outer fibers around a parallel core, delivering superior pilling resistance."
  },
  {
    chapter_vi: "Chương 4: Cấu Trúc Dệt",
    chapter_en: "Module 4: Fabric Construction",
    question_vi: "7. Kiểu dệt thoi Satin/Sateen (4/1) có ưu điểm và nhược điểm kỹ thuật chính là gì?",
    question_en: "7. What are the primary structural advantages and disadvantages of a Satin/Sateen (4/1) weave?",
    options_vi: [
      "A. Ưu điểm: Bề mặt láng bóng sang trọng, độ rủ cao; Nhược điểm: Sợi nổi dài dễ bị xước sợi (snagging) và kém bền mài mòn",
      "B. Ưu điểm: Siêu bền như vải bố; Nhược điểm: Bề mặt ráp",
      "C. Ưu điểm: Chống thấm nước tuyệt đối không cần hóa chất; Nhược điểm: Cứng đơ",
      "D. Ưu điểm: Co giãn 4 chiều tự nhiên; Nhược điểm: Không thể nhuộm"
    ],
    options_en: [
      "A. Advantage: Luxurious luster and smooth drape; Disadvantage: Long floats snag easily and have lower abrasion resistance",
      "B. Advantage: Canvas-like durability; Disadvantage: Rough texture",
      "C. Advantage: Completely waterproof naturally; Disadvantage: Stiff",
      "D. Advantage: 4-way natural stretch; Disadvantage: Cannot be dyed"
    ],
    correct: 0,
    explanation_vi: "Cấu trúc Satin có các điểm đan thưa với sợi nổi dài tạo độ bóng và rủ, nhưng các sợi nổi này rất dễ móc rách hoặc xước sợi khi va chạm.",
    explanation_en: "Satin's long yarn floats deliver high shine and drape but are prone to snagging and friction wear."
  },
  {
    chapter_vi: "Chương 4: Cấu Trúc Dệt",
    chapter_en: "Module 4: Fabric Construction",
    question_vi: "8. So với vải dệt thoi (Woven), thời gian phát triển mẫu thử (Sample Lead Time) của vải dệt kim (Knit) thường ngắn hơn là vì sao?",
    question_en: "8. Why is sampling lead time for knitted fabrics significantly faster than for woven fabrics?",
    options_vi: [
      "A. Dệt kim chỉ mất ~3 ngày vì sợi được cấp trực tiếp vào máy đan mà không cần công đoạn chuẩn bị sợi dọc (Warping/Sizing/Beaming) phức tạp mất nhiều tuần",
      "B. Vì dệt kim không dùng sợi",
      "C. Vì vải dệt kim không cần nhuộm",
      "D. Vì máy dệt kim chạy bằng pin"
    ],
    options_en: [
      "A. Knits take ~3 days because yarn feeds directly without tedious weeks of warp preparation (warping, sizing, beaming)",
      "B. Knits do not use yarns",
      "C. Knitted fabrics skip dyeing",
      "D. Knitting machines are battery powered"
    ],
    correct: 0,
    explanation_vi: "Dệt thoi đòi hỏi công đoạn mắc trục sợi dọc hàng nghìn sợi mất nhiều tuần, trong khi dệt kim chỉ cần cấp sợi trực tiếp vào dàn kim là đan mẫu được ngay.",
    explanation_en: "Knitting skips the lengthy warp beam preparation required by woven looms, enabling 3-day turnaround times."
  },
  {
    chapter_vi: "Chương 5: Quản Lý Nhuộm",
    chapter_en: "Module 5: Dyeing Management",
    question_vi: "9. Hiện tượng thăng hoa thuốc nhuộm (Sublimation) trên vải 100% Polyester thường xảy ra ở điều kiện nào và gây hậu quả gì?",
    question_en: "9. Under what conditions does Disperse Dye Sublimation occur on 100% Polyester, and what is its effect?",
    options_vi: [
      "A. Xảy ra khi nhiệt độ gia nhiệt hoặc bảo quản vượt quá 70°C, làm phân tử thuốc nhuộm bay hơi và lem sang phần vải màu sáng liền kề",
      "B. Xảy ra khi ngâm vải trong nước đá lạnh",
      "C. Làm vải biến thành màu trong suốt",
      "D. Làm tăng độ dày của vải lên gấp đôi"
    ],
    options_en: [
      "A. Occurs when heat or storage temperatures exceed 70°C, causing dye molecules to vaporize and stain adjacent light-colored panels",
      "B. Occurs in icy water",
      "C. Makes the fabric transparent",
      "D. Doubles the fabric thickness"
    ],
    correct: 0,
    explanation_vi: "Thuốc nhuộm phân tán trên Polyester có thể thăng hoa từ thể rắn sang thể khí khi nhiệt độ > 70°C trong kho nóng hoặc khi là ủi, gây loang màu nghiêm trọng.",
    explanation_en: "Disperse dyes vaporize at temperatures above 70°C during hot storage or ironing, staining adjacent contrast fabrics."
  },
  {
    chapter_vi: "Chương 5: Quản Lý Nhuộm",
    chapter_en: "Module 5: Dyeing Management",
    question_vi: "10. Trong sản xuất nhuộm hoàn tất, lỗi 'Listing' được định nghĩa chính xác là gì?",
    question_en: "10. In textile dyeing, how is the defect 'Listing' precisely defined?",
    options_vi: [
      "A. Sự chênh lệch tông màu (Shade) giữa mép biên trái, ở giữa và mép biên phải trên cùng một khổ vải",
      "B. Vải bị rách mép biên",
      "C. Sai lệch danh sách đóng gói (Packing List)",
      "D. Màu bị phai sau 10 lần giặt"
    ],
    options_en: [
      "A. Shade variation across the fabric width (left selvage, center, right selvage)",
      "B. Torn selvages",
      "C. Error on the packing list",
      "D. Color fading after 10 washes"
    ],
    correct: 0,
    explanation_vi: "Listing là lỗi lệch sắc độ màu theo chiều ngang từ biên trái qua giữa đến biên phải của khổ vải, thường do ép trục không đều hoặc nhiệt độ sấy không đồng đều.",
    explanation_en: "Listing refers to cross-sectional shade variations across the fabric width from selvage to selvage."
  },
  {
    chapter_vi: "Chương 6: Hoàn Tất Chức Năng",
    chapter_en: "Module 6: Functional Finishing",
    question_vi: "11. Sự khác biệt căn bản giữa tính năng Trượt Nước (Water Repellent - WR) và Chống Thấm Nước (Waterproof) là gì?",
    question_en: "11. What is the fundamental difference between Water Repellency (WR) and Waterproofing?",
    options_vi: [
      "A. WR làm nước đọng thành giọt trượt đi theo hiệu ứng lá sen (Spray Test); Waterproof là khả năng ngăn chặn hoàn toàn áp lực nước thủy tĩnh (mmH₂O) ngấm qua màng",
      "B. WR chỉ dùng cho mùa hè, Waterproof chỉ dùng cho mùa đông",
      "C. Hai khái niệm này hoàn toàn giống nhau 100%",
      "D. WR ngăn được axit, Waterproof chỉ ngăn được dầu"
    ],
    options_en: [
      "A. WR causes water droplets to bead and roll off via the Lotus effect (Spray Test); Waterproofing prevents hydrostatic water pressure (mmH₂O) from penetrating membrane barriers",
      "B. WR is summer-only, Waterproof is winter-only",
      "C. They are 100% identical",
      "D. WR resists acids, Waterproof resists oils"
    ],
    correct: 0,
    explanation_vi: "WR là hoàn tất bề mặt giúp giọt nước lăn tròn; Waterproof là kết cấu kín màng chống lại áp lực cột nước tính bằng mmH₂O.",
    explanation_en: "WR is a surface chemical beading effect, while Waterproofing uses impenetrable barriers to resist hydrostatic pressure."
  },
  {
    chapter_vi: "Chương 7: Công Nghệ In Vải",
    chapter_en: "Module 7: Textile Printing",
    question_vi: "12. Kỹ thuật in phá màu (Discharge Printing) mang lại ưu thế vượt trội nào khi in hoa văn lên nền vải màu tối?",
    question_en: "12. What primary advantage does Discharge Printing provide when printing patterns on dark fabrics?",
    options_vi: [
      "A. Hóa chất tẩy phá màu nền ở vùng in trước khi nhuộm màu mới, giúp hình in sáng rõ, mềm mại và không bị cộm dính bề mặt",
      "B. Tiết kiệm 100% tiền mực in",
      "C. Tự động phát sáng trong đêm",
      "D. Tăng độ co giãn của vải lên 200%"
    ],
    options_en: [
      "A. Chemicals discharge the dark background dye before laying new color, producing bright, soft-hand prints without heavy ink build-up",
      "B. Saves 100% of ink cost",
      "C. Automatically glows in the dark",
      "D. Increases fabric stretch by 200%"
    ],
    correct: 0,
    explanation_vi: "In phá màu tẩy trắng thuốc nhuộm nền tại vùng in, giúp màu in mới thẩm thấu vào xơ cho cảm giác tay sờ mềm tự nhiên, không bị dày cộm như in cao su thông thường.",
    explanation_en: "Discharge printing removes base dyes before depositing pigment, maintaining natural breathability and a soft hand feel."
  },
  {
    chapter_vi: "Chương 8: Kiểm Tra Lỗi & Lab",
    chapter_en: "Module 8: Inspection & Testing",
    question_vi: "13. Theo tiêu chuẩn 4-Point System (ASTM D5430), tại sao một cuộn vải đạt chứng nhận PASS (≤ 20 điểm/100yd) vẫn bắt buộc Merchandiser phải tính thêm Buffer Allowance?",
    question_en: "13. Under ASTM D5430 4-Point inspection, why must Merchandisers add a Buffer Allowance even if a roll PASSES (≤ 20 pts/100yd)?",
    options_vi: [
      "A. Vì đạt PASS chỉ có nghĩa là mật độ khuyết tật nằm trong giới hạn cho phép thương mại chứ không phải là vải hoàn hảo 100% không tì vết",
      "B. Vì các xưởng may luôn làm mất vải",
      "C. Vì vải tự động bốc hơi 10% trọng lượng",
      "D. Để trả tiền hoa hồng cho nhà máy dệt"
    ],
    options_en: [
      "A. Because PASS means defect levels are within commercially acceptable limits, not that the fabric is 100% flawless",
      "B. Because sewing factories always lose fabric",
      "C. Fabric automatically evaporates 10% weight",
      "D. To pay commissions to the mill"
    ],
    correct: 0,
    explanation_vi: "Pass nghĩa là lỗi phân bố rải rác dưới 20 điểm/100yd. Khi trải bàn cắt may, các vị trí lỗi này vẫn phải khoét bỏ gây hao hụt định mức nên cần tỷ lệ dự phòng Buffer.",
    explanation_en: "Pass allows minor defects up to 20 pts/100yd; buffer covers cutting waste and isolated defects."
  },
  {
    chapter_vi: "Chương 9: Hoạch Định Dòng Hàng",
    chapter_en: "Module 9: Garment Planning",
    question_vi: "14. Trong công nghệ sản xuất áo khoác phao giữ nhiệt cao cấp (Puffa Jacket), giải pháp nào giúp triệt tiêu hoàn toàn nguy cơ xì lông vũ (Down leakage) qua lỗ kim may?",
    question_en: "14. In premium down Puffa jackets, which technology completely eliminates down feather leakage through needle puncture holes?",
    options_vi: [
      "A. Ứng dụng công nghệ ép dán nhiệt không đường may (Seamless Bonding) kết hợp dán keo Seam Tape các đường ghép thân",
      "B. Sử dụng kim may kích thước thật to",
      "C. Đốt cháy toàn bộ lông vũ trước khi nhồi",
      "D. May 5 lớp vải bạt dày chồng lên nhau"
    ],
    options_en: [
      "A. Utilizing stitchless Seamless Bonding channels combined with heat-sealed Seam Tape",
      "B. Using extra-large sewing needles",
      "C. Burning the feathers before filling",
      "D. Stacking 5 layers of heavy canvas"
    ],
    correct: 0,
    explanation_vi: "Seamless Bonding tạo các khoang chứa lông bằng nhiệt và keo dán ép mà không có mũi kim đâm xuyên qua vải, ngăn chặn triệt để xì lông vũ.",
    explanation_en: "Seamless bonding heat-welds baffle chambers without needle perforations, locking down plumage inside."
  },
  {
    chapter_vi: "Chương 10: Sinh Lý Học Da",
    chapter_en: "Module 10: Skin Physiology",
    question_vi: "15. Độ pH sinh lý tự nhiên của lớp biểu bì da người là bao nhiêu và cơ chế tản nhiệt của cơ thể chiếm tới 86% thông qua con đường nào?",
    question_en: "15. What is the natural pH of human skin epidermis, and through which pathway does the body dissipate up to 86% of its heat?",
    options_vi: [
      "A. Độ pH 5.5 (màng axit kháng khuẩn) và 86% nhiệt lượng tản qua bức xạ nhiệt kết hợp bay hơi qua da (nhiệt ẩn)",
      "B. Độ pH 1.0 và tản nhiệt qua móng tay",
      "C. Độ pH 14.0 và tản nhiệt qua tóc",
      "D. Độ pH 7.0 và tản nhiệt qua thị giác"
    ],
    options_en: [
      "A. pH 5.5 (mildly acidic antibacterial barrier) and 86% heat is lost via radiation and skin evaporation (latent heat)",
      "B. pH 1.0 and heat loss through fingernails",
      "C. pH 14.0 and heat loss through hair",
      "D. pH 7.0 and heat loss through vision"
    ],
    correct: 0,
    explanation_vi: "Màng axit bảo vệ biểu bì da người có pH 5.5. Cơ thể tản nhiệt chủ yếu qua bức xạ hồng ngoại và bay hơi mồ hôi (86%), do đó vải thể thao cần tối ưu hóa độ thoáng khí và thoát ẩm.",
    explanation_en: "Skin acid mantle sits at pH 5.5. Radiation and evaporation govern 86% of thermoregulation, making breathable wicking fabrics essential."
  }
];

// ==================== CERTIFICATION EXAM & QUIZ ENGINE ====================
function checkQuizLockStatus() {
  const isUnlocked = appState.readChapters.length >= 5 || appState.quizState.overrideUnlocked;
  const lockedCard = document.getElementById('quizLockedCard');
  const introCard = document.getElementById('quizIntroCard');
  const activeCard = document.getElementById('quizActiveCard');
  const resultCard = document.getElementById('quizResultCard');

  if (!isUnlocked && !appState.quizState.completed) {
    if (lockedCard) lockedCard.classList.remove('hidden');
    if (introCard) introCard.classList.add('hidden');
    if (activeCard) activeCard.classList.add('hidden');
    if (resultCard) resultCard.classList.add('hidden');
  } else {
    if (lockedCard) lockedCard.classList.add('hidden');
    if (!appState.quizState.inProgress && !appState.quizState.completed) {
      if (introCard) introCard.classList.remove('hidden');
    }
  }
  updateProgressUI();
  initIcons();
}

function unlockExamOverride() {
  appState.quizState.overrideUnlocked = true;
  localStorage.setItem('prosports_override_unlocked', 'true');
  checkQuizLockStatus();
}

function startQuiz() {
  appState.quizState.inProgress = true;
  appState.quizState.currentIndex = 0;
  appState.quizState.answers = {};
  appState.quizState.completed = false;

  document.getElementById('quizLockedCard').classList.add('hidden');
  document.getElementById('quizIntroCard').classList.add('hidden');
  document.getElementById('quizResultCard').classList.add('hidden');
  document.getElementById('quizActiveCard').classList.remove('hidden');

  loadFinalExamQuestion(0);
}

function loadFinalExamQuestion(index) {
  const q = FINAL_EXAM_QUESTIONS[index];
  if (!q) return;

  appState.quizState.currentIndex = index;
  const isVi = appState.lang === 'vi';

  document.getElementById('quizCurrentQuestionTag').textContent = isVi ? `Câu ${index + 1} / ${FINAL_EXAM_QUESTIONS.length}` : `Question ${index + 1} / ${FINAL_EXAM_QUESTIONS.length}`;
  document.getElementById('quizChapterRef').textContent = isVi ? q.chapter_vi : q.chapter_en;
  document.getElementById('quizQuestionText').textContent = isVi ? q.question_vi : q.question_en;

  const currentScore = Object.keys(appState.quizState.answers).filter(k => appState.quizState.answers[k] === FINAL_EXAM_QUESTIONS[k].correct).length;
  document.getElementById('quizScoreTracker').textContent = `${isVi ? 'Đúng' : 'Score'}: ${currentScore} / ${Object.keys(appState.quizState.answers).length}`;

  const selectedAnswer = appState.quizState.answers[index];
  const isAnswered = selectedAnswer !== undefined;

  const options = isVi ? q.options_vi : q.options_en;
  const container = document.getElementById('quizOptionsContainer');

  container.innerHTML = options.map((opt, optIdx) => {
    let btnClass = "w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ";
    
    if (isAnswered) {
      if (optIdx === q.correct) {
        btnClass += "bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold ";
      } else if (optIdx === selectedAnswer) {
        btnClass += "bg-red-100 dark:bg-red-950/80 border-red-500 text-red-800 dark:text-red-300 ";
      } else {
        btnClass += "bg-white dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 text-slate-400 opacity-50 ";
      }
    } else {
      btnClass += "bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-cyan-500 ";
    }

    return `
      <button onclick="selectFinalExamAnswer(${index}, ${optIdx})" ${isAnswered ? 'disabled' : ''} class="${btnClass}">
        <span>${opt}</span>
        ${isAnswered && optIdx === q.correct ? '<i data-lucide="check" class="w-4 h-4 text-emerald-500"></i>' : ''}
        ${isAnswered && optIdx === selectedAnswer && optIdx !== q.correct ? '<i data-lucide="x" class="w-4 h-4 text-red-500"></i>' : ''}
      </button>
    `;
  }).join('');

  const expBox = document.getElementById('quizExplanationBox');
  if (isAnswered) {
    const isCorrect = selectedAnswer === q.correct;
    expBox.classList.remove('hidden');
    expBox.className = isCorrect 
      ? "bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700/50 rounded-xl p-3.5 text-xs text-emerald-800 dark:text-emerald-200 block" 
      : "bg-red-50 dark:bg-red-950/50 border border-red-300 dark:border-red-700/50 rounded-xl p-3.5 text-xs text-red-800 dark:text-red-200 block";
    expBox.innerHTML = `
      <div class="font-bold flex items-center ${isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}">
        <i data-lucide="${isCorrect ? 'check-circle' : 'alert-circle'}" class="w-3.5 h-3.5 mr-1"></i>
        ${isCorrect ? (isVi ? 'CHÍNH XÁC!' : 'CORRECT!') : (isVi ? 'CHƯA CHÍNH XÁC!' : 'INCORRECT!')}
      </div>
      <p class="mt-1 leading-relaxed">${isVi ? q.explanation_vi : q.explanation_en}</p>
    `;
  } else {
    expBox.classList.add('hidden');
  }

  const prevBtn = document.getElementById('quizPrevBtn');
  const nextBtn = document.getElementById('quizNextBtn');

  if (prevBtn) {
    prevBtn.disabled = index === 0;
    prevBtn.innerHTML = isVi ? `&larr; Câu trước` : `&larr; Previous`;
  }
  if (nextBtn) {
    if (index === FINAL_EXAM_QUESTIONS.length - 1) {
      nextBtn.innerHTML = isVi ? `Hoàn Thành Bài Thi 🏁` : `Finish Exam 🏁`;
      nextBtn.className = "px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow transition-all";
    } else {
      nextBtn.innerHTML = isVi ? `Câu tiếp theo &rarr;` : `Next &rarr;`;
      nextBtn.className = "px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all";
    }
  }

  initIcons();
}

function selectFinalExamAnswer(qIdx, optIdx) {
  if (appState.quizState.answers[qIdx] !== undefined) return;
  appState.quizState.answers[qIdx] = optIdx;
  loadFinalExamQuestion(qIdx);
}

function prevQuizQuestion() {
  if (appState.quizState.currentIndex > 0) {
    loadFinalExamQuestion(appState.quizState.currentIndex - 1);
  }
}

function nextQuizQuestion() {
  if (appState.quizState.currentIndex < FINAL_EXAM_QUESTIONS.length - 1) {
    loadFinalExamQuestion(appState.quizState.currentIndex + 1);
  } else {
    finishFinalExam();
  }
}

function finishFinalExam() {
  appState.quizState.inProgress = false;
  appState.quizState.completed = true;

  let correctCount = 0;
  FINAL_EXAM_QUESTIONS.forEach((q, idx) => {
    if (appState.quizState.answers[idx] === q.correct) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / FINAL_EXAM_QUESTIONS.length) * 100);
  const isPassed = percentage >= 80;

  if (percentage > appState.quizState.bestScore) {
    appState.quizState.bestScore = percentage;
    localStorage.setItem('prosports_best_score', percentage.toString());
  }

  if (isPassed && !appState.quizState.certificateCode) {
    const code = `PS-TEX-${Math.floor(1000 + Math.random() * 9000)}`;
    appState.quizState.certificateCode = code;
    localStorage.setItem('prosports_cert_code', code);
  }

  updateProgressUI();

  document.getElementById('quizActiveCard').classList.add('hidden');
  const resultCard = document.getElementById('quizResultCard');
  resultCard.classList.remove('hidden');

  if (isPassed && window.confetti) {
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
  }

  const isVi = appState.lang === 'vi';

  resultCard.innerHTML = `
    <div class="text-center max-w-xl mx-auto py-6 space-y-4">
      <div class="w-16 h-16 rounded-2xl ${isPassed ? 'bg-emerald-500' : 'bg-orange-500'} text-white flex items-center justify-center mx-auto shadow-lg">
        <i data-lucide="${isPassed ? 'award' : 'rotate-ccw'}" class="w-8 h-8"></i>
      </div>

      <div class="space-y-1">
        <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${isPassed ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300'}">
          ${isPassed ? (isVi ? 'ĐẠT CHỨNG CHỈ XUẤT SẮC' : 'PASSED WITH EXCELLENCE') : (isVi ? 'CHƯA ĐẠT (CẦN ≥ 80%)' : 'DID NOT PASS (REQUIRES ≥ 80%)')}
        </span>
        <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">${isVi ? 'Điểm số:' : 'Score:'} ${correctCount} / ${FINAL_EXAM_QUESTIONS.length} (${percentage}%)</h2>
        <p class="text-xs text-slate-600 dark:text-slate-300">
          ${isPassed 
            ? (isVi ? `Chúc mừng <strong>${appState.userProfile.name}</strong> đã hoàn thành xuất sắc kỳ thi đánh giá dệt may!` : `Congratulations <strong>${appState.userProfile.name}</strong> on passing the exam!`)
            : (isVi ? `Bạn cần đạt tối thiểu 12/15 câu đúng để nhận chứng chỉ. Hãy ôn tập lại các chương và thử lại!` : `You need 12/15 correct answers to earn the certificate. Please review and try again!`)
          }
        </p>
      </div>

      <div class="flex justify-center gap-2 pt-2">
        ${isPassed ? `
          <button onclick="viewCurrentCertificate()" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center shadow">
            <i data-lucide="award" class="w-4 h-4 mr-1.5"></i>${isVi ? 'Xem & In Chứng Chỉ 🎓' : 'View Certificate 🎓'}
          </button>
        ` : ''}
        <button onclick="startQuiz()" class="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center">
          <i data-lucide="rotate-ccw" class="w-4 h-4 mr-1.5"></i>${isVi ? 'Làm Lại Bài Thi' : 'Retake Exam'}
        </button>
      </div>
    </div>
  `;

  initIcons();
}

function viewCurrentCertificate() {
  const isVi = appState.lang === 'vi';
  document.getElementById('certCandidateName').textContent = appState.userProfile.name.toUpperCase();
  document.getElementById('certCandidateDept').textContent = isVi 
    ? `Bộ phận: ${appState.userProfile.department} • Mã NV: ${appState.userProfile.id}`
    : `Dept: ${appState.userProfile.department} • Staff ID: ${appState.userProfile.id}`;
  document.getElementById('certScoreText').textContent = `${appState.quizState.bestScore || 100}%`;
  document.getElementById('certGradeText').textContent = (appState.quizState.bestScore || 100) >= 90 
    ? (isVi ? "Xuất Sắc (Master)" : "Excellence (Master)") 
    : (isVi ? "Giỏi (Professional)" : "Proficient (Professional)");
  document.getElementById('certCodeText').textContent = appState.quizState.certificateCode || "PS-TEX-2026";

  const today = new Date();
  document.getElementById('certIssueDate').textContent = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;

  const modal = document.getElementById('certificateModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');

  if (window.confetti) {
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.5 } });
  }

  initIcons();
}

function closeCertificateModal() {
  const modal = document.getElementById('certificateModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ==================== GLOSSARY CONTROLLER ====================
function renderGlossary() {
  const letterContainer = document.getElementById('glossaryLetterFilters');
  if (!letterContainer) return;

  const letters = ['ALL', ...new Set(GLOSSARY_DATA.map(g => g.term[0].toUpperCase()))].sort();
  letterContainer.innerHTML = letters.map(l => `
    <button onclick="filterGlossaryByLetter('${l}')" class="px-2 py-0.5 rounded font-mono text-[10px] font-bold transition-all ${appState.activeGlossaryLetter === l ? 'bg-cyan-600 text-white' : 'bg-slate-100 dark:bg-slate-950 text-slate-500 hover:text-slate-900 dark:hover:text-white'}">
      ${l}
    </button>
  `).join('');

  renderGlossaryItems();
}

function renderGlossaryItems(searchFilter = '') {
  const container = document.getElementById('glossaryListContainer');
  if (!container) return;

  const isVi = appState.lang === 'vi';
  const items = GLOSSARY_DATA.filter(item => {
    const matchLetter = appState.activeGlossaryLetter === 'ALL' || item.term[0].toUpperCase() === appState.activeGlossaryLetter;
    const matchSearch = searchFilter === '' || 
      item.term.toLowerCase().includes(searchFilter.toLowerCase()) || 
      item.trans.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.def.toLowerCase().includes(searchFilter.toLowerCase());
    return matchLetter && matchSearch;
  });

  if (items.length === 0) {
    container.innerHTML = `<div class="col-span-full py-8 text-center text-xs text-slate-400">${isVi ? 'Không tìm thấy thuật ngữ phù hợp.' : 'No terms found.'}</div>`;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-1">
          <span class="font-extrabold text-slate-900 dark:text-white text-sm">${item.term}</span>
          <span class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-800">${item.cat}</span>
        </div>
        <h5 class="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mb-1">${item.trans}</h5>
        <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">${item.def}</p>
      </div>
    </div>
  `).join('');
}

function filterGlossaryByLetter(letter) {
  appState.activeGlossaryLetter = letter;
  renderGlossary();
}

function filterGlossary(val) {
  renderGlossaryItems(val);
}

// ==================== GLOBAL SEARCH CONTROLLER ====================
function handleGlobalSearch(query) {
  const desktopDropdown = document.getElementById('searchResultsDropdown');
  const mobileDropdown = document.getElementById('mobileSearchResultsDropdown');

  const q = query.trim().toLowerCase();
  if (q.length < 2) {
    if (desktopDropdown) desktopDropdown.classList.add('hidden');
    if (mobileDropdown) mobileDropdown.classList.add('hidden');
    return;
  }

  const results = [];
  const isVi = appState.lang === 'vi';

  // Search Chapters
  CHAPTERS_DATA.forEach(ch => {
    const sections = isVi ? ch.sections_vi : ch.sections_en;
    sections.forEach(sec => {
      if (sec.title.toLowerCase().includes(q) || sec.content.toLowerCase().includes(q)) {
        results.push({
          type: `${isVi ? 'Chương' : 'Module'} ${ch.number}`,
          title: sec.title,
          action: () => {
            switchTab('curriculum');
            loadChapter(ch.id);
            closeAllSearchDropdowns();
          }
        });
      }
    });
  });

  // Search Glossary
  GLOSSARY_DATA.forEach(g => {
    if (g.term.toLowerCase().includes(q) || g.trans.toLowerCase().includes(q) || g.def.toLowerCase().includes(q)) {
      results.push({
        type: isVi ? "Thuật ngữ" : "Glossary",
        title: `${g.term} - ${g.trans}`,
        action: () => {
          switchTab('glossary');
          const glossInput = document.getElementById('glossarySearchInput');
          if (glossInput) glossInput.value = g.term;
          filterGlossary(g.term);
          closeAllSearchDropdowns();
        }
      });
    }
  });

  // Search Lab
  LAB_STANDARDS_DATA.forEach(l => {
    const name = isVi ? l.testName_vi : l.testName_en;
    if (name.toLowerCase().includes(q) || l.standard.toLowerCase().includes(q)) {
      results.push({
        type: "Lab Test",
        title: `${name} (${l.standard})`,
        action: () => {
          switchTab('tools');
          activateToolTab('labstandards');
          closeAllSearchDropdowns();
        }
      });
    }
  });

  const htmlContent = results.length === 0
    ? `<div class="p-3 text-center text-xs text-slate-400">${isVi ? 'Không tìm thấy kết quả phù hợp' : 'No matching results found'}</div>`
    : results.slice(0, 7).map((res, i) => `
        <div onclick="executeSearchResult(${i})" class="p-2.5 rounded-lg hover:bg-cyan-50 dark:hover:bg-slate-800 cursor-pointer transition-colors border-b border-slate-100 dark:border-slate-800/80 last:border-0">
          <span class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 font-mono">${res.type}</span>
          <h5 class="text-xs font-bold text-slate-800 dark:text-white mt-1 truncate">${res.title}</h5>
        </div>
      `).join('');

  window._currentSearchResults = results;

  if (desktopDropdown) {
    desktopDropdown.innerHTML = htmlContent;
    desktopDropdown.classList.remove('hidden');
  }

  if (mobileDropdown) {
    mobileDropdown.innerHTML = htmlContent;
    mobileDropdown.classList.remove('hidden');
  }
}

function executeSearchResult(index) {
  if (window._currentSearchResults && window._currentSearchResults[index]) {
    window._currentSearchResults[index].action();
  }
}

function closeAllSearchDropdowns() {
  const desktopDropdown = document.getElementById('searchResultsDropdown');
  const mobileDropdown = document.getElementById('mobileSearchResultsDropdown');
  if (desktopDropdown) desktopDropdown.classList.add('hidden');
  if (mobileDropdown) mobileDropdown.classList.add('hidden');
  
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }
}

document.addEventListener('click', (e) => {
  const desktopSearchInput = document.getElementById('globalSearchInput');
  const desktopDropdown = document.getElementById('searchResultsDropdown');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  const mobileDropdown = document.getElementById('mobileSearchResultsDropdown');

  if (desktopDropdown && !desktopDropdown.contains(e.target) && e.target !== desktopSearchInput) {
    desktopDropdown.classList.add('hidden');
  }

  if (mobileDropdown && !mobileDropdown.contains(e.target) && e.target !== mobileSearchInput) {
    mobileDropdown.classList.add('hidden');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllSearchDropdowns();
  }
});

// ==================== DATA CHARTS (CHART.JS) ====================
function initDataChart(type = 'density') {
  const ctx = document.getElementById('textileDataChart');
  if (!ctx) return;

  const isDark = document.documentElement.classList.contains('dark');
  const textColor = isDark ? '#94a3b8' : '#475569';
  const gridColor = isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(226, 232, 240, 0.8)';
  const isVi = appState.lang === 'vi';

  const dataSets = {
    density: {
      label: isVi ? 'Tỷ Trọng Xơ (g/cm³)' : 'Fiber Specific Gravity (g/cm³)',
      labels: ['PP', 'Nylon', 'Acrylic', 'Spandex', 'Wool', 'Silk', 'Polyester', 'Linen', 'Rayon', 'Cotton'],
      data: [0.90, 1.14, 1.15, 1.21, 1.32, 1.37, 1.38, 1.50, 1.51, 1.54],
      bgColor: 'rgba(2, 132, 199, 0.75)',
      borderColor: '#0284c7'
    },
    moisture: {
      label: isVi ? 'Độ Hồi Ẩm Tự Nhiên (%)' : 'Moisture Regain (%)',
      labels: ['PP', 'Polyester', 'Acrylic', 'Spandex', 'Nylon', 'Cotton', 'Linen', 'Silk', 'Viscose', 'Wool'],
      data: [0.0, 0.4, 1.5, 1.5, 4.3, 8.5, 8.5, 11.0, 13.0, 15.0],
      bgColor: 'rgba(16, 185, 129, 0.75)',
      borderColor: '#10b981'
    },
    melting: {
      label: isVi ? 'Điểm Nóng Chảy / Giới Hạn Nhiệt (°C)' : 'Melting Point / Heat Limit (°C)',
      labels: ['PE', 'PP', 'Nylon 6', 'Cotton', 'Spandex', 'PET Poly', 'Nylon 66'],
      data: [125, 167, 220, 220, 230, 264, 264],
      bgColor: 'rgba(249, 115, 22, 0.75)',
      borderColor: '#f97316'
    }
  };

  const current = dataSets[type] || dataSets.density;

  if (appState.chartInstance) {
    appState.chartInstance.destroy();
  }

  appState.chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: current.labels,
      datasets: [{
        label: current.label,
        data: current.data,
        backgroundColor: current.bgColor,
        borderColor: current.borderColor,
        borderWidth: 1.5,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: textColor, font: { family: 'Inter', size: 11, weight: 'bold' } }
        }
      },
      scales: {
        x: {
          ticks: { color: textColor, font: { size: 10 } },
          grid: { color: gridColor }
        },
        y: {
          ticks: { color: textColor, font: { size: 10 } },
          grid: { color: gridColor }
        }
      }
    }
  });
}

function renderComparisonChart(type) {
  document.querySelectorAll('.chart-tab-btn').forEach(btn => {
    btn.classList.remove('bg-cyan-600', 'text-white', 'font-bold');
    btn.classList.add('text-slate-600', 'dark:text-slate-400', 'bg-slate-100', 'dark:bg-slate-800');
  });

  const activeBtn = document.getElementById(`btnChart${type.charAt(0).toUpperCase() + type.slice(1)}`);
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-600', 'dark:text-slate-400', 'bg-slate-100', 'dark:bg-slate-800');
    activeBtn.classList.add('bg-cyan-600', 'text-white', 'font-bold');
  }

  initDataChart(type);
}
