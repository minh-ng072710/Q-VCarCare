import React from "react";
import NavBarScroll from "../components/NavBarScroll";
import AutoLayoutExample from "../components/AutoLayoutExample";
import SimpleSlider from "../components/SimpleSlider";
import FormBooking from "../components/FormBooking";
import Footer from "../components/Footer";
import '../css/style.css';
import '../css/TrangChu.css';
export default function Home() {
    return (
        <>
            <body>
                <div className="navbar-top-space">
                    <NavBarScroll />
                </div>
                <div className="gioi-thieu-space">
                    <AutoLayoutExample />
                </div>
                <div className="quy-trinh-lam-viec-space">
                    <SimpleSlider />
                </div>
                <div className="form-booking-space">
                    <FormBooking />
                </div>
                <footer className="footer-space">
                    <Footer />
                </footer>
            </body>
        </>
    )
}
