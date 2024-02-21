
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
import {Helmet} from "react-helmet";




export default function page() {

    return (
        <>
        <div >
        <Helmet>
                <meta charSet="utf-8" />
                <title>Car Jaipur</title>
                <meta name="description" content="You can effortlessly search for cars by their brand and utilize effiecient filtering."/>
                <link rel="canonical" href="https://carjaipur/" />
                <link rel="sitemap" type="application/xml" title="Home" href="/" />
                {/* <!-- Google tag (gtag.js) --> */}
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

