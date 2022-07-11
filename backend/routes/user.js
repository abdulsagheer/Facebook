const express = require("express");
const { register, activateAccount, login } = require("../controllers/user");
const router = express.Router();

router.post("/register", register);
router.post("/register", activateAccount);
router.post("/register", login);

module.exports = router;
