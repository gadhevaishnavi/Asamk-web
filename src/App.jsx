import { Route, Routes } from "react-router-dom"
import Navpage from "./pages/Navpage"
import Home from './component/Home'
import AboutUs from './component/AboutUs'
import Product from './component/Product'
import Location from './component/Location'
import ContactUs from './component/ContactUs'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional for Bootstrap's JavaScript features
import Footer from "./component/Footer"


function App() {
  
  return (
    <>

    <Navpage/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutus" element={<AboutUs/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/location" element={<Location/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>

    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
