import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import ImgGioiThieu from '../assets/gioi-thieu.jpeg'
import ImgCar from '../assets/car.jpg'
import ImgService from '../assets/service.jpg'
import ImgCustomer from '../assets/customer.jpg'
import ImgProduct from '../assets/product.jpg'
import Button from 'react-bootstrap/Button';
import Image from "../assets/line1.png"

function AutoLayoutExample() {
  return (
    <Container>
      <img src={Image} alt={Image} style={{ display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "5px" }} />

      <Row>
        {/* Ảnh bên trái  */}
        <Col xs={5} style={{ margin: "auto" }}>
          <img src={ImgGioiThieu} alt={ImgGioiThieu} />
        </Col>
        {/* Text bên phải */}
        <Col xs={7}>
          <h4 style={{ color: "#FF8C00" }}>Q&V Car Care</h4>
          <h3>TRUNG TÂM BẢO DƯỠNG VÀ CHĂM SÓC XE</h3> <h3>CHUYÊN NGHIỆP</h3>
          <p>A&K Car Care là hệ thống trung tâm bảo dưỡng & chăm sóc xe ô tô được đầu tư với quy mô lớn, bài bản & chuyên nghiệp. Chuyên cung cấp các dịch vụ Bảo dưỡng & Chăm sóc ô tô chuyên sâu theo quy chuẩn quốc tế; Phụ tùng, Phụ kiện đồ chơi ô tô; Dịch vụ đồng sơn & bảo hiểm; Dịch vụ Mâm vỏ.
          </p>

          <Row>
            <Col>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                <img src={ImgCustomer} alt={ImgCustomer} />
                <p style={{ color: "#FF8C00" }}>
                  <span>5000</span> +
                </p>
                <p>KHÁCH HÀNG TIN TƯỞNG</p>
              </div>
            </Col>
            <Col>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                <img src={ImgProduct} alt={ImgProduct} />
                <p style={{ color: "#FF8C00" }}>
                  <span>100</span> +
                </p>
                <p>SẢN PHẨM CHÍNH HÃNG</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                <img src={ImgCar} alt={ImgCar} />
                <p style={{ color: "#FF8C00" }}>
                  <span>10</span> +
                </p>
                <p>NĂM KINH NGHIỆM</p>
              </div>
            </Col>
            <Col>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                <img src={ImgService} alt={ImgService} />
                <p style={{ color: "#FF8C00" }}>
                  <span>100</span> +
                </p>
                <p>DỊCH VỤ CHUYÊN NGHIỆP</p>
              </div>
            </Col>
          </Row>
          <Button style={{ backgroundColor: "#FF8C00" }} href="/GioiThieu">Tìm hiểu thêm</Button> <Button style={{ backgroundColor: "#FF8C00" }} href="/LienHe">Liên hệ</Button>{' '}


        </Col>

      </Row>
    </Container>
  );
}

export default AutoLayoutExample;