import React from "react"; 
// import { TableRow } from '@material-ui/core';
// import { getThemeProps } from "@material-ui/styles";

function SearchResults(props) {

    return (
        props.books.map((book, i)=> {
           return  <div key={i}> Search results
            {book.id}
            {book.title} </div>
        })

    )
}

export default SearchResults; 
