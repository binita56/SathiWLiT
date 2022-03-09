var mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    names: String,
    currentLocation: String,
    phoneNumber: String,
    emailAddress: String,
    gender: String,
    destination: String,
    startTravelDate: Date,
    endTravelDate: Date,
    requiredNumber: Number,
    itinerary: String,
    remarks: String

});

module.exports = mongoose.model('Events', EventSchema) 