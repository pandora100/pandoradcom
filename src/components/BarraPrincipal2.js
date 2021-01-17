//pandoraHeader1.js
import React, { Fragment, useState } from "react";

import './BarraPrincipal2.css'
const BarraPrincipal2 = ({titulo}) => {
console.log('BarraPrincipal2....');  
  return (
    <Fragment>
     <section className="com__toolbar">
        <div className="com__options">
        {titulo}
        </div>
       
      </section>
    </Fragment>
  );
};

export default BarraPrincipal2;