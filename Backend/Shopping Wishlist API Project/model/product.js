var prodMongoose = require('mongoose');
var prodSchema = prodMongoose.Schema;

var oja = new prodSchema
                ({
                    title: String,
                    price: Number,
                    likes: {type: Number, default: 0}
                });

module.exports = prodMongoose.model('Oja', oja);                