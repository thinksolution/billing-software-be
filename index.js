const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 1999
const SERVER = "http://localhost";

const app = express();
{console.log("test", process.env.PORT)}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const { mongoConnect } = require('./utils/mongoDB/connection');
mongoConnect();

app.use('/', require('./routes'));

app.listen(PORT, () => {
    console.log(`Application is running at ${SERVER}:${PORT}`);
})