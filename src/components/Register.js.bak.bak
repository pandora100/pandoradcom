//Register.js
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import '@babel/polyfill'; 
import { toast } from "react-toastify";
import './Register.css';
import folderSmall from '../assets/movilnet.GIF';
const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { email, password, name } = inputs;
   const onChange = e =>setInputs({ ...inputs, [e.target.name]: e.target.value });
   const onSubmitForm = async e=>{
    e.preventDefault();
    try {
      const body = { email, password, name };
       console.log('Register 1 body.name:',body.name);
       /**/
        const response =  await fetch(
        "http://localhost:5000/authentication/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();
      console.log('Register 2 parseRes:',parseRes);
       if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
         console.log('Register 3 localStorage.token:',localStorage.token);
          toast.success("Register Successfully");
         
        }else {
        setAuth(false);
        toast.error(parseRes);
      }
       
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

  return (
    <Fragment>

     <div className="register-box">
     <img src={folderSmall} className="avatar" alt="Avatar Image"/>
     <h1>Register</h1>
     <form onSubmit={onSubmitForm}>
      <label htmlFor="email">Email</label> 
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={e => onChange(e)}
          className="form-controlmy-3"
        />
          <label htmlFor="password">Password</label> 
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
         onChange={e => onChange(e)}
          className="form-controlmy-3"
        />
        <label htmlFor="password">Nombre</label> 
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
         onChange={e => onChange(e)}
          className="form-controlmy-3"
        />
        <button className="btn-btn-success-btn-block">Submit</button>
      </form>
       <br/>
      <Link to="/login" className="irALogin">Login</Link>
      </div>
    </Fragment>
  );
};

export default Register;
