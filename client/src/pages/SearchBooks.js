// Import Css 
// =========================================================
    import React, {Component} from "react"; 

// Import API 
// =========================================================
    import API from "../utils/API"

// Import Components
// =========================================================
    import {Container, Table, TableBody, TableHead, TableRow, TableCell} from '@material-ui/core';
    import SearchBar from "../components/SearchBar";
    import { Image, BookDetails, SaveFavorites } from "../components/SearchResults";

class SearchBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
          books: [],
          search: "",
          message: "The book collection is empty. Please search for a book to begin!"
        };
     }; 

    handleInputChange = event => {
        event.preventDefault(); 
        const value = event.target.value
        this.setState({ search: value})
        // this.setState({ search: [ value, value+value, value+value+value]})z
        // console.log(this.state.search);
    }

    handleFormSubmit = event => {
        event.preventDefault(); 
        this.setState({ message: ""})
        this.searchGoogle(this.state.search); 
    //    console.log(this.state.books)
    }

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
            // console.log(this.state.books)
    })
    }

    handleSaveBtn = event => { 
        event.preventDefault(); 
        if (this.state.books){
            console.log("This button was clicked")
        }  
    }

    render(){
        return (
            <>
            <Container style={{ marginTop: 250}}>
                <SearchBar
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    search={this.state.search}
                />
            </Container>
            <Container style={{marginTop: 270}}>
            
                <Table> 
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={{borderBottom: "none"}}>
                            {this.state.message}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.books.map((book, i) => (
                        <TableRow key={i}>
                            <Image 
                                image={book.image} />
                            <BookDetails
                                title={book.title}
                                description={book.description}
                                link={book.link}
                            />
                            <SaveFavorites
                               handleSaveBtn= {this.handleSaveBtn.bind(this)}
                            />
                        </TableRow>
                    ))}
                    </TableBody>
               </Table>
            </Container>
           </>
        )
    }

}

export default SearchBooks
