import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Dichvu1 from "../assets/dich-vu-1.jpeg";
import Dichvu2 from "../assets/dich-vu-2.jpeg";
import Dichvu3 from "../assets/dich-vu-3.jpeg";
import Dichvu4 from "../assets/dich-vu-4.jpeg";
import Dichvu5 from "../assets/dich-vu-5.jpeg";
import Dichvu6 from "../assets/dich-vu-6.jpeg";
import "../css/style.css";
import "../css/Service.css";
export default function Dichvu() {
    return (
        <>
            <body>
                <Row>
                    <Col>
                        <div className="div-list-items">
                            <img src={Dichvu1} alt={Dichvu1} />
                            <h4>DỊCH VỤ BẢO DƯỠNG XE Ô TÔ CHUYÊN NGHIỆP</h4>
                            <p>Các chi tiết máy, động cơ có thể bị hao mòn, yếu hay hư hỏng làm ảnh hưởng đến khả năng vận hành của xe, vì vậy các chủ xe cần bảo dưỡng định kỳ cho xế hộp.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="div-list-items">
                            <img src={Dichvu2} alt={Dichvu2} />
                            <h4>VỆ SINH KHOANG MÁY</h4>
                            <p>Vệ sinh khoang máy là quá trình đánh bay bụi bẩn, nơi ẩn nấp của côn trùng và phát hiện sớm các lỗi của phần khoang máy. Vệ sinh khoang máy nên được thực hiện 6 tháng một lần.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="div-list-items">
                            <img src={Dichvu3} alt={Dichvu3} />
                            <h4>DỊCH VỤ PHỦ CERAMIC</h4>
                            <p>Đánh bóng xe không chỉ giúp xe có được vẻ đẹp sang trọng, lớp sơn mới đẹp mà còn giúp loại bỏ các vết trầy xước nhẹ trên xe, giúp chủ xe tiết kiệm được chi phí.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="div-list-items">
                            <img src={Dichvu4} alt={Dichvu4} />
                            <h4>DỊCH VỤ DÁN PHIM CÁCH NHIỆT</h4>
                            <p>Dán phim cách nhiệt là giải pháp giúp không gian xe thoải mái, mát mẻ, kéo dài tuổi thọ cho nội thất trong xe. Ngoài ra nó còn giúp chủ xe tiết kiệm chi phí bảo dưỡng.

                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="div-list-items">
                            <img src={Dichvu5} alt={Dichvu5} />
                            <h4>DỊCH VỤ VỆ SINH NỘI THẤT TỪ BÊN TRONG</h4>
                            <p>Dịch vụ vệ sinh nội thất là một quá trình loại bỏ bụi bẩn, đánh bay các ổ bệnh bên trong xe, giúp tăng tuổi thọ cho nội thất và tiết kiệm chi phí cho chủ xe.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="div-list-items">
                            <img src={Dichvu6} alt={Dichvu6} />
                            <h4>DỊCH VỤ RỬA XE HÚT BỤI CHUYÊN NGHIỆP</h4>
                            <p>Rửa xe - hút bụi là một trong những bước chăm sóc xe cơ bản nhất. Quá trình này sẽ giúp xế yêu lấy lại vẻ đẹp bên ngoài tức thời, loại bỏ bụi bẩn bên trong nội thất nhanh chóng.
                            </p>
                        </div>
                    </Col>
                </Row>

            </body>
        </>
    )
}
