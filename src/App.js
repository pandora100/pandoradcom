import React, { Fragment, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
/////////////////
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { toast } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Register";
//import Dashboard from "./components/Dashboard";
import Bitacora from "./components/Bitacora.js";
import Header from "./components/Header";
import Home from "./components/Home";
import '@babel/polyfill'; 
import {ModalContext} from "./context/ModalesContext.js";
import {ModalProvider}  from "./context/ModalesContext.js";
import {RemoteContext} from "./context/RemotosContext.js";
import {RemoteProvider}  from "./context/RemotosContext.js";
///////////////////////////
import MapView from "./components/MapView.js";
toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 //console.log('App 0.1 ModalContext:',ModalContext);
 //console.log('App 0.6 ModalContext.Provider:',ModalContext.Provider);
 //console.log('App 1 ModalProvider:',ModalProvider);
 //console.log('App 00.1 RemoteContext:',RemoteContext);
 //console.log('App 00.6 RemoteContext.Provider:',RemoteContext.Provider);
 console.log('App 01 RemoteProvider:',RemoteProvider);
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://backendpandoragui.herokuapp.com/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  
   const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

   useEffect(() => {
    checkAuthenticated();
  }, []);

////////

  return (
    

    <React.Fragment>

     <Router>
    
    <Header/>
    
        <div className="container" >
         
          <Switch>
            <Route
              exact
              path="/login"
               render={props =>
     !isAuthenticated ? (<Login {...props}  setAuth={setAuth} />) : (<Redirect to="/Home" />)}
            />
            <Route
              exact
              path="/register"
              render={props =>
    !isAuthenticated ? (<Register {...props}  setAuth={setAuth} />) : (<Redirect to="/login" />)}  
            />
            <Route
              exact
              path="/home"
             render={props =>
   isAuthenticated ? (<Home {...props}  setAuth={setAuth} />) : (<Redirect to="/login" />)} 
            />
            <Route
              exact
              path="/"
             render={props =>
   isAuthenticated ? (<Home {...props}  setAuth={setAuth} />) : (<Redirect to="/login" />)} 
            />
            <Route
              exact
              path="/mapas"
             render={props =>
   isAuthenticated ? (<MapView {...props}  setAuth={setAuth} />) : (<Redirect to="/login" />)} 
            />
          </Switch>
          
        </div>
      
      </Router>
     
    </React.Fragment>
    

  );
}

export default App;

