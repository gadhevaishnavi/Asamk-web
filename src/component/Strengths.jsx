import React from 'react';
import StrengthCard from './StrengthCard';
import '../assets/css/Strengths.css'
const Strengths = () => {
  const key = [
    {
      id: 1,
      heading: "Fishing Zone FAO51",
      text: "Best Seafood from Sultanate of Oman, caught in FAO51 zone.",
    },
    {
      id: 2,
      heading: "2 Hours Trucking",
      text: "Our products are transported to the factory within 2 hours.",
    },
    {
        id: 3,
        heading: "90 Minutes Freezing",
        text: "Processed and quality checked within 90 minutes of arrival.",
      },
      {
        id: 4,
        heading: "8 Hours Freezing",
        text: "Seafood is frozen within 8 hours of arrival at our factory.",
      },
      {
        id: 5,
        heading: "30 Minutes Packing",
        text: "Seafood is packed and stored within 30 minutes of processing.",
      },
  ];

  return (
    <>
   <h1>Our Key Strengths</h1>
    <div className="strengths">
      <div className="strength_card">
        {key.map((item) => (
          <StrengthCard 
            key={item.id} 
            heading={item.heading} 
            text={item.text} 
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Strengths;