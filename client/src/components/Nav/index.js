
// Import React 
// =========================================================
   import React from 'react';
   import { withRouter } from "react-router-dom";
// Logo
// =========================================================
   import GoogleIt from "./google.svg";
//  Material UI
// =========================================================
   import { AppBar, Tabs, Tab } from '@material-ui/core/';
    //   import FavoriteIcon from '@material-ui/icons/Favorite';
//  Css
// =========================================================
  import "./style.css"

const nav = {
    padding: 5,
    height: 222,
    width: "100%",
    backgroundColor: "black",
    }

class NavTabs extends React.Component {

    state = { 
        value: "/",
    }
 
  componentDidMount() {
    window.onpopstate = ()=> {
      this.setState({
        value: this.props.history.location.pathname
      });
  }
}

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
       <>
   
        <AppBar style={ nav } className={classes} color="default">
            <img alt="google-it" src={GoogleIt}/>
          <Tabs
            style={{ margin: "0 auto", paddingTop: 18} } 
            value={value}
            onChange={this.handleChange}
            indicatorColor= "primary"
            textColor="primary"
          >
            <Tab label="Home" value = "/" />
            <Tab label="favorites" value = "/favorites"/>
          </Tabs>
        </AppBar>
        {value === "/"}
        {value === "/favorites"}

    </>
   
    );
  }
}

export default withRouter(NavTabs);
     