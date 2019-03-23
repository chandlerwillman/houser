//require packages
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

//controllers
const controller = require('./controller');

//deconstruct variables
const { DB_CONNECTION_STRING } = process.env;

//middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

//database connection
massive(DB_CONNECTION_STRING).then((dbInstance) => {
    app.set('db',dbInstance);
}).catch(() => {
    console.log('failed');
});

//endpoints
app.get('/api/houses', controller.getAll);
app.post('/api/houses', controller.create);

//get server listening on a port
app.listen(4000, () => {
    console.log('Server is running on localhost:4000')
});