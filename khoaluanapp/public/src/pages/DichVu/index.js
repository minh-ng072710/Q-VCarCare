import { Avatar, Button, Space, Table, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { getAllService } from "../../utils/APIRoutes";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
export default function DichVu() {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true);

        // getAllService().then((res) => {
        //     setDataSource(res.services);
        // });
    }, []);

    // ?????? //////
    // const getAds = async () => {
    //     const res = await axios.get('/ads')
    //     console.log(res.data)
    //   }
    //   getAds()

    const onAddService = () => {
        // const newService = {
        //     serviceId: "serviceId",
        //     serviceName: "serviceName",
        //     serviceContent: "serviceContent",
        //     time: "time",
        //     price: "price",
        // };
        // setDataSource = ((pre) => {
        //     return [...pre, newService];
        // });
    };

    const onDeleteService = (record) => {

    }
    return (
        <div>
            <Space size={20} direction={"vertical"}>

                <Typography.Title level={4}>Dịch vụ</Typography.Title>
                <Button onClick={onAddService}>Thêm</Button>
                <Table columns={[
                    {
                        key: "1",
                        title: "Id",
                        dataIndex: "_id",
                    },
                    {
                        key: "2",
                        title: "Service Id",
                        dataIndex: "serviceId",
                    },

                    {
                        key: "3",
                        title: "Service Name",
                        dataIndex: "serviceName",
                    },
                    {
                        key: "4",
                        title: "Time",
                        dataIndex: "time",
                    },
                    {
                        key: "5",
                        title: "Service Content",
                        dataIndex: "serviceContent",
                    },
                    {
                        key: "6",
                        title: "Price",
                        dataIndex: "price",
                    },
                    {
                        key: "7",
                        title: "Actions",
                        render: (record) => {
                            return (
                                <>
                                    <EditOutlined />
                                    <DeleteOutlined onClick={onDeleteService(record)} style={{ color: "red", marginLeft: "12px" }} />
                                </>
                            )
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