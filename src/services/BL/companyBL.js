const { encryptText } = require('../../utils/helper/bcrypt.decrypt')
const { generateJwtToken } = require('../../utils/helper/tokenGenerator')

const jwt = require('jsonwebtoken')
const {tokenVerifier} = require('../../utils/helper/tokenGenerator')
const {
    registerCompany,
    getCompanyByEmail,
    loginCompany,getTokenByEmail
} = require('../DAL/companyDL')


const registerCompanyBL = async (req, res) => {

    try {
        console.log('BL hit')
        let data = req.body
        const userExist = await getCompanyByEmail(data)
        console.log(userExist)
        if(userExist.length>0){
            console.log('ue hit')
            return res.status(200).send("User Already Exist")
        }
        data.password = await encryptText(data.password)
        const token = generateJwtToken(data)
        data.registrationKey = token;
        let saveCompany = await registerCompany(data);
        res.locals.rootdata = saveCompany;
    } catch (error) {
        throw error;
    }
}

const loginCompanyBL = async (req, res) => {

    try {
        const data = req.body;
        const token = await getTokenByEmail(data);
        console.log(token)
        const authorized = tokenVerifier(token);
        if(!authorized){
            return res.status(401).send('Unauthorized User');
        }
        const loginCompanyResult = await loginCompany(data)
        res.locals.rootdata = loginCompanyResult;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registerCompanyBL,
    loginCompanyBL,
}