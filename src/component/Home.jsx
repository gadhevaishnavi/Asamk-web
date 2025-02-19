import React from 'react'
import slider1 from '../assets/images/slider1.jpeg'
import slider2 from '../assets/images/slider2.jpeg'
import slider3 from '../assets/images/slider3.jpeg'
import Carousel from 'react-bootstrap/Carousel';
import '../assets/css/Home.css'
import Card from './Card';
import fish1 from '../assets/images/fish1.jpeg'
import fish2 from '../assets/images/fish2.jpeg'
import fish3 from '../assets/images/fish3.jpeg'
import fish4 from '../assets/images/fish4.jpeg'
import CardAdv from './CardAdv';
import Strengths from './Strengths';
import Product from './Product';
import Quality from './Quality';
import Globalpartner from './Globalpartner';
import ContactUs from './ContactUs';
import Location from './Location';
import Footer from './Footer';
import FloatingIcon from './FloationgIcon';
import CountdownSection from './CountdownSection';

const Home = () => {
    const sliderData = [
      {
        id: 1,
        image: slider1,
        title: "Welcome To Asmak Muscat Int'l.",
        description: "",
      },
      {
        id: 2,
        image: slider2,
        title: "Welcome To Asmak Muscat Int'l.",
        description: `We specialize in processing and exporting, proudly delivering
              top-quality products to wholesale customers worldwide.`,
      },
      {
        id: 3,
        image: slider3,
        title: "Building Long-Term Relationships",
        description: `Oman, UAE, Qatar, Bahrain, Iraq, Egypt, India, Bangladesh, Thailand,
              Malaysia, Ghana, Benin, Togo, Cote d'Ivoire, Senegal, Mozambique,
              Haiti, Cameroon, Guinea, Congo, Liberia, South Africa and many more.`,
      },
    ];

  const cardData=[
    {
      id:1,
      image:fish1,
      title:"Leader"
    },
    {
      id:2,
      image:fish2,
      title:"Partner"
    },
    {
      id:3,
      image:fish3,
      title:"Product"
    },
    {
      id:4,
      image:fish4,
      title:"Quality"
    }
  ]
  
  return (
    <>
    <Carousel
        className="home_slider"
        interval={3000}
        controls={false}
        indicators={false}
        pause={false}
      >
        {sliderData.map((data) => (
          <Carousel.Item key={data.id}>
            <img src={data.image} alt={`Slide ${data.id}`} />
            <Carousel.Caption className="slider_text">
              <h3>{data.title}</h3>
              {data.description && <p>{data.description}</p>}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
</Carousel>

        <div className="card-grid">
        {cardData.map((card) => (
          <Card key={card.id} title={card.title} image={card.image} />
        ))}
      </div>

     <div className="seafood">
        <h1 className="heading">Seafood Excellence Since Inception</h1>
        <p>
          Asmak Muscat Int'l has been a cornerstone in the seafood industry,
          committed to delivering the highest quality seafood sourced directly
          from Oman’s pristine waters. Our journey began with a vision to
          provide frozen, and expertly handled seafood to global markets,
          adhering to sustainability and quality at every step.
        </p>
        <img className="seafood-img" src={fish4} alt="" />
      </div>

      <CardAdv/>
      <Strengths/>
      <CountdownSection/>
      <Product/>
      <Quality/>
      <Globalpartner/>
      <Location/>
      {/* <ContactUs/> */}
      {/* <Footer/> */}
      <FloatingIcon/>
</>
  )
}

export default Home
