const sendFailResponse = require('../utils/helper/failResponse');
const { registerCompanyBL,
    loginCompanyBL,
} = require('../services/BL/index')

const registerCompanyController = async (req, res, next) => {

    try {
        await registerCompanyBL(req, res);
        next()
    } catch (error) {
        sendFailResponse(error, req, res);
    }
}

const loginCompanyController = async (req, res, next) => {

    try {
        await loginCompanyBL(req, res);
        next()
    } catch (error) {
        sendFailResponse(error, req, res);
    }
}

module.exports = {
    registerCompanyController,
    loginCompanyController,
}