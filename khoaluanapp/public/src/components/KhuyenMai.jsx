import React from "react";
import "../css/style.css";
import "../css/KhuyenMai.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BannerRuaXe from '../assets/banner-rua-xe.jpeg'
export default function KhuyenMai() {
    return (
        <>
            <body>
                <Row>
                    <Col>
                        <div className="div-list-items">
                            <img src={BannerRuaXe} alt={BannerRuaXe} />
                            <div className="div-inform">
                                <h5>29/2/2023</h5>
                                <h1>|</h1>
                                <h4>Chương trình khuyến mãi rửa xe miễn phí</h4>
                            </div>
                            <p>Chương trình khuyến mại RỬA XE MIỄN PHÍ - SẠCH, SANG HẾT Ý là chương trình mà A&K Car Care gửi đến Quý khách hàng dịch vụ Rửa xe - hút bụi, xịt gầm hoàn toàn miễn phí. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="div-list-items">
                            <img src={BannerRuaXe} alt={BannerRuaXe} />
                            <div className="div-inform">
                                <h5>29/2/2023</h5>
                                <h1>|</h1>
                                <h4>Chương trình khuyến mãi rửa xe miễn phí</h4>
                            </div>
                            <p>hương trình khuyến mại RỬA XE MIỄN PHÍ - SẠCH, SANG HẾT Ý là chương trình mà A&K Car Care gửi đến Quý khách hàng dịch vụ Rửa xe - hút bụi, xịt gầm hoàn toàn miễn phí. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="div-list-items">
                            <img src={BannerRuaXe} alt={BannerRuaXe} />
                            <div className="div-inform">
                                <h5>29/2/2023</h5>
                                <h1>|</h1>
                                <h4>Chương trình khuyến mãi rửa xe miễn phí</h4>
                            </div>
                            <p>hương trình khuyến mại RỬA XE MIỄN PHÍ - SẠCH, SANG HẾT Ý là chương trình mà A&K Car Care gửi đến Quý khách hàng dịch vụ Rửa xe - hút bụi, xịt gầm hoàn toàn miễn phí. </p>
                        </div>
                    </Col>

                </Row>
            </body>
        </>
    )
}