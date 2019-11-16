import React from "react"; 
import {Input, Button} from '@material-ui/core';

function SearchBar(props) {
    return (
        <form>
            <label htmlFor="book">Book Title: </label>
            <Input
                value={props.search}
                onChange={props.handleInputChange}
                type="text"
                placeholder=" Type in a book to begin"
                id="book"
                
                style={{
                    margin: '0 auto',
                    maxWidth: 800,  
                    marginTop: 200  
                }}
            />
            <Button 
                type="submit" 
                onClick={props.handleFormSubmit} 
            >
                Search
            </Button>
        </form>
    )
} 

export default SearchBar;