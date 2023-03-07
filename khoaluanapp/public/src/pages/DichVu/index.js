import { Avatar, Space, Table, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../utils/APIRoutes";
export default function DichVu() {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true);
        getAllProducts().then((res) => {
            setDataSource(res.products);
        });
    }, []);
    return (
        <div>
            <Space size={20} direction={"vertical"}>

                <Typography.Title level={4}>Dịch vụ</Typography.Title>
                <Table columns={[
                    {
                        title: "Id",
                        dataIndex: "id",
                    },
                    {
                        title: "Thumbnail",
                        dataIndex: "thumbnail",
                        render: (link) => {
                            return <Avatar src={link}></Avatar>
                        }
                    },
                    {
                        title: "Title",
                        dataIndex: "title",
                    },
                    {
                        title: "Price",
                        dataIndex: "price",
                    },
                    {
                        title: "Brand",
                        dataIndex: "brand",
                    },
                    {
                        title: "Stock",
                        dataIndex: "stock",
                    },
                    {
                        title: "Category",
                        dataIndex: "category",
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