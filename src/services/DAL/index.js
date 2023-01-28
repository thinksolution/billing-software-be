const indexDao = require('../../utils/mongodb/indexDao');
const { MongoError } = require('../../utils/handler/error/index')

const registerCompanyDAL = async (data) => {

    try {
        let result = await indexDao.registerCompany(data);
        return result;
    } catch (error) {
        throw new MongoError(error);
    }

}

const loginCompanyDAL = async (data) => {

    try {
        let result = await indexDao.loginCompany(data)
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registerCompanyDAL,
    loginCompanyDAL,
}