// Import Css 
// =========================================================
    import React, {Component} from "react"; 

// Import API 
// =========================================================
    import API from "../utils/API"

// Import Components
// =========================================================
import {Container} from '@material-ui/core';
import SearchBar from "../components/SearchBar";

class SearchBooks extends Component {

    state = {
        search: "",
        books: [],
        results: [],
        error: ""
    }; 

    handleInputChange = event => {
        let value = event.target.value
        this.setState({ search: [ value, value+value, value+value+value]})
    }

    handleFormSubmit = event => {
        event.preventDefault(); 
        API.googleSearch(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message})); 
    }

    render(){
        return (
            <Container> 
                <Container>
         
                    <SearchBar
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        books={this.state.books}
                    />
                   
                </Container>
                

            </Container>
        )
    }

}

export default SearchBooks
