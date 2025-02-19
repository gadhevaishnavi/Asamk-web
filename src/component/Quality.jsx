import React from 'react'
import img1 from '../assets/images/qualityimg1.png'
import img2 from '../assets/images/qualityimg2.jpg'
import img3 from '../assets/images/qualityimg3.png'
import '../assets/css/Quality.css'
const Quality = () => {
  const qualityData = [
    {
      id: 1,
      image: img1,
      para: "Seafood Quality",
      msg: "Sourced with care, delivered with excellence."
    },
    {
      id: 2,
      image: img2,
      para: "Frozen Freshness",
      msg: "Ensuring freshness from ocean to plate."
    },
    {
      id: 3,
      image: img3,
      para: "Quality Control",
      msg: "Stringent quality standards in every product."
    }
  ]

  return (
    <>
      <h1>Our Quality</h1>
      <p>Consumers today demand high-quality seafood year-round, and we ensure this at every step with sustainable methods aimed at a better tomorrow. ASMAK is extremely cautious about hygiene and the meticulous processing of marine products. Every item undergoes strict quality control, so our customers enjoy only the finest, wet.</p>

      <div className='image-data'>
        {qualityData.map((quality) => {
          return (
            <div key={quality.id} className="quality-item">
              <img src={quality.image} alt={quality.para} />
              <p>{quality.para}</p>
              <h4>{quality.msg}</h4>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Quality

