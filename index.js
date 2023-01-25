require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 1999
const server = "http://localhost";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const { mongoConnect } = require('./utils/mongoDB/connection');
mongoConnect();

app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log(`Application is running at ${server}:${port}`);
})