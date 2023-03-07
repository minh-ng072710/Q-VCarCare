const { register, login, checkPhoneTonTai, doiMatKhau, } = require("../controllers/usersController");

const router = require("express").Router();
router.post("/register", register);
router.post("/login", login);
router.post("/checkPhoneTonTai", checkPhoneTonTai);
router.post("/doiMatKhau", doiMatKhau);
module.exports = router;
