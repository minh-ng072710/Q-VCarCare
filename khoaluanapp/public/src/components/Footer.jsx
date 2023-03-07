import React from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgPhone from '../assets/phone.png';
import ImgLogo from '../assets/Logo.png';
import { Link } from "react-router-dom";
import Image from '../assets/line1t.png';

export default function Footer() {

    return (
        <>
            <Container>
                <img src={Image} alt={Image} style={{ display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "5px" }} />

                <Row>
                    <Col>
                        <h3 style={{ color: "#FF8C00" }}>Liên hệ</h3>
                        <h4>Q&V Car Care</h4>
                        <p>Trung tâm bảo dưỡng & chăm sóc ô tô chuyên nghiệp</p>
                        <p>Hotline:
                            <p style={{ color: "#FF8C00" }}>036.368.1128</p>
                        </p>
                        <p>Địa chỉ: 12 Nguyễn Văn Bảo, Gò Vấp, Tp Hồ Chí Minh</p>
                    </Col>
                    <Col>
                        <div style={{ display: "flex", padding: "5px" }}>
                            <img src={ImgPhone} alt={ImgPhone} />
                            <h3 style={{ marginLeft: "10px" }}>Hỗ trợ & tư vấn</h3>
                        </div>
                        <h3 style={{ color: "#FF8C00", marginLeft: "60px" }}>036.368.1128</h3>
                        <img style={{ marginLeft: "auto", marginRight: "auto", display: "block" }} src={ImgLogo} alt={ImgLogo} />
                        <h3 style={{ color: "#FF8C00", textAlign: "center" }}>Trung tâm bảo dưỡng và chăm sóc ô tô chuyên nghiệp</h3>
                    </Col>
                    <Col>
                        <h3 style={{ color: "#FF8C00", textAlign: "center" }}>LINK</h3>
                        <div style={{ display: "grid", padding: "5px", fontSize: "25px", textAlign: "center" }}>
                            <span><Link to="/gioithieu">Giới thiệu</Link></span>
                            <span><Link to="/sanpham">Sản phẩm</Link></span>
                            <span><Link to="/dichvu">Dịch vụ</Link></span>
                        </div>
                    </Col>
                </Row>
                <p style={{ textAlign: "center" }}>Copyrights 2023. All rights reserved. Design by Q&V Car Care</p>

            </Container>
        </>
    )
}