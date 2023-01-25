const jwt = require('jsonwebtoken')

const generateJwtToken = function (data) {
    let token = undefined
    if (data!== undefined){
    token =  jwt.sign(data,'jwt_encrypter',{expiresIn:'365d'});
}
   return token
}
const tokenVerifier = function(token){
    console.log('t',token)
    const verified = jwt.verify(token, 'jwt_encrypter');
    console.log( 'token',verified);
    return verified
}

module.exports={generateJwtToken,tokenVerifier}
