const mongoose = require('mongoose');

const ridesSchema = new mongoose.Schema({
    ridename:{
        type:String,
        trim:true,
        required:true
    },
    rideimage:{
        type : String ,
        required:true
    }
});

const rides = mongoose.model('rides', ridesSchema);
module.exports = rides;