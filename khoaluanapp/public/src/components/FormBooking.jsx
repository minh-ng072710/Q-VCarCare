import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from '../assets/line1.png'
export default function FormBooking() {
    return (
        <>
            <img src={Image} alt={Image} style={{ marginLeft: "auto", marginRight: "auto", display: "block", marginTop: "5px" }} />
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group as={Col} controlId="formName">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control type="text" placeholder="Họ và tên: " />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col} controlId="formPhone">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control type="tel" placeholder="Số điện thoại: " />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Col} controlId="formName">
                                <Form.Label>Ngày hẹn: </Form.Label>
                                <Form.Control type="date" placeholder="Ngày hẹn: " />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col} controlId="formName">
                                <Form.Label>Giờ hẹn: </Form.Label>
                                <Form.Control type="time" placeholder="Giờ hẹn: " />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col} controlId="formName">
                                <Form.Label>Thông tin xe: </Form.Label>
                                <Form.Control type="text" placeholder="Thông tin xe: " />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Select aria-label="Default select example" style={{ width: "500px", marginLeft: "auto", marginRight: "auto", display: "block", padding: "10px", marginTop: "15px" }}>
                                <option>Dịch vụ: </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col>

                            <Form.Select aria-label="Default select example" style={{ width: "500px", marginLeft: "auto", marginRight: "auto", display: "block", padding: "10px", marginTop: "15px" }}>
                                <option>Sản phẩm: </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Form.Control type="text" style={{ width: "1060px", height: "100px", marginLeft: "auto", marginRight: "auto", display: "block", marginTop: "15px" }} placeholder="Yêu cầu chi tiết (nếu có): " ></Form.Control>
                    <Button style={{ backgroundColor: "#FF8C00", marginTop: "10px", marginLeft: "50%", fontSize: "20px" }} variant="outline-dark" href="/GioiThieu">Đặt lịch</Button>
                </Form>
            </Container>
        </>
    )
}