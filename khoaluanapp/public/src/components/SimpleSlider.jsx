import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from "../assets/line1.png"


const spanStyle = {
    padding: '10px',
    background: '#efefef',
    color: '#000000',
    fontSize: "30px",

}

const divStyle = {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '85vh',
}
const slideImages = [
    {
        url: 'https://akcarcare.vn/thumbs/1366x665x1/upload/news/tiep-nhan-xe-5920.jpg',
        caption: 'TIẾP NHẬN XE',
        inform: 'Tiếp nhận yêu cầu xe của khách hàng, ghi nhận ý kiến và yêu cầu của khách hàng, ghi thông tin xe'
    },
    {
        url: 'https://akcarcare.vn/thumbs/1366x665x1/upload/news/tu-van-dich-vu-7287.jpg',
        caption: 'TƯ VẤN DỊCH VỤ',
        inform: 'Tiến hành kiểm tra xe, chẩn đoán bằng các thiết bị tư vấn dịch vụ phù hợp cho khách hàng',
    },
    {
        url: 'https://akcarcare.vn/thumbs/1366x665x1/upload/news/thuc-hien-dich-vu-4438.jpg',
        caption: 'THỰC HIỆN DỊCH VỤ',
        inform: 'Nhân viên kỹ thuật xác nhận yêu cầu, thực hiện các dịch vụ khách hàng chọn và tiến hành thực hiện',
    },
    {
        url: 'https://akcarcare.vn/thumbs/1366x665x1/upload/news/tu-van-dich-vu-7287.jpg',
        caption: 'KIỂM TRA VÀ VỆ SINH XE',
        inform: 'Vệ sinh xe, kiểm tra các chi tiết sau khi hoàn tất quá trình chăm sóc và bảo dưỡng',
    },
    {
        url: 'https://akcarcare.vn/thumbs/1366x665x1/upload/news/ban-giao-xe-2775.jpg',
        caption: 'BÀN GIAO XE',
        inform: 'Khách hàng thanh toán các khoản chi phí trên báo giá ban đầu. Hai bên ký biên nhận bản bàn giao xe',
    },
];

export default function Slideshow() {
    return (
        <div className="slide-container">
            <img src={Image} alt={Image} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span style={{ alignItems: "center", margin: "auto", color: "#FF8C00", fontSize: "40px", fontWeight: "bold" }}>{slideImage.caption}</span>

                            <span style={spanStyle}>{slideImage.inform}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}