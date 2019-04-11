// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

//route our homepage
router.get('/', function(req, res) {
    res.render('pages/home');
});

// route for our about page
router.get('/about', function(req, res) {
    var users = [
        { name: 'Holly', email: 'holly@scotch.io', avatar: 'http://placekitten.com/300/300'},
        { name: 'Chris', email: 'Chris@scotch.io', avatar: 'http://placekitten.com/400/400'},
        { name: 'Ado',   email: 'Ado@scotch.io',   avatar: 'http://placekitten.com/500/500'},
        { name: 'Nick',  email: 'Nick@scotch.io',  avatar: 'http://placekitten.com/600/600'},
    ];

    res.render('pages/about', { users: users});
});

router.get('/contact', function(req, res) {
    res.render('pages/contact');
});

router.post('/contact', function(req, res) {
    res.send('Thanks for contactiong us, ' + req.body.name + '! We will shortly!');
});
