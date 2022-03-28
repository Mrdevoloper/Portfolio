const express = require('express');
const app = express();
const ejs = require('ejs');
const router = require('./routes/routes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router);

app.listen(5000, console.log(5000));
