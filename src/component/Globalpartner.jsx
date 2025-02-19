import React from 'react'
import GlobalCard from './GlobalCard'
import img1 from '../assets/images/globalimg1.png'
import img2 from '../assets/images/globalimg2.png'
import img3 from '../assets/images/globalimg3.png'
import img4 from '../assets/images/globalimg4.jpg'
import img5 from '../assets/images/globalimg5.png'
import img6 from '../assets/images/globalimg6.png'
import img7 from '../assets/images/globalimg7.png'
import img8 from '../assets/images/globalimg8.png'
import img9 from '../assets/images/globalimg9.png'
import img10 from '../assets/images/globalimg10.png'
import img11 from '../assets/images/globalimg11.png'
import img12 from '../assets/images/globalimg12.png'
import img13 from '../assets/images/globalimg13.png'
import img14 from '../assets/images/globalimg14.webp'
import img15 from '../assets/images/globalimg15.png'
import img16 from '../assets/images/globalimg16.png'
import img17 from '../assets/images/globalimg17.png'
import img18 from '../assets/images/globalimg18.png'
import img19 from '../assets/images/globalimg19.png'
import img20 from '../assets/images/globalimg20.png'
import img21 from '../assets/images/globalimg21.png'
import img22 from '../assets/images/globalimg22.png'
const Globalpartner = () => {
  const Global = [
    { id: 1, heading: 'Oman', image: img1},
    { id: 2, heading: 'UAE', image: img2 },
    { id: 3, heading: 'Qatar', image: img3 },
    { id: 4, heading: 'Bahrain', image: img4 },
    { id: 5, heading: 'Iraq', image: img5 },
    { id: 6, heading: 'Egypt', image: img6 },
    { id: 7, heading: 'India', image: img7 },
    { id: 8, heading: 'Bangladesh', image: img8 },
    { id: 9, heading: 'Thailand', image: img9 },
    { id: 10, heading: 'Malaysia', image: img10 },
    { id: 11, heading: 'Ghana', image: img11 },
    { id: 12, heading: 'Benin', image: img12 },
    { id: 13, heading: 'Togo', image: img13 },
    { id: 14, heading: 'Cote Ivory', image: img14 },
    { id: 15, heading: 'Senegal', image: img15 },
    { id: 16, heading: 'Mozambique', image: img16 },
    { id: 17, heading: 'Haiti', image: img17 },
    { id: 18, heading: 'Cameroon', image: img18 },
    { id: 19, heading: 'Guinea', image: img19 },
    { id: 20, heading: 'Congo', image: img20 },
    { id: 21, heading: 'Liberia', image: img21 },
    { id: 22, heading: 'South Africa', image: img22 },
  ];
  

  return (
    <>
    <h1 className='our_global'>Our Global Partners</h1>
    <div className="global-cards">
      {Global.map((val) => (
        <GlobalCard key={val.id} heading={val.heading} image={val.image} />
      ))}
    </div>
    </>
  );
};

export default Globalpartner
