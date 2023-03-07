const Customer = require("../model/customerModel");
const bcrypt = require("bcrypt");
// < Đăng ký tài khoản > //
module.exports.register = async (req, res, next) => {
    try {
        const { email, password, phone } = req.body;
        const phoneCheck = await Customer.findOne({ phone });
        if (phoneCheck)
            return res.json({ msg: "Phone number already used", status: false });
        const emailCheck = await Customer.findOne({ email });
        if (emailCheck)
            return res.json({ msg: "Email already used", status: false });
        const hashedPassword = await bcrypt.hash(password, 10);
        const customer = await Customer.create({
            phone,
            email,
            password: hashedPassword,
        });
        delete customer.password;
        return res.json({ status: true, user });
    } catch (ex) {
        next(ex);
    }
};
// < Đăng nhập tài khoản > //

module.exports.login = async (req, res, next) => {
    try {
        const { phone, password } = req.body;
        const customer = await Customer.findOne({ phone });
        if (!customer)
            return res.json({ msg: "Incorrect phone or password", status: false });
        const isPasswordValid = await bcrypt.compare(password, customer.password);
        if (!isPasswordValid)
            return res.json({ msg: "Incorrect phone or password", status: false });
        delete customer.password;
        return res.json({ status: true, customer });
    } catch (ex) {
        next(ex);
    }
};
// < Kiểm tra số điện thoại > //
module.exports.checkPhoneTonTai = async (req, res, next) => {
    try {
        const { phone } = req.body;
        console.log("số điện thoại: ", phone);
        const phoneCheck = await Customer.findOne({ phone });
        if (phoneCheck)
            return res.json({ msg: "Phone number already used", status: false });
    } catch (error) {
        next(error);
    }
    return res.json({ msg: "Phone Hợp lệ", status: true });
};
// <  Đổi mật khẩu ( forgotpassword ) > //

module.exports.doiMatKhau = async (req, res) => {
    const { phone, newpassword } = req.body;
    // console.log("số dthoai", phone);
    // console.log("password new:", newpassword);
    const hashedPassword = await bcrypt.hash(newpassword, 10);
    const customer = await Customer.findOne({ phone });
    // console.log("user_id", user._id);
    const customersauKhiDoiMatKhau = await Customer.findByIdAndUpdate(
        { _id: customer._id },
        { password: hashedPassword },
        { new: true }
    );

    return res.json({ status: true, data: customersauKhiDoiMatKhau });
};

module.exports.layDanhSachKhachHang = async (req,res,next) => {
    const {phone, firstName, lastName, address, cars,email,customerId} = req.body;
    const phoneCheck = await Customer.findOne({ phone });
    if (phoneCheck)
        return res.json({ msg: "Phone number already used", status: false });
}
