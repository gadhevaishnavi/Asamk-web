import React from 'react'
import '../assets/css/Strengths.css'


const StrengthCard = (props) => {
  return (
    <div className='Strenth_Card'>
       
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default StrengthCard