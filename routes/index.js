const express = require("express");
const router = express.Router();
const successResponseGenrator = require('../utils/helper/sucessResponse');

const {
    registerCompanyController,
    loginCompanyController,
} = require('../controller/companyController')

router.post('/register', registerCompanyController, successResponseGenrator)
router.post('/login', loginCompanyController, successResponseGenrator)

module.exports = router;