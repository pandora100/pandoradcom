//Home.js
import React, { Fragment, useState, useEffect} from "react";
import { Link, Redirect } from "react-router-dom";
import BannersDCOR3 from '../assets/BannersDCOR3.GIF';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "./Home.css";
import logogit from '../assets/logogit.GIF';
import Marquee from "react-smooth-marquee";
const Home = ({setAuth}) => {
  /////
 const [Loading, setLoading] = useState(true) 
 const [name, setName] = useState([]);
 const [dateTime, setDateTime] = useState(new Date());

const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
    
});

useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
}, []);

 const getProfile =  () => {
 //const getProfile = async () => {   
     fetch("http://backendpandoragui.herokuapp.com/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      })
            .then((res) => res.json())
            .then(response=>{
             setLoading(true) 
              console.log('getProfile 1 response:',response)
             const {user_name=[]}=response;
             console.log('getProfile 2 user_name:',user_name)
              //const gifs=user_name.map(gif=>{
                      // const {user_name} = gif;
                      // console.log('getProfile 4 ,gif:',gif)     

                     //  return user_name
                      // })
             // console.log('getProfile 5 [...gifs]:',[...gifs])                          
             setName([user_name])
             if (user_name) {
            localStorage.setItem("nombre", user_name);
            //user_name_list.length.concat(user_name)
            //localStorage.setItem("conectados", user_name_list.length);
            // />Usuarios conectados:{localStorage.getItem("conectados")} 
           }
           console.log('getProfile 3 nombre:', localStorage.getItem("nombre"))
             setLoading(false)
                })
       .catch(error=>{
       console.log('3 App error:', error); 
       })
    };

   
        /*
    try {
     const res = await fetch("http://backendpandoragui.herokuapp.com/dashboard/", {
      //  const res = await fetch("http://localhost:5000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });
      setLoading(true);  
      const parseData = await res.json();
      setName([...parseData]);
      console.log('MapView 1 parseRes:',parseData);
      console.log('MapView 2 name:',name);  
      console.log('MapView 3 dateTime:',dateTime); 
      setLoading(false);  
    } catch (err) {
      console.error(err.message);
       toast.error(err.message);
    }
     */
  

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("nombre");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
/////
  {Loading && <div>Loading...</div>}
  
  return (
    <Fragment>
    <div className="tmasafuerax">
            
        <img className="BannersDCOR3x" src={BannersDCOR3} alt="BannersDCOR3" />
 <div className="container__content__left__card__row__div">     
       <Marquee>

<div className="reviews__content__inner">
<div className="reviews__content__left_huagsm">
                
<div className="reviews__content__left__card__row__div">
<img
                  src={logogit}
                  alt=""
                 
                />Usuarios conectados 
 <br/> 

<img
                  src={logogit}
                  alt=""
                 
                />Monitoreo de COMS                                             
</div>
</div>


</div>
 </Marquee>
</div>




      <h2 className="SGITextox">{`${name} ${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}` }</h2>  
     
  
    <h2 className="SGITextox">Latitud: {state.latitude}</h2>
    <h2 className="SGITextox">longitud: {state.longitude}</h2>
        
         
         {localStorage.getItem("nombre")==="mvcorirs" && 
         
          <Link className="MOVILNETinputButtonx"
        to={{
          pathname: "/mapas",
          state,
        }}
      >
        Mapas
        </Link> 
        
         }

         <button className="MOVILNETinputButtonx" onClick={logout}>Logout
         </button>
         
     
     </div>
    </Fragment>
  );
};

export default Home;