import React, { Fragment } from "react";
import Marquee from "react-smooth-marquee"
import pullup from '../assets/pullup.GIF';
import viewInfo from '../assets/view-info.GIF';
import folderSmall from '../assets/folderSmall.GIF';
import logogit from '../assets/logogit.PNG';
import './Reviews2.css'; 
 const Reviews2=()=>(
  
<React.Fragment>	
<Marquee>

<div className="reviews__content__inner">
<div className="reviews__content__left_huagsm">
                
<div className="reviews__content__left__card__row__div">
<img
                  src={logogit}
                  alt=""
                 
                />Orq HUA_GSM: 256
 <br/> 
  <img
                  src={logogit}
                  alt=""
                 
                />Pand HUA_GSM: 256 
<br/> 
<img
                  src={logogit}
                  alt=""
                 
                />Dry HUA_GSM: 256
<br/> 
                 
<img
                  src={logogit}
                  alt=""
                 
                />Wash HUA_GSM: 256                                             
</div>
</div>
<div className="reviews__content__left_huaumts">
<div className="reviews__content__left__card__row__div">
<img
                  src={logogit}
                  alt=""
                 
                />Orq HUA_UMTS: 220
<br/> 
                 
<img
                  src={logogit}
                  alt=""
                 
                />Pand HUA_UMTS: 220  
<br/> 
<img
                  src={logogit}
                  alt=""
                 
                />Dry HUA_UMTS: 220
<br/> 
                 
<img
                  src={logogit}
                  alt=""
                 
                />Wash HUA_UMTS: 220                  
</div> 
</div>
<div className="reviews__content__left_flexent">
<div className="reviews__content__left__card__row__div">
<img
                  src={logogit}
                  alt=""
                 
                />Orq FLEXENT: 125
<br/> 
                 
<img
                  src={logogit}
                  alt=""
                 
                />Pand FLEXENT: 125  
<br/> 
<img
                  src={logogit}
                  alt=""
                 
                />Dry FLEXENT: 125
<br/> 
                 
<img
                  src={logogit}
                  alt=""
                 
                />Wash FLEXENT: 125                  
</div> 
</div>   
</div>            
 </Marquee>
 </React.Fragment>
	);

export default Reviews2;