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
    '/wishlist',
    function(request, response)
    {
        serverOja.find({}).populate({path:'products', model:'Oja'}).exec(function(err, wishLists)
        {
            if(err)
            {
                response.status(500).send({error:"Could not fetch water from the well due to the traffic of the sunlight under the bucket"});
            }
            else
            {
                response.status(200).send(wishLists);
            }
        });   
    }
);

serverApp.post
(
    '/wishlist',
    function(request, response)
    {
        var postWishlist = new WishList ();
        postWishlist.title = request.body.title;

        postWishlist.save
        (
            function(err, newPostedWl)
            {
                if(err)
                {
                    response.status(500).send({error: "Can not create Wishlist, something is broken somewhere, sorry about that"});
                }
                else
                {
                    response.send(newPostedWl); //Debugging checkpoint
                }
            }
        );
    }
);

serverApp.put
(
    '/wishlist/product/add',
    function(request, response)
    {
        serverOja.findOne
        (
            {_id: request.body.productId},
            function(err, product)
            {
                if(err)
                {
                    response.status(500).send
                    (
                        {error:"Could not add item to wishlist, you read ?"}
                    );
                }
                else
                {
                    WishList.update
                    (
                        {_id:request.body.wishListId}, 
                        {$addToSet:{products: product._id}}, 
                        function(err, wishList)
                        {
                            if(err)
                            {
                                response.status(500).send
                                (
                                    {error:"Could not add item to wishlist, you copy ?"}
                                );
                            }
                            else
                            {
                                response.send(wishList);
                            }
                        }
                    );
                }
            }
        )
    }
);

serverApp.listen
(
    3000,
    function()
    {
        console.log("Shopping list API now running... Shey you hear ?");
    }
);