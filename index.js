const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./app/routes/api/routes')(app);
const server = app.listen(2250);

