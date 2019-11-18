

import React from "react"; 
import {AppBar} from '@material-ui/core';
import GoogleIt from "./google.svg";

function Nav() {
    
    const nav = {
        padding: 20,
        height: 200,
        backgroundColor: "black", 
    }
    
    return (
        <AppBar style={ nav }>
        <img alt="google-it" src={GoogleIt}/>
        </AppBar>
    )
} 

export default Nav;