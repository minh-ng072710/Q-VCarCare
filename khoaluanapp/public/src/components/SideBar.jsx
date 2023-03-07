import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
    NavItem,
    NavIcon,
    NavText
} from "@trendmicro/react-sidenav";
import { useNavigate } from "react-router-dom";
export default function SidebarTest() {
    const navigate = useNavigate();
    return (
        <>
            <SideNav>
                <SideNav.Toggle
                />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                        </NavIcon>
                        <NavText>Home</NavText>
                    </NavItem>


                    <NavItem eventKey="booking">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                        </NavIcon>
                        <NavText>Lịch đặt</NavText>
                    </NavItem>

                    <NavItem eventKey="kho-hang">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                        </NavIcon>
                        <NavText>Kho hàng</NavText>
                    </NavItem>

                    <NavItem
                        onClick={handleClick => {
                            localStorage.clear();
                            alert("Đăng xuất khỏi tài khoản.");
                            navigate('/login');
                        }}
                        eventKey="placed orders">
                        <NavIcon>
                            <i
                                className="fa fa-fw fa-line-chart"
                                style={{ fontSize: "1.75em" }}
                            />
                        </NavIcon>
                        <NavText>Đăng xuất</NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </>
    )
}
