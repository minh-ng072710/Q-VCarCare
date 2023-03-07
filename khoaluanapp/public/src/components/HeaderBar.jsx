import React from "react";
import { Navbar } from "react-bootstrap";
import "../css/myStyles.css";
export default function HeaderBar() {

  return (

    <div className="topnav">
      <Navbar
        fixed="top"
        expand="lg"
        variant="dark"
        bg="danger"
        className="topnav"
      >
        <Navbar.Brand style={{ marginLeft: "15rem" }} href="">Q&V Car Care</Navbar.Brand>
      </Navbar>
    </div>

  );
}

