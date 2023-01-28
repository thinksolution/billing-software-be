const { validationResult } = require('express-validator');
const { ValidationError } = require('../handler/error');
const failResponse = require('../helper/failResponse');

module.exports = async (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        const mappedErrors = result.array()
        let errorArr = []
        for (let i = 0; i < mappedErrors.length; i++) {
            let newErrObj = {
                param: mappedErrors[i].param,
                msg: mappedErrors[i].msg

            }
            errorArr.push(newErrObj)

        }

        const error = new ValidationError("", errorArr);
        await failResponse(error, req, res);


    } else {
        next()
    }
}