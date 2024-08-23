var wishlistMongoose =require('mongoose');
var wishlistSchema = wishlistMongoose.Schema;
var wishlistObjId = wishlistMongoose.Schema.Types.ObjectId;

var wishList = new wishlistSchema
                (
                    {
                        title: {type: String, default: "Useful Wish List"},
                        products: [{type: ObjectId, ref: 'Product'}]
                    }
                );
                g
module.exports = wishlistMongoose.model('WishList', wishList);