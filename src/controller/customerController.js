const sendFailResponse = require('../utils/helper/failResponse');
const { addCustomerBL, updateCustomerBL } = require('../services/BL/customerBL')

const addCustomerController = async (req, res, next) => {

    try {
        await addCustomerBL(req, res);
        next()
    } catch (error) {
        sendFailResponse(error, req, res)
    }
}

const updateCustomerController = async (req, res, next) => {

    try {
        await updateCustomerBL(req, res);
        next()
    } catch (error) {
        sendFailResponse(error, req, res)
    }
}

module.exports = {
    addCustomerController,
    updateCustomerController,
}