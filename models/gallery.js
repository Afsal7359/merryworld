const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({

    gallerysimage:{
        type:String,
        required:true
    }
});

const gallery = mongoose.model('galary', gallerySchema);
module.exports = gallery;