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
import SearchResults from "../components/SearchResults";

class SearchBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
          books: [],
          search: "",
        };
     }; 

    searchGoogle = query => {
        API.googleSearch(query)
        .then((res) => {
            let results = res.data.items
            const booksArray = results.map((obj) => {
                const { title, 
                        authors, 
                        description, 
                        previewLink, 
                        imageLinks } = obj.volumeInfo;
                const thumbnail = imageLinks ? imageLinks.thumbnail : 'unavailable';
                return { 
                    image: thumbnail,
                    title,
                    authors,
                    description,
                    link: previewLink, 
                };
            })
            this.setState({
                books: booksArray
            })
            console.log(this.state.books)
            console.log(this.state.books.length)

    })
}

    handleInputChange = event => {
        event.preventDefault(); 
        const value = event.target.value
        this.setState({ search: value})
        // this.setState({ search: [ value, value+value, value+value+value]})z
        // console.log(this.state.search);
        // this.searchGoogle(this.state.search); 
    }


    handleFormSubmit = event => {
        event.preventDefault(); 
       this.searchGoogle(this.state.search); 
    //    console.log(this.state.books)
    }

    render(){
        return (
            <Container> 
                <Container>
         
                    <SearchBar
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        search={this.state.search}
                    />
                  
              {/* <SearchResults>
                {this.state.books.map((book, i) => (
                    <SearchResults 
                         key={i}
                         id={book.id}
                         title={book.title}
                    />
                ))}
            </SearchResults> */}
                    <SearchResults books={this.state.books} />

                </Container>
                

            </Container>
        )
    }

}

export default SearchBooks
