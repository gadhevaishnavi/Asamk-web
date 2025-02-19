import React from 'react'
import AddImg1 from "../assets/images/AddImg1.jpeg";
import AddImg2 from "../assets/images/AddImg2.jpg";
import AddImg3 from "../assets/images/AddImg3.jpg";
import AddImg4 from "../assets/images/AddImg4.jpeg";
import Advantage from "./Advantage";
import '../assets/css/Advantage.css'

const CardAdv = () => {
     const our = [
        {
          id: 1,
          title: "Responsibly Sourced",
          image: AddImg1,
          description:
            "Responsibly-sourced seafood is the key to the modern, safe and profitable seafood industry.",
        },
        {
          id: 2,
          title: "Environment",
          image: AddImg2,
          description:
            "The seafood industry has a concern over climate impact, and takes responsibility in any case.",
        },
        {
          id: 3,
          title: "Staff",
          image: AddImg3,
          description:
            "Our experts work hard to maintain the quality seafood for our dear customers exclusively.",
        },
        {
          id: 4,
          title: "Marketplace",
          image: AddImg4,
          description:
            "Your business becomes beneficial by providing the customers with the best.",
        },
      ];
  return (
    <>
    <h1>Our Advantages</h1>
        <div className="advantage">
               {our.map((val) => (
              <Advantage
              key={val.id}
              title={val.title}
              image={val.image}
              description={val.description}
            />
          ))}
          </div>
        </>
    
  )
}

export default CardAdv;