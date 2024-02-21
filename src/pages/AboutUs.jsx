import React from 'react'
// import { motion } from "framer-motion"
import '/src/assets/style.css'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import {Helmet} from "react-helmet";
// import Image from 'next/image';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { styled } from '@mui/system';
// import { Modal, Button, TextField, Grid, Paper } from '@mui/material';
// import { Typography } from '@mui/material';

export default function AboutUs() {

  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>About US</title>
                <meta name="description" content="Car Jaipur started in 1998 as a benchmark model for the Pre-Used, or how we prefer to see it as, Pre-Loved Car Brand. The mission was simple, direct and drove effect - delivering a new dimension of luxury while standardising & raising platforms for the used car market in Jaipur"/>
                <link rel="canonical" href="https://carjaipur/aboutus" />
                <link rel="sitemap" type="application/xml" title="AboutUs" href="/aboutus" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-V5T73DSZCM"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-V5T73DSZCM');
                    `}
                </script>
            </Helmet>
        <Navbar/>
      <div className="section-1  head-text" style={{ boxSizing: "border-box" }}>
      
        <div className='container-fluid aboutUS-bgimage'>
{/*          
          <Image
            className='img-fluid'
            src="/img\pexels.jpeg"
            width={1400}
            height={500}
            alt="pexels.jpeg" /> */}
        </div>

        <div className='text-on-image' style={{ paddingBottom: "20%" }}>
          <p><strong>ABOUT THE CAR JAIPUR</strong></p>
          <h2>COMPANY</h2>

        </div>
      </div>
      <div className='Section-2 col-sm-12' style={{ backgroundColor: '#F2F2F2', padding: '40px 80px', boxSizing: "border-box" }}>
        <h4 style={{ padding: '20px 10px 10px' }}>Car Jaipur, a pre-owned luxury car dealer deals with 24 brands</h4>
        <p style={{ padding: '10px' }}>
        Car Jaipur started in 1998 as a benchmark model for the Pre-Used, or how we prefer to see it as, Pre-Loved Car Brand. The mission was simple, direct and drove effect - delivering a new dimension of luxury while standardising & raising platforms for the used car market in Jaipur.

          Since our inception our primary aim has been our passion for delivering excellence which became our mission. YOU (our patrons) are the driving force behind our company and making sure you get the best is what we thrive on.

        </p>
        <h4 style={{ padding: '10px' }}>
          MISSION
        </h4>
        <p style={{ padding: '10px' }}>The journey began in 1998 when Car Jaipur was founded in jaipur, India. Since then our mission has been to provide quality exotic cars with highly personalized care at a competitive price. Creating a new benchmark for excellence in every aspect of our business.</p>
      </div>
      <div className='Section-3' style={{ boxSizing: "border-box" }}>
  <div className="container">
    <h2 style={{ padding: '20px 0 0' }}>OUR USPS</h2>
    <ul className='row' style={{ listStyle: "none", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

      <li className='col-md-6 col-sm-12' style={{
        alignItems: 'center',
        padding: '10px 0 60px'
      }}>
        <img src="\img\customer3.jpg" style={{ alignItems: 'center', padding: '5px 40px 10px', height: '90%', width: '90%' }} />
        <h3 style={{ width: '70%', textAlign: 'center' }}>4600+ Happy Customers</h3>
        <p style={{ width: '70%', textAlign: 'center' }}>At CarJaipur, we offer you comparisons across various parameters thereby helping you choose the ideal one.</p>
      </li>

      <li className='col-md-6 col-sm-12' style={{
        alignItems: 'center',
        padding: '10px 0 60px'
      }}>
        <img src="\img\customer2.jpg" style={{ alignItems: 'center', padding: '5px 40px 10px', height: '90%', width: '90%' }} />
        <h3 style={{ width: '70%', textAlign: 'center' }}>Jaipur's Biggest Studio</h3>
        <p style={{ width: '80%', textAlign: 'center' }}>At Car Jaipur, we offer you comparisons across various parameters thereby helping you choose the ideal one.</p>
      </li>

    </ul>
  </div>
</div>

<div className='Section-4' style={{ backgroundColor: '#F2F2F2', boxSizing: "border-box" }}>
  <div className='container'>
    <ul className='row' style={{ listStyle: "none", display: "flex", flexWrap: "wrap" }} >

      <li className='col-md-6 col-sm-12' style={{ textAlign: 'center', boxSizing: "border-box", padding: '10px' }}>
        <img src="\img\kothi.jpg" alt='kothi-Image' style={{ maxWidth: '100%', height: 'auto' }} />
      </li>

      <li className='col-md-6 col-sm-12' style={{
        padding: '20px',
        textAlign: 'center', boxSizing: "border-box",
        borderRadius: '10px', justifyContent: "center"
      }}>
        <h3 style={{ fontSize: '1.5rem' }}>CAR JAIPUR SHOWROOM</h3>
        <p style={{ fontSize: '1rem' }}>At Car Jaipur, the aim has always been to dream big and achieve great. Welcome to our showroom tour. Hope that you will enjoy your time cruising through. A little warning before you scroll ahead: You can check out anytime you want but you can never "leave."</p>
      </li>

    </ul>
  </div>
</div>

<Footer/>
    </div>

  )
}
