const mongoose = require('mongoose')

const aboutSchema= new mongoose.Schema({
    abouthead:{
        type:String,
        trim:true,
        required:true,
    },
    aboutsubhead:{
        type:String,
        trim:true,
        required:true
    },
    aboutdescription:{
        type:String,
        trim:true,
        required:true
    },
    aboutimage:{
        type:String,
        required:true
    }
});
const about= mongoose.model('about',aboutSchema);
module.exports = about;