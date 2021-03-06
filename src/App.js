import React from 'react';
import './App.css';
import {Router} from '@reach/router'; //allows us to route to pages

//Views
import SearchBar from "./views/SearchBar";

//Components
import People from "./components/People";
import Planets from "./components/Planets";
import Error from "./components/Error";


function App() {
  return (
    <div className="App">

      <SearchBar/>
      <Router>
        
        <People path='/people/:id'/> 
        <Planets path='/planets/:id'/>
        <Error path="/error" />

      </Router>

    </div>
  );
}

export default App;
