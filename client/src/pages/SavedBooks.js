// Import React
// =========================================================
import React, { Component } from "react"; 

// Components
// =========================================================
    import Wrapper from "../components/Wrapper"
    import { Image, BookDetails} from "../components/SearchResults";
    import {Container, Table, TableBody, TableHead, TableRow, TableCell} from '@material-ui/core';
// Import API 
// =========================================================
    import API from "../utils/API"
    
// import { Tab } from "@material-ui/core";


class SavedBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
          books: [],
          search: "",
          message: "No books have been added to your favorites."
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

    render() {
    
        return (
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
                            {/* <SaveFavorites
                               handleSaveBtn= {this.handleSaveBtn.bind(this)}
                            /> */}
                        </TableRow>
                    ))}
                    </TableBody>
               </Table>
            </Container>
            </Wrapper>
        )
    }
}

    export default SavedBooks; 