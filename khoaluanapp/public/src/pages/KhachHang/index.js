import { Avatar, Space, Table, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { getAllCustomer } from "../../utils/APIRoutes";
export default function KhachHang() {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true);
        getAllCustomer().then((res) => {
            setDataSource(res.users);
            
        });
    }, []);
    return (
        <div>
            <Space size={20} direction={"vertical"}>

                <Typography.Title level={4}>Sản phẩm</Typography.Title>
                <Table columns={[
                    {
                        title: "Id",
                        dataIndex: "id",
                    },
                    {
                        title: "firstName",
                        dataIndex: "firstName",

                    },
                    {
                        title: "LastName",
                        dataIndex: "lastName",
                    },
                    {
                        title: "Email",
                        dataIndex: "email",
                    },
                    {
                        title: "Phone",
                        dataIndex: "phone",
                    },
                    
                    {
                        title: "Address",
                        dataIndex: "address",
                        render: (address) => {
                            return <span>{address.address}</span>
                        }
                    },
                ]}
                    dataSource={dataSource}
                    pagination={
                        {
                            pageSize: 10,
                        }
                    }
                ></Table>
            </Space>
        </div>
    )
}