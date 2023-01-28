const AddCustomerModel = require('../../utils/mongodb/model/customer.registration')

const getAllCustomerDAL = async () => {
    try {
        let getAllCustomerData = AddCustomerModel.find()
        return getAllCustomerData;
    } catch (error) {
        throw error;
    }
}

const addCustomerDAL = async (data) => {
    try {
        let isCustomerExist = await AddCustomerModel.find({email : data.email } || {phoneNumber: data.phoneNumber})
        if (isCustomerExist.length > 0) {
            return {exist : "Customer already Added"}
        } else {
            let customerData = new AddCustomerModel(data)
            return customerData.save();
        }
    } catch (error) {
        throw error;
    }
}

const updateCustomerDAL = async (data) => {
    try {
        // firstName : data.firstName,
        //     middelName : data.middelName,
        //     lastName : data.lastName,
        //     phoneNumber : data.phoneNumber,
        let _id = data.id
        let eidtCoustomerDetails = await AddCustomerModel.findByIdAndUpdate(_id, data, {new: true}.exe());
        return eidtCoustomerDetails;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addCustomerDAL,
    updateCustomerDAL,
    getAllCustomerDAL
}