import React from "react";
import NavBarScroll from "../components/NavBarScroll";
import SanPhamBackGround from '../assets/san-pham.png';
import '../css/style.css';
import SanPham from "../components/SanPham";
import Image from '../assets/line1t.png';
import Footer from "../components/Footer";

export default function Product() {
    return (
        <>
            <body>
                <div className="navbar-top-space">
                    <NavBarScroll />
                </div>
                <div className="header-space" style={{ backgroundImage: `url(${SanPhamBackGround})` }}>
                    <h1 style={{ color: "#fff", textAlign: "center" }}>SẢN PHẨM</h1>
                    <img src={Image} alt={Image} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />

                </div>
                <div className="items-space">
                    <SanPham />
                </div>
                <div className="footer-space">
                    <Footer />
                </div>
            </body>
        </>
    )
}

