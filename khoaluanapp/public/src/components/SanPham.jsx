import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/style.css";
import "../css/Product.css";
import BongDen250 from "../assets/bong-den-philips-hb4.jpeg";
import BongDen35 from "../assets/bong-den-philips-h4.jpeg";
import Camera1 from "../assets/cmr-1.jpeg";
export default function SanPham() {
    return (
        <>
            <body>
                <Row>
                    <Col>
                        <div className="div-list-items-sp">
                            <img src={BongDen250} alt={BongDen250} />
                            <h4>BÓNG ĐÈN PHILIPS HB4</h4>
                            <h5>250.000 đ</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="div-list-items-sp">
                            <img src={BongDen35} alt={BongDen35} />
                            <h4>BÓNG ĐÈN PHILIPS H4</h4>
                            <h5>35.000 đ</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="div-list-items-sp">
                            <img src={Camera1} alt={Camera1} />
                            <h4>BÓNG ĐÈN PHILIPS HB4</h4>
                            <h5>250.000 đ</h5>
                        </div>
                    </Col>

                </Row>

            </body>
        </>
    )
}


