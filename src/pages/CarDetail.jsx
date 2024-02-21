
import { Box, Divider, Typography } from "@mui/material";
// import Demo from "./Demo";
import React from 'react'
// import Image from "next/image";





const CarDetail = () => {
 
  return (
    <div>
        
            <Box className="m-4">
              
            <ul className='flex flex-wrap justify-center space-x-4 m-2'>
    <li className='flex-shrink-0'>
        <img 
        // className='w-64 h-64 object-cover'
         src="/img/rangrover1.jpg" alt="Range Rover 1" 
         style={{height:'250px',width:'250'}} 
        />
    </li>
    <li className='flex-shrink-0'>
        <img 
        // className='w-64 h-64 object-cover' 
        src="/img/rangerover2.jpg" alt="Range Rover 2"
        style={{height:'250px',width:'250'}} 
        />
    </li>
    <li className='flex-shrink-0'>
        <img 
        // className='w-64 h-64 object-cover' 
        src="/img/rangerover3.jpg" alt="Range Rover 3"
         style={{height:'250px',width:'250'}} 
         />
    </li>
    <li className='flex-shrink-0'>
        <img 
        // className='w-64 h-64 object-cover'
         src="/img/rangerover4.jpg" alt="Range Rover 4"
        style={{height:'250px',width:'250'}} 
         />
    </li>
</ul>

               
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
                        <span className='inline'>Make Year -</span>
                    </td>
                    <td className='p-2'>
                        <span>2018</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>Registration Year -</span>
                    </td>
                    <td className='p-2'>
                        <span>2018</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>Fuel Type -</span>
                    </td>
                    <td className='p-2'>
                        <span>petrol</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>Insurance validity -</span>
                    </td>
                    <td className='p-2'>
                        <span>Jan 2025</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>Insurance type -</span>
                    </td>
                    <td className='p-2'>
                        <span>Third Party</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>RTO -</span>
                    </td>
                    <td className='p-2'>
                        <span>DL14</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>Km driven -</span>
                    </td>
                    <td className='p-2'>
                        <span>76K km</span>
                    </td>
                </tr>
                <tr className='border border-black '>
                    <td className='p-2'>
                        <span className='inline'>Transmission -</span>
                    </td>
                    <td className='p-2'>
                        <span>Manual (Regular)</span>
                    </td>
                </tr>
                <tr className='border border-black'>
                    <td className='p-2'>
                        <span className='inline'>No. of Owner -</span>
                    </td>
                    <td className='p-2'>
                        <span>1st Owner</span>
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
          <span className='inline'>Insurance validity -</span>
        </td>
        <td className='p-2'>
          <span>Jan 2025</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Insurance type -</span>
        </td>
        <td className='p-2'>
          <span>Third Party</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>RTO -</span>
        </td>
        <td className='p-2'>
          <span>DL14</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Mileage (ARAI) -</span>
        </td>
        <td className='p-2'>
          <span>24.3 kmpl</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Ground clearance -</span>
        </td>
        <td className='p-2'>
          <span>198 mm</span>
        </td>
      </tr>
      <tr className='border border-black'>
        <td className='p-2'>
          <span className='inline'>Boot space -</span>
        </td>
        <td className='p-2'>
          <span>328 litres</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>


               
                <Divider/>
            </Box>       
            
        </div>
  )
}

export default CarDetail
