  // ========================================================== //
 //                         API Routes                         //
// ========================================================== //

// Dependencies
// =========================================================
    const router = require('express').Router();
    const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// =========================================================
  router.route("/")
  // .get(booksController.findAll)
  .post(booksController.create); 

// Matches with "/api/books"
// =========================================================
  // router.route("/:id")
  // .get(bookController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove); 

module.exports = router; 