var expressVariable = require('express');
var serverApp = expressVariable();
var variableForBodyParser = require('body-parser');
var variableForMongoose = require('mongoose');
var db = variableForMongoose.connect('mongodb://localhost/Shopping-Wishlist');

var serverOja = require('./model/product');
var WishList = require('./model/wishlist');

serverApp.use(variableForBodyParser.json());
serverApp.use(variableForBodyParser.urlencoded({extended: false}));

serverApp.post
(
    '/product',
    function(request, response)
    {
        var postOja = new serverOja(); //Getting an error here that "throw new MongooseError('Model.prototype.save() no longer accepts a callback');". This could be source of the problem, tutorial videos is stale.
        postOja.title = request.body.title;
        postOja.price = request.body.price;
        postOja.save(
                        function(err, savedProduct)
                        {
                            if(err)
                            {
                                response.status(500).send({error:"Could not save product, you hear"});
                            }
                            else
                            {
                                response.status(200).send(savedProduct);
                            }
                        }
                    );
    }
);

serverApp.get
(
    '/product',
    function(request, response)
    {
        serverOja.find
        (
            {},
            function(err, products)
            {
                if(err)
                {
                    response.status(500).send({error:"Could not fetch water from the well due to the traffic of the sunlight under the bucket"}); //this is supposed to be an error message but made it gibberish for fun and to be able to distinguish it and recognise it as my handwriting.
                }
                else
                {
                    response.send(products);
                }
            }
        );

        
    }
);



// serverApp.post
// (
//     '/wishlist',
//     function(request, response)
//     {
//         var postWishlist = new WishList ();
//         postWishlist.title = request.body.title;

//         postWishlist.save
//         (
//             function(err, newPostedWl)
//             {
//                 if(err)
//                 {
//                     response.status(500).send({error: "Can not create Wishlist, something is broken somewhere, sorry about that"});
//                 }
//                 else
//                 {
//                     response.send(newPostedWl);
//                 }
//             }
//         );
//     }
// );

serverApp.listen
(
    3000,
    function()
    {
        console.log("Shopping list API now running... Shey you hear ?");
    }
);
