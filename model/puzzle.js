const mongoose = require('mongoose');
let schema=mongoose.Schema

let validetion=new schema({
    que:String,
    level :String,
    ans:String,
    category:{ type: schema.Types.ObjectId, ref: 'category' },
})

let puzzledatabase=mongoose.model('que',validetion) 
module.exports=puzzledatabase