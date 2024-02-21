
import React, { useState, useEffect } from 'react';
// import FilterSearch from '../component/FilterSearch'
import ImageSlider from '../component/ImageSlider'
// import Select from '../component/Select';
// import MyForm from '../component/MyForm'
// import "./style.css";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'; import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import { Box, Card } from '@mui/material';
import { motion } from "framer-motion";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Demo from '../component/Demo';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';








export default function page() {

    return (
        <>
        <div >
           
    <Navbar/>
            <div 
            
            >
                
                 
                <ImageSlider />
            </div>
           
                        

            <div>
                <Demo />
            </div>
         

            <motion.div className='secton-4Home'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} style={{ boxSizing: "border-box" }}>
                <div>

                </div>

            </motion.div>
<Footer/>
        </div>
        </>
    )


}

