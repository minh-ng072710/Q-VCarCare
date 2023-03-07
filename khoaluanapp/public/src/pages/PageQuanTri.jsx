import React from "react";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import PageContent from "../components/PageContent";
import SideMenu from "../components/SideMenu";
import "../css/PageQuanTri.css"
import { Space } from "antd"
export default function PageQuanTri() {
    return (
        <div className="App">
            <AppHeader />
            <Space className="SideMenuAndPageContent">
                <SideMenu></SideMenu>
                <PageContent></PageContent>
            </Space>
            <AppFooter />
        </div>
    )
}