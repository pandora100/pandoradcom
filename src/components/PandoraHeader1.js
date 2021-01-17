//pandoraHeader1.js
import React, { Fragment, useState } from "react";
import logo1 from '../assets/custom_logo/logo1.PNG' ;
import logo2 from '../assets/custom_logo/logo2.PNG' ;
import movilnettest1 from '../assets/custom_logo/movilnettest1.PNG' ;
import './PandoraHeader1.css'
const PandoraHeader1 = () => {
  /*
*/
console.log('PandoraHeader1...');

  return (
    <Fragment>
    
     <div className='PandoraHeader1_table'>
      <table style={{
        width:"100%",
        cellpadding:"0px",
        cellspacing:"0px",        
        padding:"0px", 
        margin:"0px",       
        height: "100%",
    }}>
    <tbody>
    <tr>
        <td style={{width:"10%",}}>
         <img src={logo1} />
     </td>
     <td className="header_table" style={{minWidth:"200px",
                   cellpadding:"0px",
                    cellspacing:"0px",
                    padding:"0px",
                    margin:"0px", 
             }}> <img src={logo2} />
     </td>
     <td className="header_table" style={{minWidth:"200px",
                   cellpadding:"0px",
                    cellspacing:"0px",
                    padding:"0px",
                    margin:"0px", 
             }}> <img src={movilnettest1} />
     </td>
    

     </tr>
     </tbody>
     </table>
    </div>
    </Fragment>
  );
};

export default PandoraHeader1;