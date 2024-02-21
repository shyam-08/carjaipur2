// "use client"
import React, { Component } from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
import '/src/assets/style.css'
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css'
// import Footer from './Footer';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { FormControl } from '@mui/material';
// import InputFileUpload from './InputFileUpload';
// import InputFileUpload2 from './InputFileUpload2';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Description } from '@mui/icons-material';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import Form from '../component/Form';
// import Form from '../component/Form'
// import { Metadata } from 'next'
// import Image from 'next/image';
// const metadata = {
//   title: 'Sale Car',
//   description: 'you can share your car at auto mart '

// }

export default class SellCar extends Component {
  render() {
    return (
      <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Sell Car</title>
                <meta name="description" content=" Getting a great deal on your vehicle at Car Jaipur we’ll value your vehicle based on its condition and current market value"/>
                <link rel="canonical" href="https://carjaipur/sell" />
                <link rel="sitemap" type="application/xml" title="SellCar" href="/sell" />
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
        <div className="Section-1SaleCar   " >
          <div className="container-fluid">
            {/* <Navbar /> */}
            <div className="row SaleCar1" >
              <div className="col-md-5 col-sm-12" style={{ alignContent: 'center', padding: "40px" }}>
                <h3>SELL YOUR LUXURY CAR</h3>
                <h3
                // style={{ color: 'transparent !important', 
                // webkittextstrokewidth: '1px',
                //  webkittextstrokecolor: '#000'
                // }}
                >IN 3 EASY STEPS.</h3>
                {/* <h3> </h3> */}
                <ul style={{
                  listStyle: "none", padding: "30px"
                }}>
                  <li className='sale litxtt'>
                    <span className='icon checkpoint' >
                      {/* <Image
                        className='border-2 p-1 m-1'
                        src="/Img\151checkpoints-icon.png"
                        width={50}
                        height={50}
                        alt="header image" /> */}
                      <img src="\img\151checkpoints-icon.png" alt="" className='Section-5Squad-Icon'/>
                    </span>
                    <span>
                      <h5>151 <strong>Check Point</strong></h5>
                    </span>

                  </li>
                  <li className='sale litxtt'>
                    <span className='icon checkpoint' >
                      {/* <Image
                        className='border-2 p-1 m-1'
                        src="/Img\clock-icon.png"
                        width={50}
                        height={50}
                        alt="header image" /> */}
                      <img src="\img\clock-icon.png" alt="" className='Section-5Squad-Icon' />

                    </span>
                    <h5>Get Offer  <strong>Soon</strong></h5>

                  </li>
                  <li className='sale litxtt' style={{ font: '18px' }}>
                    <span className='icon checkpoint' >
                      {/* <Image
                        className='border-2 p-1 m-1'
                        src="/Img\men-icon.png"
                        width={50}
                        height={50}
                        alt="header image" /> */}
                      <img src="\img\men-icon.png" alt=""  className='Section-5Squad-Icon'/>

                    </span>
                    <h5>4600+  <strong>Satisfied Customers</strong></h5>

                  </li>
                </ul>
                <a href='https://wa.me/919828066706'> <Button variant="outlined" color="success" startIcon={<WhatsAppIcon />} sx={{ m: 1 }}>
                  Chat on Whatsapp
                </Button></a>
                {/* <button style={{ margin: "5px" }}> </button> */}
                <a href='tel:9828066706'><Button variant="outlined" color="success" startIcon={<PhoneIcon />} >
                  Call Now:9828066706
                </Button></a>
                {/* <button>Call Now:8742068501</button> */}
              </div>
              <div className="col-md-7 col-sm-12
              //  Sec1-sale

               "

              // style={{ paddingLeft: '10px', paddingTop: "100px" }}
              >
                {/* <Image
                  className=' p-1 m-1 
                        //  img-fluid
                         '
                  src="/img/sellyourcar-banner-img.png"
                  width={700}
                  height={600}
                  alt="header image"
                  style={{
                    // height: '100%', width: '95%', 
                    objectFit: 'cover'
                  }}
                /> */}

                <img src="\img\sellyourcar-banner-img.png" alt="Car image" style={{ height: "auto", width: "100%", position: "relative" }} />

              </div>
            </div>
          </div>
        </div>
        <div className='Section-2Sale'>
          <div className="container">
            <div className="row">
              <h2>AUTHORIZED LUXURY CAR BUYERS IN JAIPUR</h2>
              <h2>CAR JAIPUR</h2>
              <div className="col-md-6 col-sm-12" style={{
                padding: "16px"
              }}>
                <ul style={{
                  listStyle: "none", textAlign: "left", flexWrap: "wrap"
                }}>
                  <li >
                  
                    <img src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" className='Sec2-Li-Img  ml-1 inline-block' />

                    One of the biggest and most trusted brand in the industry</li><hr />
                  <li>
                    <img className='Sec2-Li-Img inline-block' src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Repeat business with every single client over the last 25 years</li><hr />
                  <li>
                    <img className='Sec2-Li-Img inline-block' src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Pan Rajasthan Presence</li><hr />
                  <li>
                    <img className='Sec2-Li-Img inline-block' src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    ZERO commitment failures</li><hr />
                  <li>
                    <img className='Sec2-Li-Img inline-block' src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Touching 1000 people every month</li><hr />
                  <li>
                    <img className='Sec2-Li-Img inline-block' src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    4600 + Satisfied Clients</li><hr />
                  <li>
                    <img className='Sec2-Li-Img inline-block' src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Conclusion of the transaction within the same working day</li><hr />
                  <li>
                    <img className='Sec2-Li-Img inline-block' src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    100% Payment Secured</li><hr />
                  <li>
                    <img className='Sec2-Li-Img inline-block' src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    50% of the cars are booked before they are ready</li><hr />
                  <li>
                    <img className='Sec2-Li-Img inline-block' src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Fastest stock turn around time in the industry</li><hr />
                  <li>
                    <img className='Sec2-Li-Img inline-block' src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Transparent and simple processes</li><hr />
                  <li>
                    <img className='Sec2-Li-Img inline-block' src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    Not a single litigation since inception</li><hr />
                  <li>
                    <img className='Sec2-Li-Img inline-block' src="\img\bodytypeothrinfolisrt-checkicon.png" alt="" />
                    A dedicated team of 15 professionals serving you 24x7</li><hr />
                </ul>
              </div>

              <div className="col-md-6  col-sm-12 form-clmn"
              //  style={{ border: "1px solid black", padding: "30px" }}
              >
                    <Form/>
              </div>
            </div>
            </div>
            </div>
            <div className="Section-3Sale" style={{ justifyContent: 'center' }}>
              <div className="container content-center">
                <h2>OTHER BRANDS</h2>
                <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", textAlign: 'center',alignItems:
              'center' }}>
                  <li style={{justifyContent:'centre'}} >
                    <a href="#" className='a-3Sale'>
                      <img src="\img\\Lamborghini-logo.webp" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li  style={{justifyContent:'centre'}} >
                    <a href="#" className='a-3Sale'>
                      <img src="\img\Aston-Martin-logo-2003-6000x3000.webp" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li   style={{justifyContent:'centre'}}>
                    <a href="#" className='a-3Sale'>
                      <img src="\img\\audi-logo (1).webp" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li >
                    <a href="#" className='a-3Sale'>
                      <img src="\img\chevrolet.png" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li >
                    <a href="#">
                      <img src="\img\bmw-icon.png" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li >
                    <a href="#" className='a-3Sale'>
                      <img src="\img\dc-icon.png" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li >
                    <a href="#">
                      <img src="\img\ducati-icon.png" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li >
                    <a href="#">
                      <img src="\img\fiat-icon.png" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>


