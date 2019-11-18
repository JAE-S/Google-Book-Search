import React from "react"; 
import SaveFavorites from "../SaveFavorites"
import { TableRow, TableCell, } from '@material-ui/core';



function SearchResults(props) {

    return ( 
        
        props.books.map((book, i)=> {
            
           return <TableRow key={i}> 
            
            <TableCell>{book.id}</TableCell> 
            <TableCell><img alt={book.title} src={book.image} /></TableCell>
            <TableCell>
               <h3>{book.title}</h3> 
               <p> {book.description}</p>
               <a href={book.link}>Click to view book</a>
            </TableCell> 
            <TableCell>
                
                <SaveFavorites/>
            </TableCell>
            </TableRow>
        })

    )
} 

export default SearchResults; 
