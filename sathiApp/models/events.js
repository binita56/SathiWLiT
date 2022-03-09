var mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    name: String,
    currentLocation: String,
    phoneNumber: String,
    email: String,
    gender: String,
    destination: String,
    startTravelDate: Date,
    endTravelDate: Date,
    requiredNumber: Number,
    itinerary: String,
    remarks: String

});