                  {/* </ui> */}
                  {/* <ui style={{ listStyle: "none", display: "flex",   liststyletype: 'circle', flexWrap:"wrap"}}> */}
                  <li >
                    <a href="#" className='a-3Sale'>
                      <img src="\img\nissan-icon.png" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li >
                    <a href="#" className='a-3Sale'>
                      <img src="\img\Jaguar-logo.webp" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li >
                    <a href="#" className='a-3Sale'>
                      <img src="\img\LexusSmallMain.webp" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li >
                    <a href="#" className='a-3Sale'>
                      <img src="\img\mahidra.png" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li >
                    <a href="#">
                      <img src="\img\Maserati-symbol-1920x1080_edited.webp" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li >
                    <a href="#" className='a-3Sale'>
                      <img src="\img\maybach-icon.png" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li >
                    <a href="#">
                      <img src="\img\mercedes-benz-logo.webp" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>
                  <li >
                    <a href="#">
                      <img src="\img\mini.png" alt="Lamborgini" className='logo' />
                      {/* <span>Lamborgini</span> */}
                    </a>
                  </li>


                </ul>
              </div>
            </div>
            {/* <div className="Section-4Sale">
          <div className="container">

            <h2>TCJ MANDATE CHECK FOR PURCHASING USED CAR</h2>
            <div  >

          
              <ul className='flex flex-wrap '>
                <li>
              <img src="\img\benefit-offer-icon.png" alt="" className='border-2 p-1 m-1'
                  //  className='Section-5Squad-Icon' 
                   />
                   <h6>
                    No Accidental History</h6>
              </li>
                <li >
                <img src="\img\benefit-pay-icon.png" alt=""  className='border-2 p-1 m-1'
                   /><h6>


                   No litigations
                 </h6>
                </li>
                <li>
                <img src="\img\benefit-workfreedom-icon.png" alt=""  className='border-2 p-1 m-1'
                   /> <h6>
                   No Odometer Tampering
                 </h6>
                </li>
                <li>
                <img src="\img\benefit-timing-icon.png" alt=""  className='border-2 p-1 m-1'/>
                <h6>


National Crime Record
Check
</h6>
                </li>
                <li>
                <img src="\img\benefit-communication-icon.png" alt=""  className='border-2 p-1 m-1'
                   />
                </li>
                <li>
                <img src="\img\benefit-reach-icon.png" alt="" className='border-2 p-1 m-1'
                   />
                   <h6>


Service History
Check
</h6>
                </li>
                <li>
                <img src="\img\benefit-scale-icon.png" alt="" className='border-2 p-1 m-1'
                    />
                      <h6>
                    Insurance History
                    Check

                  </h6>
                </li>
                <li>
                <img src="\img\benefit-automobilegrowth-icon.png" alt=""  className='border-2 p-1 m-1' 
                 />
<h6>

Physical Evaluation
</h6>
                </li>
              </ul>
            </div>
            <a href='https://wa.me/8742068501'> <Button variant="outlined" color="success" startIcon={<WhatsAppIcon />} sx={{ m: 1 }}>
                  Chat on Whatsapp
                </Button></a>
            {/* <button style={{ margin: "5px" }}> </button> */}
            {/* <a href='tel:8742068501'>  <Button variant='outlined' color="success" sx={{ m: 1 }}>
              Call Now:8742068501
            </Button></a>
           
          </div> */}
           
           
           <div className="Section-5Sale">
  <div className="container">
    <h2 style={{ color: "whitesmoke", padding: "10px" }}>HOW TO SELL YOUR USED CARS</h2>
    <p style={{ color: "grey", padding: "10px" }}>
      At Car Jaipur, we strive to provide the quickest and most hassle-free car selling service available. Getting a great deal on your vehicle can often be tricky, that’s why at Car Jaipur we’ll value your vehicle based on its condition and current market value.
    </p>
    <ul className="flex flex-wrap justify-center p-0 list-none">
  <li className="flex-none md:flex-1 lg:flex-1 xl:flex-1 p-4">
    <img src="\img\sellcar-instantvaluation-img.png" alt="instant valuation" />
    <h6 className="text-gray-500 mt-2">Valuation</h6>
  </li>
  <li className="flex-none md:flex-1 lg:flex-1 xl:flex-1 p-4">
    <img src="\img\sellcar-bookappointment-img.png" alt="appointment" />
    <h6 className="text-gray-500 mt-2">Book An Appointment</h6>
  </li>
  <li className="flex-none md:flex-1 lg:flex-1 xl:flex-1 p-4">
    <img src="\img\sellcar-sllyrcarmeeting-img.png" alt="sell car" />
    <h6 className="text-gray-500 mt-2">Sell Your Car</h6>
  </li>
</ul>

