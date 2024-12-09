const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
//const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcom, response must include HTML status code
// and JSON message tot he requesting client

const tripsList = async(req, res) => {
    const q = await Trip
        .find({}) // No filter, return all records
        .exec();

        console.log(q);
    
    if(!q) {
        return res
            .status(404)
            .json(err);  
    }
    else {
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips - lists all the trips
// Regardless of outcome, reponse must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
   
    // No filter, return all records
    const q = await Trip
        .find({'code' : req.params.tripCode }) // Return single record
        .exec();

        console.log(q);

   if(!q){
        // Database returned no data
        return res
            .status(404)
            .json(err);
    }

    else {
        // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

module.exports = {
    tripsList,
    tripsFindByCode
};