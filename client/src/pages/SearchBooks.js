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
    import Wrapper from "../components/Wrapper"
    
class SearchBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
          books: [],
          search: "",
          message: "The book collection is empty. Please search for a book to begin!"
        };
     }; 

    componentDidMount() {
    this.loadBooks();
    }
    
    loadBooks = () => {
    API.getBooks()
        .then(res => this.setState({ books: res.data }))
        .catch(err => console.log(err));
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
       const image =  this.state.books[0].image;
       const title = this.state.books[0].title;
       const authors = this.state.books[0].authors;
       const link = this.state.books[0].link;
      
        if (this.state.books) {
            API.saveBook({
                image: image,
                title: title, 
                authors: authors[0],
                link: link
            })
              .then(res => this.loadBooks())
              .catch(err => console.log(err));
            // console.log(this.state.books[0].title)
          }
          
    }

    render(){
        return (
            <>
            <Container >
                <SearchBar
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    search={this.state.search} 
                />
            </Container>
            <Wrapper>
            <Container style={{marginTop: 290}}>
            
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
            </Wrapper>
           </>
        )
    }

}

export default SearchBooks
