const mongoose = require('mongoose');
const pointSchema = require("./pointSchema.js");

const Schema = mongoose.Schema;

const aggregatorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    country: String,
    state: String,
    postalCode: String,
    city: String,
    street: String,
    location: pointSchema,
});
const Aggregator = mongoose.model('Aggregator', aggregatorSchema);

module.exports = Aggregator;