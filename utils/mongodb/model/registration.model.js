const {Schema, model } = require('mongoose')

const schema = new Schema({
    companyName : {
        type: String,
        required: true
    },
    firstName : {
        type: String,
        required: true
    },
    middleName : {
        type: String,
        required: false
    },
    lastName : {
        type: String,
        required: true
    },
    phoneNumber : {
        type: Number,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    gstNumber : {
        type: String,
        required: false
    },
    registrationKey : {
        type: String,
        required: false
    }
},{timestamps: true});   //Updated at created at time 

const _model = model("companies", schema);//COmpany
module.exports = _model