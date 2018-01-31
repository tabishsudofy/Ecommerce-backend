var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var record ={
    title : 'Application',
    statusCode : 200
}
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://Tabish:ecommerse@ds117878.mlab.com:17878/ecommerseweb',{useMongoClient:true});


var CartItemsSchema = new Schema({
     product: {
        type:String,
        required:true
    },
    phone_no: {
        type:String,
        required:true
    },
     email: {
        type:String,
        required:true
    }, 
    quantity: {
        type:Number,
        required:true
    },
    total: {
        type:Number, 
        required:true
    },
    date: {
        type:String,
        required:true
    }
},{collection : 'CartItems'});

var model = mongoose.model("CartItems", CartItemsSchema);

// for cart items
record.saveData = function(req,res){
    var mydate = new Date();
        var postBody = req.body;
        var data = {
            product : postBody.product,
            phone_no: postBody.phone_no,
            email: postBody.email,
            quantity: postBody.quantity,
            total : postBody.total,
            date  : mydate
        }
        var addData = new model(data);
        addData.save(function(err,newdata){
            if (err){
                console.log(err)
                res.send({
                statusCode : 505,
                message : "Unable To Save a Data"
            });
            }
            else{
                res.send({
                statusCode : 200,
                message : "Data inserted",
                newdata : data
            })
            }

        });
    }

    //delete data
        record.deleteData = function(req,res){
            var postBody = req.params.id;
            model.findByIdAndRemove(postBody,function(err,newdata){
                    if (err){
                        res.send({
                            statusCode : 505,
                            message : "Some thing went wrong"
                           })
                        }
                      else{
                        res.send({
                          statusCode : 200,
                           message : "Data has been deleted",
                           data:newdata 
                        })
                    }
                
                })
            }


    record.getData = function(req,res){
    model.find({},function(err,newdata){
            if (err){
                res.send({
                    statusCode : 505,
                    message : "Some thing went wrong"
                   });
                }
              else{
                res.send({
                   statusCode : 200,
                   message : "Data has been displayed",
                   data:newdata 
                })
            }
        
        });
    }


 record.updateCartInfo = function(req,res){
    var postBody = req.params.id;
    model.findByIdAndUpdate(postBody,{
    $set : { 
            product : postBody.product,
            phone_no: postBody.phone_no,
            email: postBody.email,
            quantity: postBody.quantity,
            total : postBody.total
            } 
    },function(err,newdata){
            if (err){
                console.log("Error")
                res.send({
                    statusCode : 505,
                    message : "Some thing went wrong"
                   })
                }
              else{
                res.json({
                statusCode : 200,
                message : "Data has been updated",  
                data: newdata 
                })
            }
        })
    }

module.exports = record;