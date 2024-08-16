var expressVariable = require('express');
var serverApp = expressVariable();
var variableForBodyParser = require('body-parser');
var variableForMongoose = require('mongoose');
var db = variableForMongoose.connect('mongodb://localhost/Shopping-Wishlist');

serverApp.use(variableForBodyParser.json());
serverApp.use(variableForBodyParser.urlencoded({extended: false}));

serverApp.listen
(
    3000,
    function()
    {
        console.log("Shopping list API now running... Shey you hear ?");
    }
);