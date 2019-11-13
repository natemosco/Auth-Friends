import React from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Friends from "./components/Friends.js";
import Login from "./components/Login";
import './App.css';
import { login } from './actions';

function App() {
  const logoutFn = (e) => {
    e.preventDefault();
    sessionStorage.clear("token");
    return <Redirect to="/login" />
  }

  return (
    <div className="App">
      <nav>
        <Link to="/login">LOGIN</Link>
        <Link to="/">HOME</Link>
        <Link to="/friends">FRIENDS</Link>
        <button onClick={logoutFn}>LOGOUT</button>
      </nav>

      <Route exact path="/login" component={Login}></Route>
      <PrivateRoute exact path="/" component={Home}></PrivateRoute>
      <PrivateRoute path="/friends" component={Friends}></PrivateRoute>
    </div>
  );
}

export default App;
