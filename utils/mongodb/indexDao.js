const RegistrationModel = require('../mongodb/model/registration.model');
const { decryptText } = require('../helper/bcrypt.decrypt');

const registerCompany = async (data) => {
    try {
        let isCompanyExist = await RegistrationModel.find({ "phoneNumber": data.phoneNumber })
        if (isCompanyExist.length > 0) {
            return { "exist": "User already exist" };
        } else {
            let companyData = new RegistrationModel(data)
            return companyData.save();
        }
    } catch (error) {
        throw error;
    }
}

const loginCompany = async (data) => {
    try {
        const loginResult = await RegistrationModel.find({ "email": data.email });
        if (loginResult.length != 0) {
            const passwordMatch = await decryptText(data.password, loginResult[0].password);
            console.log("passwordMatch", passwordMatch)
            if (passwordMatch) {
                return loginResult;
            } else {
                return { "error": "User not Exist" };
            }
        } else {
            return { "error": "User not Exist" };
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registerCompany,
    loginCompany,
}