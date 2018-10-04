const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./controller.js')(app);

const server = app.listen(3000);
console.log("Server working on 3000")