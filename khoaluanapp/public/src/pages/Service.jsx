import React from "react";
import NavBarScroll from "../components/NavBarScroll";
import DichVuBackGround from "../assets/dich-vu-background.jpeg";
import Dichvu from "../components/DichVu";
import Footer from "../components/Footer";
import '../css/style.css';
import Image from '../assets/line1t.png';

export default function Service() {
    return (
        <>
            <body>
                <div className="navbar-top-space">
                    <NavBarScroll />
                </div>
                <div className="header-space" style={{ backgroundImage: `url(${DichVuBackGround})` }}>
                    <h1 style={{ color: "#fff", textAlign: "center" }}>DỊCH VỤ</h1>
                    <img src={Image} alt={Image} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />

                </div>
                <div className="items-space">
                    <Dichvu />
                </div>
                <div >

                </div>
                <footer className="footer-space">
                    <Footer />
                </footer>
            </body>
        </>
    )
}

