
import { Box, Divider, Typography } from "@mui/material";
// import Demo from "./Demo";
import React from 'react'
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import Image from "next/image";
import Demo from "../component/Demo";
import {Helmet} from "react-helmet";

import { useLocation } from 'react-router-dom';
// import ImageSlider from "../component/ImageSlider";
// import ImageSlider2 from "../component/ImageSlider2";

const CarDetail = (props) => {
  const location = useLocation();
  const carDetails = location.state ? location.state.car : null;
  console.log('carDetails:', carDetails);
  return (
    <div>
      <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Car Detail</title>
                <meta name="description" content="Car detail"/>
               
                {/* <link rel="sitemap" type="application/xml" title="Car Detail" href="/cardetail" /> */}
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
      </div>
            <Box className="m-4">
        <ul className='flex flex-wrap justify-center space-x-4 m-2'>
    <li className='flex-shrink-0 m-1'>
        <img 
        // className='w-64 h-64 object-cover'
        src={carDetails.Path1} alt="Image1"

         style={{height:'250px',width:'250'}} 
        />
    {/* console.log({carDetails.Way}) */}

    </li>
    <li className='flex-shrink-0 m-1'>
        <img 
        // className='w-64 h-64 object-cover'
        src={carDetails.Url} alt="Image2"

        style={{height:'250px',width:'250'}} 
        />
    {/* console.log({carDetails.Path2}) */}
    </li>
    <li className='flex-shrink-0 m-1'>
        <img 
        // className='w-64 h-64 object-cover' 
        src={carDetails.Way} alt="Image3" 

         style={{height:'250px',width:'250'}} 
         />
         {/* console.log({carDetails.Url}) */}
    </li>
   
    <li className='flex-shrink-0 m-1'>
        <img 
        // className='w-64 h-64 object-cover'
         src={carDetails.Location} alt="Image4"

        style={{height:'250px',width:'250'}} 
         />
           {/* console.log({carDetails.Location}) */}
    </li>
</ul>   
    {/* <ImageSlider2/> */}
                <Divider black />
                <Box 
    // display="inline-block"
    style={{ width: '60%' ,
    margin: 'auto', // Center the box horizontally
    marginTop: '30px',}}
>
    <Typography variant="h5" className='text-left m-2'>
        Car Overview:-
    </Typography>
    <div className="overflow-x-auto">
        <table className='min-w-full border-collapse border border-solid border-black p-2'>
            <tbody>
                
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>Registration Year -</span>
                    </td>
                    <td className='p-2'>
                        <span>{carDetails.makeYear}</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>Fuel Type -</span>
                    </td>
                    <td className='p-2'>
                        <span>{carDetails.Fuel}</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>Insurance validity -</span>
                    </td>
                    <td className='p-2'>
                        <span>{carDetails.ival}</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>Insurance type -</span>
                    </td>
                    <td className='p-2'>
                        <span>{carDetails.itype}</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>RTO -</span>
                    </td>
                    <td className='p-2'>
                        <span>{carDetails.rto}</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>Km driven -</span>
                    </td>
                    <td className='p-2'>
                        <span>{carDetails.km}</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>Transmission -</span>
                    </td>
                    <td className='p-2'>
                        <span>{carDetails.trans}</span>
                    </td>
                </tr>
                <tr className='border border-black'>
                    <td className='p-2'>
                        <span className='inline'>No. of Owner -</span>
                    </td>
                    <td className='p-2'>
                        <span>{carDetails.Owner}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Box>        
            </Box>
            <Box 
            // className="m-4 border-e-black" 
    style={{ width: '57%' ,  margin: 'auto', 
    marginTop: '30px',}}
    >
                <Typography variant="h5" className='text-left m-2' >
                    Car Specification :-
                </Typography>
                <div className="overflow-x-auto">
  <table className='min-w-full border-collapse border border-solid border-black mb-3 '>
    <tbody>
     
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Mileage (ARAI) -</span>
        </td>
        <td className='p-2'>
          <span>{carDetails.mile}</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Ground clearance -</span>
        </td>
        <td className='p-2'>
          <span>{carDetails.gclear}</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Boot space -</span>
        </td>
        <td className='p-2'>
          <span>{carDetails.bspace}</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Seating Capacity-</span>
        </td>
        <td className='p-2'>
          <span>{carDetails.sCap}</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Fuel Tank Capacity-</span>
        </td>
        <td className='p-2'>
          <span>{carDetails.fTank}</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>max power-</span>
        </td>
        <td className='p-2'>
          <span>{carDetails.MaxP}</span>
        </td>
      </tr>
      {/* <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Alloy wheels-</span>
        </td>
        <td className='p-2'>
          <span>{carDetails.aw}</span>
        </td>
      </tr> */}
    </tbody>
  </table>
</div>
                <Divider/>
            </Box>   
            {/* <Box 
            // className="m-4 border-e-black" 
    style={{ width: '57%' ,  margin: 'auto', 
    marginTop: '30px',}}
    >
                <Typography variant="h5" className='text-left m-2' >
                    Engine & Transmission :-
                </Typography>
                <div className="overflow-x-auto">
  <table className='min-w-full border-collapse border border-solid border-black mb-3 '>
    <tbody>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Drivetrain-</span>
        </td>
        <td className='p-2'>
          <span>Front Wheel Drive</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Gear Box-</span>
        </td>
        <td className='p-2'>
          <span>5-speed</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Number of gears-</span>
        </td>
        <td className='p-2'>
          <span>5 unit</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Displacement-</span>
        </td>
        <td className='p-2'>
          <span>1248 cc</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Number of cylinder-</span>
        </td>
        <td className='p-2'>
          <span>4 unit</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Turbocharger type-</span>
        </td>
        <td className='p-2'>
          <span>Fixed</span>
        </td>
      </tr>
      
    </tbody>
  </table>
</div>


               
                <Divider/>
            </Box>        */}
            <div>
              <Footer/>
            </div>
        </div>
  )
}

export default CarDetail
