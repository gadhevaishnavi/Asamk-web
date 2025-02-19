import React from 'react';
import cardimg1 from '../assets/images/cardimg1.jpg';
import cardimg2 from '../assets/images/cardimg2.jpg';
import cardimg3 from '../assets/images/cardimg3.jpg';
import cardimg4 from '../assets/images/cardimg4.jpg';
import cardimg5 from '../assets/images/cardimg5.png';
import cardimg6 from '../assets/images/cardimg6.jpg';
import cardimg7 from '../assets/images/cardimg7.png';
import cardimg8 from '../assets/images/cardimg8.jpg';
import cardimg9 from '../assets/images/cardimg9.jpg';
import cardimg10 from '../assets/images/cardimg10.jpg';
import cardimg11 from '../assets/images/cardimg11.jpg';
import ProductCard from './ProductCard';
import Discoverproduct  from './Discoverproduct';


const Product = () => {
  const card = [
    {
      id: 1,
      heading: "HORSE MACKEREL",
      title: "Trachuru Trachurus",
      image: cardimg1,
    },
    {
      id: 2,
      heading: "CHUB MACKEREL",
      title: "Scomber Japonicus",
      image: cardimg2,
    },
    {
      id: 3,
      heading: "INDIAN MACKEREL",
      title: "Rastrelliger Kanagurta",
      image: cardimg3,
    },

    {
      id: 4,
      heading: "YELLOW TAIL SCAD",
      title: "Atule Mate",
      image: cardimg1,
    },

    {
      id: 5,
      heading: "SARDINE",
      title: "Sardinella Longiceps",
      image: cardimg4,
    },
    {
      id: 6,
      heading: "GREY MULLET",
      title: "Mugil Cephalus",
      image: cardimg5,
    },
    {
      id: 7,
      heading: "WHITE SHAD FISH (HILSA)",
      title: "Nematalosa Nasus",
      image: cardimg6,
    },
    {
      id: 8,
      heading: "CROAKER",
      title: "Argyrosomus Regius",
      image: cardimg7,
    },
    {
      id: 9,
      heading: "SKIPJACK TUNA",
      title: "Katsuwonus Pelamis",
      image: cardimg8,
    },
    {
      id: 10,
      heading: "CAT FISH",
      title: "Arius Spp",
      image: cardimg9,
    },
    {
      id: 11,
      heading: "BARRACUDA",
      title: "Sphyraena spp",
      image: cardimg10,
    },
    {
      id: 12,
      heading: "SPOTTED GRUNT",
      title: "Pomadasys Maculatus",
      image: cardimg11,
    },
  ];

  return (
    <>
      <h1>Our Core Products</h1>
      <div className="advantage">
        {card.map((val) => (
          <ProductCard
            key={val.id}
            heading={val.heading}
            title={val.title}
            image={val.image}
          />
        ))}
      </div>
      <Discoverproduct/>
    </>
  );
};

export default Product;