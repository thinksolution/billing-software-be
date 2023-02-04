const RegistrationModel = require("../../utils/mongodb/model/registration.model");
const { decryptText } = require("../../utils/helper/bcrypt.decrypt");

const getCompanyByEmail = async (data) => {
  const _data = await RegistrationModel.find({ email: data.email });
  console.log("_data", _data);
  return _data;
};
const registerCompany = async (data) => {
  try {
    let companyData = new RegistrationModel(data);
    return companyData.save();
  } catch (error) {
    throw error;
  }
};
const getTokenByEmail = async (data) => {
  let companyData = undefined;
  if (data !== undefined) {
    companyData = await RegistrationModel.find({ email: data.email });
  }
  console.log(companyData)
  const result = companyData[0].registrationKey;
  
  return result;
};
const loginCompany = async (data) => {
  try {
    const loginResult = await RegistrationModel.find({ email: data.email });
    if (loginResult.length != 0) {
      const passwordMatch = await decryptText(
        data.password,
        loginResult[0].password
      );
      if (passwordMatch) {
        return loginResult;
      } else {
        return { error: "User not Exist" };
      }
    } else {
      return { error: "User not Exist" };
    }
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getCompanyByEmail,
  registerCompany,
  loginCompany,
  getTokenByEmail
};
