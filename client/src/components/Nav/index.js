

import React from "react"; 
import {AppBar} from '@material-ui/core';

function Nav(props) {
    
    const nav = {
        padding: 20
    }
    
    return (
        <AppBar style={ nav }>
            Welcom to Google Book Search 
        </AppBar>
    )
} 

export default Nav;