    <hr style={{ color: "grey" }} />
  </div>
</div>

<div className="Section-6Sale">
  <div className="container content-center">

    <img src="\img\outrightsale-icon.png" alt="" className='Section-6Sale-Img' />
    <h6><strong>OUTRIGHT SALE</strong></h6>
    <h6><strong>(NOT ONLY EXCHANGE)</strong></h6>
    <p>Sell your cars with us without the boundation of exchange only offers.</p>

    <img src="\img\bestofferin29mins-icon.png" alt="" className='Section-6Sale-Img' />
    <h6><strong>BEST OFFER</strong></h6>
    <p>Get the best offer for your supercar soon after physical/virtual valuation.</p>

    <span><img src="\img\onspot-icon.png" alt="" className='Section-6Sale-Img' /></span>
    <h6><strong>FAST PAYMENT</strong></h6>
    <p>Easy and quick payment method when you sell/exchange your cars with us.</p>

    <div><img src="\img\confidentialityofseller-icon.png" alt="" className='Section-6Sale-Img' /></div>
    <h6><strong>CONFIDENTIALITY OF SELLER.</strong></h6>
    <p>All your personal details are safe with us and are not passed on to the new buyers.</p>

  </div>
</div>

            <div className="Section-7Sale">
              <div>
                <Footer/>
              </div>
            </div>
          </div >
         
         
          )
  }
}
