import React from "react"; 
import {Input, Button, AppBar} from '@material-ui/core';

function SearchBar(props) {

    return (
        <>
        <AppBar style={{marginTop: 200, padding: 20, backgroundColor: "rgb(232, 240, 254)"}}>
     
            <form>
                <label style={{ color: "black" }} htmlFor="book"><b>Enter a book title to begin!</b>   </label>
                <Input
                    value={props.search}
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder=" Alexander McQueen"
                    id="book"
                    
                    style={{
                        margin: '0 auto',
                    }}
                />
                <Button 
                    type="submit" 
                    onClick={props.handleFormSubmit} 
                >
                    Search
                </Button>
            </form>
        </AppBar>
        </>
    )
} 

export default SearchBar;