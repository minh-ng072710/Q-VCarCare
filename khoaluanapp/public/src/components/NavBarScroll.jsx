import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Trung tâm chăm sóc xe QV</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/trang-chu">Trang chủ</Nav.Link>
            <Nav.Link href="/gioi-thieu">Giới thiệu</Nav.Link>
            <NavDropdown title="Cung cấp" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/san-pham">Sản phẩm</NavDropdown.Item>
              <NavDropdown.Item href="/dich-vu">
                Dịch vụ
              </NavDropdown.Item>
              <NavDropdown.Item href="/khuyen-mai">
                Khuyến mãi
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                ...
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Tài khoản</Nav.Link>
            <Nav.Link href="#" disabled>
              Tìm kiếm
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{ marginRight: "5px" }} variant="outline-success">Search</Button>
            <Button variant="outline-success" >Booking</Button>


          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;