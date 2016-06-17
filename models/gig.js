/**
 * Created by Sandeep on 01/06/14.
 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var gigSchema=new Schema({
   id: Number,
  date: Date,
  bands: String,
  venue: String,
  price: Number

});

module.exports=mongoose.model('Gig',gigSchema);