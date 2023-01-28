const mongoose = require('mongoose');
    const Schema = mongoose.Schema

const schema = new Schema({
    companyId : {
        type : Schema.Types.ObjectId,
        ref : 'company',
        required : true
    },
    firstName : {
        type: String,
        required: true
    },
    middelName : {
        type: String,
        required: false,
    },
    lastName : {
        type: String,
        required: true,
    },
    phoneNumber : {
        type: Number,
        required: true
    },
    email : {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required: true,
    },
    registrationDate : {
        type: String,
        required: true,
    },
    serviceStartDate : {
        type: String,
        required: true,
    },
    serviceEndDate : {
        type: String,
        required: false,
    },
    serviceStatus : {
        type: String,
        required: true,
    },
    GSTNumber : {
        type: String,
        required: false,
    },
}, {timestamps: true})

const _model = mongoose.model("customers", schema);
module.exports = _model