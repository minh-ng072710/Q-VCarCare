import React from "react";
import { Badge, Image, Space, Typography } from "antd";
import Logo from "../../assets/Logo.png"
import { BellFilled, MailOutlined } from "@ant-design/icons"
export default function AppHeader() {
    return (
        <div className="AppHeader">
            <Image
                width={40}
                src={Logo} alt={Logo}
            ></Image>
            <Typography.Title>Q&V Car Care</Typography.Title>
            <Space>
                <Badge count={10} dot>

                    <MailOutlined style={{ fontSize: 24 }} />
                </Badge>
                <Badge count={20}>

                    <BellFilled style={{ fontSize: 24 }} />
                </Badge>
            </Space>
        </div>
    )
}