const mongoose = require('mongoose');
const mongoUri = require('../../config/index.config.json').mongodbUri;

const mongoConnect = () => {
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('connect', function () {console.log('connect to mongodb') });
    mongoose.connection.on('error', (err) => { console.log('Error', err)});
}
module.exports = {mongoConnect}