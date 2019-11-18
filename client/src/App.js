// Import React 
// =========================================================
  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 

// Import Components 
// =========================================================
  import Nav from "./components/Nav"
  import Footer from "./components/Footer"
  // import Wrapper from "./components/Wrapper"
  
// Import Pages
// =========================================================
  import SearchBooks from "./pages/SearchBooks"
  import SavedBooks from "./pages/SavedBooks"

// Import Css 
// =========================================================
  import './App.css';

 // App 
// =========================================================
  function App() {
    return (
      <Router>
        <div className="App">
          <Nav /> 
          {/* <Wrapper>  */}
            <Switch>
              <Route exact path="/" component={SearchBooks}/>
              <Route exact path="/favorites" component={SavedBooks}/>
            </Switch>
          {/* </Wrapper> */}
          <Footer/>
        </div>
      </Router>
    );
  }

  export default App;
