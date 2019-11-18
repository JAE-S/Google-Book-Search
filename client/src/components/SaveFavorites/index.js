import React, { Component } from 'react'; 
import { Button } from '@material-ui/core';

class SaveFavorites extends Component {
    
  
        state = {
          saved: false,
        };

    //  handlebtnclick = event => {
    //     event.preventDefault();
    //     this.SetState({ saved: true })
    //  } 

    render() {
        return (
        <Button
        // handlebtnclick= {this.state.saved}
        >Add to Favorites</Button>

        )
    }
}

export default SaveFavorites;