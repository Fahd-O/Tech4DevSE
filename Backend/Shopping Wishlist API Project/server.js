var expressVariable = require('express');
var serverApp = expressVariable();
var variableForBodyParser = require('body-parser');
var variableForMongoose = require('mongoose');
var db = variableForMongoose.connect('mongodb://localhost/Shopping-Wishlist');

var serverOja = require('./model/oja');
var Wishlist = require('./model/wishlist');

serverApp.use(variableForBodyParser.json());
serverApp.use(variableForBodyParser.urlencoded({extended: false}));

serverApp.post
(
    '/product',
    function(request, response)
    {
        var postOja = new serverOja();
        postOja.title = request.body.title;
        postOja.price = request.body.price;
        postOja.likes = 0;
    }
)

serverApp.listen
(
    3000,
    function()
    {
        console.log("Shopping list API now running... Shey you hear ?");
    }
);