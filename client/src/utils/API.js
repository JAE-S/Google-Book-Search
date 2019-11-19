import axios from "axios"; 
// const GOOGLE = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&apikey=trilogy";

    export default {
        // Gets all books 
        googleSearch: function(query) {
            return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        },

          // Gets all books
        getBooks: function() {
        return axios.get("/api/books");
        },
        // Saves a book to the database
        saveBook: function(bookData) {
            return axios.post("/api/books", bookData);
        }, 
      
    }