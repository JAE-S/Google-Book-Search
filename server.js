
  // ========================================================== //
 //                       S E R V E R                          //
// ========================================================== //

// Dependencies
// =========================================================
    const express = require("express");
    const mongoose = require("mongoose"); 
    const routes = require("./App/routes"); 

// PORT
// =========================================================
    const PORT = process.env.PORT || 3000;

// Sets up the Express App
// =========================================================
    const app = express();

// Sets up for Mongoose + Heroku
// =========================================================
    var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/google-it";
        mongoose.connect(MONGODB_URI,  { useNewUrlParser: true })
        // Connect to mongoose database 
        mongoose.connect(MONGODB_URI, err => {
            if (err){
                console.log("An error has occured: " + err);
            } else {
                console.log("Connection to Mongoose was successful");
            }
    });

// Configure middleware
// =========================================================
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    // Serve up static assets (usually on heroku)
    if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    }

// Route
// =========================================================
    app.use(routes);

// Starts the server
// ========================================================
    app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
    });

 module.exports = app;
