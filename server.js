// require our dependencies
var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser     = require('body-parser');
var app            = express();
var port           = 3000;


// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body
app.use(bodyParser.urlencoded());

//route our app
var router = require('./app/routes');
app.use('/', router);

// set static files (css and img, etc) location
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function() {
    console.log('App started!');
});

