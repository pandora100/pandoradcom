//DashboardOriginal.js
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import '@babel/polyfill';
import './Dashboard.css'; 


const DashboardOriginal = ({setAuth}) => {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboardoriginal", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_name);
      //console.log('DashboardOriginal 1 parseRes:',parseData); 
      //console.log('DashboardOriginal 2 name:',name); 
      //console.log('DashboardOriginal 3 localStorage.token:',localStorage.token);  
      //console.log('DashboardOriginal 4 setAuth:',setAuth);
       
    } catch (err) {
      console.error(err.message);
       toast.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
// 
  return (
    <div className="Dashboard-box">Dashboard Original 2
       <button onClick={e => logout(e)} className="btn-btn-primary">
        Logout
      </button>
      <h5>Usuario: {name} conectado el {`${dateTime.toLocaleDateString()} a las ${dateTime.toLocaleTimeString()}`}</h5>

      </div>
  );
};

export default DashboardOriginal;

