const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    marketcap: { type: Number, required: true },
    percentChange1h: { type: Number, required: true },
    percentChange24h: { type: Number, required: true }
});

const CryptoData = mongoose.model('CryptoData', cryptoSchema);
module.exports = CryptoData;