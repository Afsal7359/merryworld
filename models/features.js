const mongoose = require('mongoose');

const featuresSchema = new mongoose.Schema({
    feathead: {
        type: String,
        required:true,
        trim: true
    },
    featdescription: {
        type: String,
        required:true,
        trim: true
    },
    featimage: {
        type: String,
        required: true
    }
});

const   feature = mongoose.model('feature', featuresSchema);
module.exports = feature;
