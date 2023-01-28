const RegistrationModel = require('../mongodb/model/registration.model');
const { decryptText } = require('../helper/bcrypt.decrypt');



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
    loginCompany,
}