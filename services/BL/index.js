const { encryptText } = require('../../utils/helper/bcrypt.decrypt')
const {
    registerCompanyDAL,
    loginCompanyDAL
} = require('../DAL/index')

const registerCompanyBL = async (req, res) => {

    try {
        let data = req.body
        // if(data.registrationKey = undefined) {
        //     data.registrationKey = 'Free'
        //     return data.registrationKey
        // } 
        // else {
        //     data.registrationKey = await encryptText(data.registrationKey)
        // }
        data.password = await encryptText(data.password)
        let saveCompany = await registerCompanyDAL(data);
        res.locals.rootdata = saveCompany;
    } catch (error) {
        throw error;
    }
}

const loginCompanyBL = async (req, res) => {

    try {
        const loginCompanyResult = await loginCompanyDAL(req.body)
        console.log("loginCompanyResult", loginCompanyResult)
        res.locals.rootdata = loginCompanyResult;
        console.log("res.locals.rootdata", res.locals.rootdata)
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registerCompanyBL,
    loginCompanyBL,
}