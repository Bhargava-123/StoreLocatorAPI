const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/StoreLocator", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected To DB..');
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { connectDB };