// // Thêm service , xóa , sửa // 
// app.get('/addService', (req, res) => {
//     const service = new Service({
//         serviceName: 'sv2',
//         serviceContent: 'ct1',
//         time: '1h',
//         serviceId: 'sv001',
//         price: '500',
//     });
//     service.save().then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     })
// })

const Service = require("../model/serviceModel");

// add service
module.exports.addService = async (req, res, next) => {
    const { serviceId,
        serviceContent,
        price,
        time,
        serviceName } = req.body;
    const service = await Service.create({
        serviceId,
        serviceContent,
        price,
        time,
        serviceName,
    });
    return res.json({ status: true, service });

};