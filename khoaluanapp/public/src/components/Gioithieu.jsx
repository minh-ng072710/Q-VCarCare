import React from "react";
import Container from 'react-bootstrap/Container';
import Image from '../assets/line1.png';
import GTCL from '../assets/gia-tri-cot-loi.png';
import { Link } from "react-router-dom";
export default function Gioithieu2() {
    return (
        <>
            <Container>
                <p>Trong những năm gần đây, xã hội phát triển, nền kinh tế có những bước tăng trưởng đột phá, thị trường ô tô tại Việt Nam đang có xu hướng phát triển rất mạnh, vì thế các dịch vụ dành cho xe ô tô ngày càng phát triển.
                    Để đáp ứng nhu cầu ngày càng cao của thị trường, Q&V Car Care - Hệ thống trung tâm bảo dưỡng & chăm sóc ô tô chuyên nghiệp được ra đời.
                    Với những tâm huyết được đặt trong đứa con tinh thần của Ban lãnh đạo, với mong muốn đưa Q&V Car Care trở thành chuỗi trung tâm bảo dưỡng & chăm sóc ô tô chuyên nghiệp lớn nhất cả nước,
                    thúc đẩy sự phát triển của ngành chăm sóc xe ô tô tại Việt Nam theo hướng tích cực hơn.</p>
                <p>Ngay từ thời điểm mới bắt đầu cho đến thời điểm hiện tại và sau này A&K Car Care luôn cố gắng hoàn thiện cải tiến chất lượng công nghệ dịch vụ, quy trình cho đến yếu tố con người. Hướng đến chất lượng và trải nghiệm đối với mỗi dịch vụ, sản phẩm mà Khách hàng sử dụng.</p>
                <h2 style={{ textAlign: "center" }}>Q&V Car Care</h2>
                <h3 style={{ textAlign: "center" }}>Hệ thống trung tâm bảo dưỡng & chăm sóc ô tô chuyên nghiệp</h3>
                <img style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} src={Image} alt={Image} />
                <ul>
                    <li>Hệ thống cơ sở vật chất hiện đại luôn áp dụng và cập nhập công nghệ mới nhất theo chuẩn Detailing quốc tế.</li>
                    <li>Các hóa chất được sử dụng trong quá trình chăm sóc đều có được nhập khẩu thân thiện với môi trường, sức khỏe của người sử dụng đảm bảo độ bền cho xe.</li>
                    <li>Đội ngũ Kỹ thuật viên được đào tạo bài bản, chuyên nghiệp, thẩm mỹ cao và luôn có trách nhiệm với công việc có tâm với nghề.</li>
                    <li>Nhân viên tư vấn tận tình, hỗ trợ kịp thời 24/7.</li>
                </ul>
                <img src={GTCL} alt={GTCL} />
                <h3 style={{ textAlign: "center" }}>CÁC DỊCH VỤ TẠI Q&V CAR CARE</h3>
                <ul>
                    <li>Bảo dưỡng xe ô tô chuyên nghiệp</li>
                    <li>Dịch vụ Mâm - Vỏ</li>
                    <li>Phủ Ceramic</li>
                    <li>Vệ sinh nội thất tỉ mỉ từ A - Z</li>
                    <li>Vệ sinh Khoang máy</li>
                    <li>Rửa xe</li>
                    <li>...</li>
                    <li>Lắp đặt phụ kiện phụ tùng</li>

                </ul>
                <h3 style={{ textAlign: "center" }}>THÔNG TIN LIÊN HỆ</h3>
                <img style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} src={Image} alt={Image} />
                <p style={{ textAlign: "center" }}>Q&V CAR CARE - Trung tâm bảo dưỡng & chăm sóc xe ô tô chuyên nghiệp</p>
                <p style={{ textAlign: "center" }}>Địa chỉ: 12 Nguyễn Văn Bảo, Quận Gò Vấp,TP.HCM</p>
                <p style={{ textAlign: "center" }}>Hotline: 036.368.1128 - CSKH: 0xxx.xxx.xxx</p>
                <p style={{ textAlign: "center" }}>----------</p>
                <div style={{ textAlign: "center", display: "grid" }}>
                    <span >Website: <Link to="/">khoaluan-webapp</Link></span>

                    <span >Đặt lịch tại: <Link to="/datlich">khoaluan-webapp/dat-lich</Link></span>

                </div>
            </Container>
        </>
    )
}