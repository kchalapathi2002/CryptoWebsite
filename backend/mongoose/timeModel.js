const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
    fieldfor: { type: String, required: true },
    timeStamp: { type: String, required: true }
});

const time = mongoose.model('time', timeSchema);

module.exports = time;