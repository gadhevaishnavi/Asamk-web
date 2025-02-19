import React from 'react';
import '../assets/css/ProductCard.css'

const ProductCard = (props) => {
  return (
    <div className='products_card'>
      <img src={props.image} alt={props.heading} />
      <h4>{props.heading}</h4>
      <p>{props.title}</p>
      <button>View Details</button>
    </div>
  );
};

export default ProductCard;
