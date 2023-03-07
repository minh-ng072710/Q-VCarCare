import { Typography } from "antd";
import React from "react";
export default function AppFooter() {
    return (
        <div className="AppFooter">
            <Typography.Link href="tel:+84 363681128">+84363681128</Typography.Link>
            <Typography.Link href="https://www.google.com" target={"_blank"} >
                Privacy Policy
            </Typography.Link>
            <Typography.Link href="https://www.google.com" target={"_blank"}>
                Term of Use
            </Typography.Link>



        </div>
    )
}