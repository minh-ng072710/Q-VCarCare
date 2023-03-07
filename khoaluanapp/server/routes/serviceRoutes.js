const { addService } = require("../../public/src/utils/APIRoutes");

const router = require("express").Router();
router.post("/addService", addService);

module.exports = router;
