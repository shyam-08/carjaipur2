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
import SearchBox from './component/SearchBox'
import Search from './pages/Search'
import Firebase from './config/Firebase';
import { initializeApp } from 'firebase/app';

// import SitemapComponent from './sitemap-builder'
// import { SitemapGenerator } from "react-router-sitemap";
// import routes from './routes'
// import SearchResult from './component/SearchResult'
function App() {
  // const sitemap = generator.generate();

  return (
   <>
{/* <Home/> */}

{/* <ContactUs/> */}
{/* <AboutUs/> */}
{/* <SellCar/> */}
{/* <CarDetail/> */}
{/* <SearchBox/> */}
{/* <SearchResult/> */}
{/* <SitemapGenerator sitemap={sitemap} /> */}
{/* <SitemapComponent/> */}
<BrowserRouter>
      
      <Routes>
        <Route path='/' exact       element={<Home/>} />
        
        <Route path='/aboutus' element={<AboutUs/>} />
      
        <Route path='/ContactUs' element={<ContactUs/>} />
        
        <Route path='/sell' element={<SellCar/>} />
        <Route path='/cardetail' element={<CarDetail/>} />
        <Route path='/search' element={<Search/>} />
  
    
      </Routes>
   </BrowserRouter>   
   </>
  )
}

export default App
