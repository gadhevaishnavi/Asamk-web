import React from 'react'
import img1 from '../assets/images/aboutImg1.jpg'
import img2 from '../assets/images/aboutImg2.jpg'
import img3 from '../assets/images/aboutImg3.png'
import img4 from '../assets/images/aboutImg4.png'
import '../assets/css/AboutUs.css'

const AboutUs = () => {
  const aboutData = [
    {
      id: 1,
      image: img1
    },
    {
      id: 2,
      image: img2
    },
    {
      id: 3,
      image: img3
    },
    {
      id: 4,
      image: img4
    }
  ]

  return (
    <>
      <h1 className='h1'>Asmak Muscat Int'l LLC</h1>
      <p className='p'>
        Established in 2018, Asmak Muscat Int'l LLC is led by a founder with over 22 years of experience in the seafood industry. Operating from the pristine waters of Oman in the Indian Ocean (FAO51), we specialize in sourcing high-quality seafood products while maintaining sustainable and eco-friendly practices.
        <br />
        Our commitment extends beyond sourcing premium quality fish. We aim to develop long-term relationships with our clients across Oman, UAE, Qatar, Bahrain, Iraq, Egypt, India, Bangladesh, Thailand, Malaysia, Ghana, Benin, Togo, Cote d'Ivoire, Senegal, Mozambique, Haiti, Cameroon, Guinea, Congo, Liberia, South Africa and numerous other countries by supplying high-quality products tailored to their needs.
        <br />
        With a wide range of seafood, including pelagic fish, we cater to global demands while ensuring our products meet the highest quality standards.
      </p>
      <div className='image-container'>
        {aboutData.map((about) => {
          return (
            <div key={about.id}>
              <img src={about.image} alt="" />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AboutUs

