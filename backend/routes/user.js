const express = require("express");
const { register, activateAccount } = require("../controllers/user");
const router = express.Router();

router.post("/register", register);
router.post("/register", activateAccount);

module.exports = router;
