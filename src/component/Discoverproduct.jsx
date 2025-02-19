import React from 'react'
import '../assets/css/Discoverproduct.css'
import img1 from '../assets/images/discoverimg1.jpg'
import img2 from '../assets/images/discoverimg2.jpg'
import img3 from '../assets/images/discoverimg3.jpg'
import img4 from '../assets/images/discoverimg4.jpg'
import img5 from '../assets/images/discoverimg5.jpg'
import img6 from '../assets/images/discoverimg6.jpg'
import img7 from '../assets/images/discoverimg7.jpg'
import img8 from '../assets/images/discoverimg8.jpg'
import img9 from '../assets/images/discoverimg9.jpg'
import img10 from '../assets/images/discoverimg10.jpg'
const Discoverproduct = () => {
  const productData=[
    {
      id:1,
      image:img1,
      title:"Yellow Fin Tuna",
      para:"(Thunnus Albacares)"
    },
    {
      id:2,
      image:img2,
      title:"kawa kawa Tuna",
      para:"(Euthynnus Affinis)"
    },
    {
      id:3,
      image:img3,
      title:"Bonito Tuna",
      para:"(Sarda Orientalis)"
    },
    {
      id:4,
      image:img4,
      title:"Emperor",
      para:"(Lethrinus Spp)"
    },
    {
      id:5,
      image:img5,
      title:"Arabian Pandora",
      para:"(Pagellus Affinis)"
    },
    {
      id:6,
      image:img6,
      title:"Red Seabream",
      para:"(Pagrus Pagrus)"
    },
    {
      id:7,
      image:img7,
      title:"Trevally",
      para:"(Caranx Spp)"
    },
    {
      id:8,
      image:img8,
      title:"Koffer",
      para:"(Evynnis Ehrenberji)"
    },
    {
      id:9,
      image:img9,
      title:"Threadfin Bream",
      para:"(Nemipterus Japonicus)"
    },
    {
      id:10,
      image:img10,
      title:"Blue Line Snapper",
      para:"(Lujanus Coerulineatus)"
    }
  ]
  return (
    <>
    <h1>Discover Our Products</h1>
    <div className='discover'>
        {productData.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>{product.para}</p>
            
          </div>
        ))}
      </div>
  
    </>
  )
}

export default Discoverproduct
