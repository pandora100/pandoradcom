import React, { Fragment,useState,useEffect,useContext } from "react";
import Marquee from "react-smooth-marquee"
import pullup from '../assets/pullup.GIF';
import viewInfo from '../assets/view-info.GIF';
import folderSmall from '../assets/folderSmall.GIF';
import logogit from '../assets/logogit.PNG';
import './Reviews.css';
import {RemoteContext} from "../context/RemotosContext.js"; 
 const Reviews=()=>{
 const {estadisticas} = useContext(RemoteContext); 
 //console.log('!!!!!!!!!!!!!Reviews 00 RemoteContext:',RemoteContext);
 //console.log('!!!!!!!!!!!!!Reviews 01 {estadisticas}:',{estadisticas});	
 //console.log('!!!!!!!!!!!!!Reviews 02 Object.values(estadisticas):',Object.values(estadisticas));	
 const esta=Object.values(estadisticas);
const estagifs=esta.map((estadis)=>{
let estahuagsm=estadis.huagsm;
let estahuaumts=estadis.huaumts;
let estaflexent=estadis.flexent;
return 	[estahuagsm,estahuaumts,estaflexent];
 //console.log('!!!!!!!!!!!!!Reviews 03 estagifs:',estagifs);	
});

return (
<React.Fragment>	
<Marquee>

<div className="reviews__content__inner">
<div className="reviews__content__left_huagsm">
                
<div className="reviews__content__left__card__row__div">
<img
                  src={logogit}
                  alt=""
                 
                />Total HUA_GSM: {estagifs[0]}
</div>
</div>
<div className="reviews__content__left_huaumts">
<div className="reviews__content__left__card__row__div">
<img
                  src={logogit}
                  alt=""
                 
                />Total HUA_UMTS: {estagifs[1]}
</div> 
</div>
<div className="reviews__content__left_flexent">
<div className="reviews__content__left__card__row__div">
<img
                  src={logogit}
                  alt=""
                 
                />Total FLEXENT: {estagifs[2]}
</div> 
</div>    
</div>            
 </Marquee>
 </React.Fragment>
 );
	};

export default Reviews;