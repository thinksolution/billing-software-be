const mongoose = require('mongoose');
mongoose.set('strictQuery', false);    // if removed it was showing deprecation warning.        

const mongoUri = require('../../config/index.config.json').mongodbUri;

const mongoConnect = () => {
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('connected', function () {console.log('connected to mongodb') });
    mongoose.connection.on('error', (err) => { console.log('Error', err)});
}
module.exports = {mongoConnect}