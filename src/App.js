import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route path="/login"> <Login/> </Route>
      <Route path="/register"> <Register/> </Route>
        

    <div className="container center">
    <Link to="/"> 
    <button type="button" className=" btn btn-large red ">Home</button>
    </Link>
    <Link to="/login"> 
    <button type="button" className=" btn btn-large orange">Login</button>
    </Link>
    <Link to="/register"> 
    <button type="button" className=" btn  btn-large ">Register</button>
    </Link>
    </div>
    </BrowserRouter> 
    </div>
  );
}

export default App;
