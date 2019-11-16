import React from "react"; 

import { TableRow, TableCell } from '@material-ui/core';
// import { getThemeProps } from "@material-ui/styles";

function SearchResults(props) {

    return (
        
        props.books.map((book, i)=> {
           return  <TableRow key={i}> 
            <TableCell>{book.id}</TableCell> 
            <TableCell style={{height: 100, width: 100 }}><img src={book.image} /></TableCell>
            <TableCell>
               <h3>{book.title}</h3> 
               <p> {book.description}</p>
               <a href={book.link}>Click to view book</a>
            </TableCell> 
            </TableRow>
        })

    )
} 

export default SearchResults; 
