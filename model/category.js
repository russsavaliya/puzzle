const mongoose = require('mongoose');
let schema=mongoose.Schema

let validetion=new schema({
    name:{type:String,
         unique:true},
    background:[String],
    icon:[String],
})

let categorydatabase=mongoose.model('category',validetion) 

module.exports=categorydatabase