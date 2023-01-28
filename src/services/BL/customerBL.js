const { addCustomerDAL, updateCustomerDAL, getAllCustomerDAL } = require('../DAL/customerDAL')

const addCustomerBL = async (req, res) => {

    try {
        let data = req.body;
        { data.serviceStatus = data.serviceEndDate === undefined ? "Active" : "InActive" }
        let addCustomer = await addCustomerDAL(data);
        res.locals.rootdata = addCustomer;
    } catch (error) {
        throw error;
    }
}

const updateCustomerBL = async (req, res) => {

    try {
        let updateCustomer = await updateCustomerDAL(req.body)
        res.locals.rootdata = updateCustomer
    } catch (error) {
        throw error;
    }
}

const getAllCustomerBL = async (req, res) => {

    try {
        let getCustomer = await getAllCustomerDAL()
        res.locals.rootdata = getCustomer
    } catch (error) {
        throw error;
    }
}
module.exports = {
    addCustomerBL,
    updateCustomerBL,
    getAllCustomerBL
}