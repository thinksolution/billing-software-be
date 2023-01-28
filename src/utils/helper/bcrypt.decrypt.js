const bcrypt = require('bcrypt')

const encryptText = async (text) => {
    console.log("test", text)
    let encrypted
    let promise = new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) { reject(err) }
            bcrypt.hash(text, salt, (err, hash) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(hash)
                }
            });
        });
    })
    await promise.then((hash) => {
        encrypted = hash
    })
    return encrypted
}

const decryptText = async (text, hash) => {
    let decrypted;
    let promise = new Promise((resolve, reject) => {
        bcrypt.compare(text, hash, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        });
    })
    await promise.then(text => {
        decrypted = text
    })
    return decrypted
}

module.exports = { encryptText, decryptText }





// const bcrypt = require('bcrypt')
// {console.log("fired")}
// let text = "AC1234"
// const encryptText = async (text) => {
//     let encrpt = new Promise((resolve, reject) = {
//         bcrypt.genSalt(10, (err, salt) => {
//             if (err) { reject(err) }
//             bcrypt.hash(text, salt, (err, hash) => {
//                 if (err){
//                     reject(err)
//                 } else {
//                     resolve(hash)
//                 }
//             });
//         });
//     })
//     await encrpt.then((hash) => {
//         let encrypted = hash
//         console.log("hash", encrypted)
//     })
//     return encrypted;
// }

// module.exports = { encryptText }