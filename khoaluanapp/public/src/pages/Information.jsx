import React from "react";
import Footer from "../components/Footer";
import NavBarScroll from "../components/NavBarScroll";
import AutoLayoutExample from "../components/AutoLayoutExample";
import Gioithieu from "../components/Gioithieu";
import "../css/style.css";
import "../css/GioiThieu.css";
import Image from "../assets/san-pham.png"
export default function Information() {
    return (
        <>
            <body>
                <div className="navbar-top-space">
                    <NavBarScroll />
                </div>
                <div className="header-space" style={{ backgroundImage: `url(${Image})` }}>
                    <h2 style={{ color: "#fff", textAlign: "center" }}>GIỚI THIỆU</h2>
                </div>
                <div className="gioi-thieu-space">
                    <AutoLayoutExample />
                </div>
                <div className="gioi-thieu-space-2">
                    <Gioithieu />
                </div>
                <footer className="footer-space">
                    <Footer />
                </footer>
            </body>
        </>
    )
}

