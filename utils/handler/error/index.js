const BaseError = require('./baseError')
class ValidationError extends BaseError {
    constructor(
        message,
        errObj = {},
        name = "ValidationError",
        displayMessage = "Request validation failed",
        statusCode = 400,
        description = 'NAX-3100',
    ) {
        super(message, errObj, name, displayMessage, statusCode, description)

        if (this.message == "") {
            this.message = "Validation Failed"
        }
        this.errObj = errObj;
    }
}

class MongoError extends BaseError {
    constructor(
        message,
        errObj = {},
        name = "MongoError",
        displayMessage = "Error in mongodb process",
        statusCode = 500,
        description = 'NAX-3000',
    ) {
        super(message, errObj, name, displayMessage, statusCode, description)
    }
}
class FileUploadError extends BaseError {
    constructor(
        message,
        errObj = {},
        name = "FileUploadError",
        displayMessage = "Error in uploading file",
        statusCode = 400,
        description = 'GR-5003',
    ) {
        super(message, errObj, name, displayMessage, statusCode, description)
    }
}

module.exports = { ValidationError, MongoError, FileUploadError }