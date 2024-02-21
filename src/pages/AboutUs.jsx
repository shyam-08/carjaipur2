import React from 'react'
// import { motion } from "framer-motion"
import '/src/assets/style.css'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

// import Image from 'next/image';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { styled } from '@mui/system';
// import { Modal, Button, TextField, Grid, Paper } from '@mui/material';
// import { Typography } from '@mui/material';

export default function AboutUs() {

  return (
    <div>
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
        <h4 style={{ padding: '20px 10px 10px' }}>The Car Jaipur, a pre-owned luxury car dealer deals with 24 brands</h4>
        <p style={{ padding: '10px' }}>
        The Car Jaipur started in 2011 as a benchmark model for the Pre-Used, or how we prefer to see it as, Pre-Loved Car Brand. The mission was simple, direct and drove effect - delivering a new dimension of luxury while standardising & raising platforms for the used car market in India.

          Since our inception our primary aim has been our passion for delivering excellence which became our mission. YOU (our patrons) are the driving force behind our company and making sure you get the best is what we thrive on.

        </p>
        <h4 style={{ padding: '10px' }}>
          MISSION
        </h4>
        <p style={{ padding: '10px' }}>The journey began in 2011 when The Car Jaipur was founded in jaipur, India. Since then our mission has been to provide quality exotic cars with highly personalized care at a competitive price. Creating a new benchmark for excellence in every aspect of our business.</p>
      </div>
      <div className='Section-3' style={{ boxSizing: "border-box" }} >
        <div className="container">
          <h2 style={{ padding: '20px 0 0 ' }}>OUR USPS</h2>
          <ul className='row' style={{ listStyle: "none", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

            <li className='col-md-6 col-sm-12' style={{
              alignItems: 'center',
              //  textAlign: 'centre',
              padding: '10px 0 60px '
            }}>
              {/* <Image
                // className='p-2 justify-center ...'
                className='m-2'
                src="/img\customer3.jpg"
                width={500}
                height={400}
                alt="pexels.jpeg" /> */}
              <img src="\img\customer3.jpg" style={{ alignItems: 'center', padding: '5px  40px 10px', height: '90%', width: '90%' }} />
              <h3 style={{ width: '70%', textAlign: 'center' }}> 4600+ Happy Customers</h3>
              <p style={{ width: '70%', textAlign: 'center' }}>At TCJ, we offer you comparisons across various parameters thereby helping you choose the ideal one.</p>
            </li>
            <li className='col-md-6 col-sm-12' style={{
              alignItems: 'center',
              //  textAlign: 'centre',
              padding: '10px 0 60px '
            }}>
              {/* <Image
                // className='p-2 justify-center ...'
                className='m-2'
                src="/img\customer2.jpg"
                width={500}
                height={400}
                alt="pexels.jpeg" /> */}
              <img src="\img\customer2.jpg" style={{ alignItems: 'center', padding: '5px  40px 10px', height: '90%', width: '90%',
              //  fontfamily: 'Barlow, arial'
                }} />

              <h3 style={{ width: '70%', textAlign: 'center' }}>Jaipur&#39;s Biggest Studio</h3>
              <p style={{ width: '80%', textAlign: 'center' }}>At The Car Jaipur, we offer you comparisons across various parameters thereby helping you choose the ideal one.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='Section-4' style={{ backgroundColor: '#F2F2F2', boxSizing: "border-box" }}>
        <div className='contaiener'>
          <ul className='row' style={{ listStyle: "none", display: "flex", flexWrap: "wrap" }} >
            <li className='col-md-6 col-sm-12' style={{ textAlign: 'center', boxSizing: "border-box" }}>
              <img src="\img\kothi.jpg" alt='kothi-Image' style={{ height: '400px', width: '650px', padding: '20px' }} />
            </li>
            <li className='col-md-6 col-sm-12' style={{
              padding: '90px 10px 10px',
              //  fontfamily: 'Barlow, arial', 
              textAlign: 'center', boxSizing: "border-box",
              //  width: '40%', 
              borderRadius: '50px', justifyContent: "center"
            }}> <h3>THE CAR JAIPUR SHOWROOM</h3>
              <p>At The Car Jaipur the aim has always been to dream big and achieve great. Welcome to our showroom tour. Hope that you will enjoy your time cruising through. A little warning before you scroll ahead You can check out anytime you want but you can never&quot; leave</p>
            </li>
          </ul>
        </div>
      </div>
<Footer/>
    </div>

  )
}
