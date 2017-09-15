var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');
var format = require('date-format');


var app = express();

const route= require('./routes/route');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/challengelist');

mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb   @ 27017');
});
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('error in database connection:' + err);
    }

});



const port = 9000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/api',route);

app.get('/', (req, res) => {
    res.send('hi');

});

app.listen(port, () => {
    console.log('server started running at port' + port);

});