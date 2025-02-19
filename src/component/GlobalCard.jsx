import React from 'react';
import '../assets/css/Globalpartner.css'

const GlobalCard = (props) => {
  return (
    <>
    {/* <h1>Our Global Partners</h1> */}
    <div className="global-card">
        
      <img src={props.image} alt={props.heading} />
      <h4>{props.heading}</h4>
    </div>
    </>
  );
};

export default GlobalCard;