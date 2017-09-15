const mongoose = require('mongoose');
const dateFormat = require('date-format');

var now = new Date();
dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

 
const ChallengeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    priority: {
        type: String,
        required: true

    },
    start_date: {
        type: Date,
        required: true,
        //get:formattedDate 
    },
    end_date: {
        type: Date,
        required: true
    }
});
const Challenge = module.exports = mongoose.model('challenge', ChallengeSchema);

    

