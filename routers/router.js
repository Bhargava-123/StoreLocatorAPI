const { Router } = require('express');
const { registerUserController } = require('../controllers/registerUser');
const { getLatLonMiddleWare } = require('../middlewares/GetLatLon');
const Aggregator = require('../models/Aggregator');
getLatLonMiddleWare
const router = Router();

router.post("/register-user",getLatLonMiddleWare,(req, res) => {
    const { name, country, state, postalCode, city, street } = req;
    //didnt format the request data, sent as usual since handled
    //accordingly
    registerUserController(req.body);
    res.send(req.body);
})

router.post("/get-nearby-locations", async (req, res) => {
    //index is created in mongodb compass itself
    // Aggregator.createIndexes([{ 'location': '2d' }]);
    const requestedUserLocation = await Aggregator.findOne({ name: req.body.location }).then(
        (data) => data.location
    );
    const maxProximity = 5000;
    const nearbyLocations = await Aggregator.find({
        location: {
            $near: {
                $geometry: requestedUserLocation,
                $maxDistance: maxProximity,
            },
        },
        //.select(to get the required fields)
    }).select({name:1}).then((data) => data);
    res.send(nearbyLocations);
})

module.exports = router;