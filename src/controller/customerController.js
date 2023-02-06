const sendFailResponse = require('../utils/helper/failResponse');
const { addCustomerBL, updateCustomerBL, getAllCustomerBL, getCustomerByIDBL } = require('../services/BL/customerBL')

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

const getAllCustomerController = async (req, res, next) => {

    try {
        await getAllCustomerBL(req, res);
        next()
    }catch (error) {
        sendFailResponse(error, req, res);
    }
}
const getCustomerByID = async (req, res, next) => {

    try {
        await getCustomerByIDBL(req, res);
        next()
    }catch (error) {
        sendFailResponse(error, req, res);
    }
}

module.exports = {
    addCustomerController,
    updateCustomerController,
    getAllCustomerController,
    getCustomerByID
}