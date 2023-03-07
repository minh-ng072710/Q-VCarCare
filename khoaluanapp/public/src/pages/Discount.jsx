import React from "react";
import "../css/style.css";
import "../css/KhuyenMai.css";
import NavBarScroll from "../components/NavBarScroll";
import SanPhamBackGround from '../assets/san-pham.png';
import Image from '../assets/line1t.png';
import KhuyenMai from "../components/KhuyenMai";
import Footer from "../components/Footer";
export default function Discount() {
    return (
        <>
            <body>
                <div className="navbar-top-space">
                    <NavBarScroll />
                </div>
                <div className="header-space" style={{ backgroundImage: `url(${SanPhamBackGround})` }}>
                    <h1 style={{ color: "#fff", textAlign: "center" }}>KHUYẾN MÃI</h1>
                    <img src={Image} alt={Image} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />

                </div>
                <div className="items-space-km">
                    <KhuyenMai />
                </div>
                <div className="footer-space">
                    <Footer />
                </div>
            </body>
        </>
    )
}