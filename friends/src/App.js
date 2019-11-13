import React from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Friends from "./components/Friends.js";

import './App.css';

function App() {
  const logoutFn = (e) => {
    e.preventDefault();
    localStorage.clear("token");
    return <Redirect to="/login" />
  }
  return (
    <div className="App">
      <nav>
        <Link to="/home">HOME</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/friends">FRIENDS</Link>
        <button onClick={logoutFn}>LOGOUT</button>
      </nav>

      <Route exact path="/login"></Route>
      <PrivateRoute exact path="/" component={Home}></PrivateRoute>
      <PrivateRoute path="/friends" component={Friends}></PrivateRoute>
    </div>
  );
}

export default App;
