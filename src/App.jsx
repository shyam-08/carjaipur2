import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import SellCar from './pages/SellCar'
import {BrowserRouter,
  Routes,

  Link,
 Route
} from 'react-router-dom';
import CarDetail from './pages/CarDetail'
// import SearchBox from './component/SearchBox'
function App() {
  

  return (
   <>
{/* <Home/> */}

{/* <ContactUs/> */}
{/* <AboutUs/> */}
{/* <SellCar/> */}
{/* <CarDetail/> */}
{/* <SearchBox/> */}
<BrowserRouter>
      
      <Routes>
        <Route path='/' exact       element={<Home/>} />
        
        <Route path='/aboutus' element={<AboutUs/>} />
      
        <Route path='/ContactUs' element={<ContactUs/>} />
        
        <Route path='/sell' element={<SellCar/>} />
        <Route path='/cardetail' element={<CarDetail/>} />
  
    
      </Routes>
   </BrowserRouter>   
   </>
  )
}

export default App
