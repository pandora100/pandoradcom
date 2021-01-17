//Login.js
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import '@babel/polyfill'; 
import { toast } from "react-toastify";
import './Login.css';
import folderSmall from '../assets/movilnet.GIF';
const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
        console.log('Login 1 body:',body);
      const response = await fetch(
        "http://localhost:5000/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();
      console.log('Login 2 parseRes:',parseRes);
      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
         console.log('Login 3 localStorage.token:',localStorage.token);
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
       toast.error(err.message);
    }
  };
   // <button onClick={()=>setAuth(true)}>Manejo estado desde el login y me Autentico</button>
  return (
    <Fragment>
      
       <div className="login-box">
       <img src={folderSmall} className="avatar" alt="Avatar Image"/>
       

       <h1>Login</h1>
       
         <form onSubmit={onSubmitForm}>
        <label htmlFor="email">Email</label> 
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          className="form-controlmy-3"
        />
         <label htmlFor="password">Password</label> 
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          className="form-controlmy-3"
        />
        <button className="btn-btn-success-btn-block">Submit</button>
      </form>
      <br/>
      <Link to="/register" className="irARegistro">Register</Link>
       </div>
    </Fragment>
  );
};

export default Login;

