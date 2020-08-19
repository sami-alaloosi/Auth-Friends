import React from 'react';
import {Link, Route} from "react-router-dom"


import './App.css';
import Form from "./components/Form"
import PrivateRoute from "./components/PrivateRoute"
import Friends from "./components/Friends"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Link to="/login">Login</Link>
      <Link to="/protected">Protected Route</Link>

      <Route path="/login" component={Form} />
      <PrivateRoute exact path="/protected" component={Friends} />
    
      </header>
    </div>
  );
}

export default App;
