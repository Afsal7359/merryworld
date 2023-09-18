const mongoose = require('mongoose')

const contactSchema =  new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:true
    },
    email:{
        type : String ,
        trim: true,
        require:true
    },
    phone:{
        type : String,
        trim:true,
        require:true
    },
    subject:{
        type:String,
        trim:true,
        require:true
    },
    message:{
        type : String ,
        trim: true,
        require:true
    },


    
});
const contact = mongoose.model('contactform',contactSchema);
module.exports=contact;