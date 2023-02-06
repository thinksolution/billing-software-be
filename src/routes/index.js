const express = require("express");
const router = express.Router();
const successResponseGenrator = require('../utils/helper/sucessResponse');

const {
    registerCompanyController,
    loginCompanyController,
} = require('../controller/companyController')
const {
    addCustomerController,
    updateCustomerController,
    getAllCustomerController,
    getCustomerByID
} = require('../controller/customerController')

router.post('/register', registerCompanyController, successResponseGenrator)
router.post('/login', loginCompanyController, successResponseGenrator)
router.post('/addcustomer', addCustomerController, successResponseGenrator)
router.patch('/updatecustomer', updateCustomerController, successResponseGenrator)
router.get('/customers', getAllCustomerController, successResponseGenrator)
router.get('/customer',getCustomerByID,successResponseGenrator)
module.exports = router;