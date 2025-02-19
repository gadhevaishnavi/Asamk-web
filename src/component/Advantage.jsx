import React from 'react'

const Advantage = (props) => {
  return (
    
 <div className='advcontain'>
     <img src={props.image} alt="" />
     <h2>{props.title}</h2>
     <p>{props.description}</p>
</div>
    
  )
}

export default Advantage