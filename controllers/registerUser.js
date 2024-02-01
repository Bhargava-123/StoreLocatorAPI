const mongoose = require('mongoose');
const Aggregator = require("../models/Aggregator.js");

const registerUserController = (data) => {
    Aggregator.create(data).then(() => {}).catch((err) => console.log(err));

}
module.exports = {registerUserController};