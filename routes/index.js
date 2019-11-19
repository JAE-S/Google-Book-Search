// Dependencies
// =========================================================
    const path = require("path");
    const apiRoutes = require('./api');
    const router = require("express").Router()
    

// API routes
// =========================================================
    router.use("/api", apiRoutes); 

// If no API routes are hit, send the react app to the index 
// router.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html")); 
// });

// If no API routes are hit, send the react app to the index 
// =========================================================
    router.use(function(req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });

module.exports = router; 