
import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// for bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
// mui icon for footer 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '/src/assets/style.css'
import { MotionPhotosAutoOutlined } from '@mui/icons-material';
// for animation framer motion library 
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <div>

                    {/* <!-- Footer Start --> */}
                    {/* <!-- Site footer --> */}
                    {/* <Footer className="site-footer"> */}
                    <div style={{ 
                        // fontfamily: 'inter,Arial,sans-serif',
                         color: 'white', background: '#080E0E', padding: '30px 20px' }}>
                        <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <h6 className="f-heading">The Car Jaipur</h6>
                                <p className="text-justify" style={{ color: "#EBEBEB" }}><i>DEAL WITH TRUST.</i></p>
                                <p>The Car Jaipur the aim has always been to dream big and achieve great. Welcome to our showroom&apos;s tour. Hope that you will enjoy your time cruising through. A little warning before you scroll ahead &quot;You can check out anytime you want but you can never leave&quot;
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-3" >
                                <h6 className="f-heading " >Contact Info</h6>
                                <ul className="footer-links call"

                                >
                                    <li className='mail'><a href="mailto:team@codelixsolution.com">Team@thecarjaipur.com</a></li>
                                    <motion.li whileHover={{
                                        scale: 1.2,
                                        transition: { duration: 1 },
                                    }}
                                        whileTap={{ scale: 0.9 }}><a href="tel:8742068501">8742068501</a></motion.li>
                                    <motion.li
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }}
                                        whileTap={{ scale: 0.9 }}><a href="tel:9829066706">9829066706</a></motion.li>
                                    <motion.li
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }}
                                        whileTap={{ scale: 0.9 }}><a href="tel:9512111483">9512111483</a></motion.li>
                                    <li>
                                        <a href="https://www.google.com/maps/dir/22.9932698,72.7332131/Codelixsolution+Plot+No.20%2F21+DK+Industrial+Park-2,+Bakrol+Bujarang+Ahmedabad,+Gujarat+382430/@22.9931437,72.7331343,17.73z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e7da5cf0ca6b5:0x29ccc46e98abd38f!2m2!1d72.7332989!2d22.9929439">27,Pandit TN Mishra,Rail Nagar,Nirman Nagar,Jaipur(Raj)</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-xs-6 col-md-2">
                                <h6>Services</h6>
                                <ul className="footer-links site footer services">
                                    <li><a href="./#" >Sell Car</a></li>
                                    <li><a href="./#"> Purchase</a></li>
                                    <li><a href="./#" >Insurance</a></li>
                                    <li><a href="./#" >Car Loan</a></li>
                                    <li><a href="./#">Car Detailing</a></li>
                                    <li><a href="./#" >Consulting Service</a></li>
                                    {/* <!--<li><a href="http://scanfcode.com/category/android/" className="site footer">Digital Marketing</a></li>--> */}
                                    {/* <!--<li><a href="http://scanfcode.com/category/templates/" className="site footer">Consultants Service</a></li>--> */}
                                </ul>
                            </div>

                            <div className="col-xs-6 col-md-2">
                                <h6 className="f-heading">Style</h6>
                                <ul className="footer-links">
                                    <motion.li
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }}
                                        whileTap={{ scale: 0.9 }}><a href="#">Used Suv</a></motion.li>
                                    <motion.li
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }}
                                        whileTap={{ scale: 0.9 }}><a href="#">Used Sedan</a></motion.li>
                                    <motion.li
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }}
                                        whileTap={{ scale: 0.9 }}><a href="#">Used Convertible</a></motion.li>
                                    <motion.li
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }}
                                        whileTap={{ scale: 0.9 }}><a href="#">Used Coupe</a></motion.li>
                                    <motion.li
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }}
                                        whileTap={{ scale: 0.9 }}><a href="#">Used Sports</a></motion.li>
                                    <motion.li
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }}
                                        whileTap={{ scale: 0.9 }}><a href="#">Used MUV-MPV</a></motion.li>
                                    <motion.li
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }}
                                        whileTap={{ scale: 0.9 }}><a href="#">Used Hatchback</a></motion.li>
                                </ul>
                            </div>
                        </div>
                        <hr />

                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-sm-6 col-xs-12">
                                    <p className="copyright-text">Copyright &copy; 2022-2023 All Rights Reserved by
                                        <a href="http://www.carjaipur.com">The Car Jaipur</a>.
                                    </p>
                                </div>

                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <ul className="social-icons" style={{ display: 'flex', listStyle: 'none' }}>
                                        {/* <li><a className="github" href="https://github.com/Codelixsolution/Codelixsolution"><i className="fa fa-github"></i></a></li> */}
                                        {/* <li><a className="behance" href="https://www.behance.net/codelixsolution"><i className="fa fa-behance"></i></a></li> */}

                                        <motion.li
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }}
                                            whileTap={{ scale: 0.9 }}><a className="instagram" href="https://www.instagram.com/carjaipur/"></a><InstagramIcon color="secondary" /></motion.li>
                                        <motion.li 
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }}
                                            whileTap={{ scale: 0.9 }}
                                        style={{ margin: '0 5px' }}><a className="facebook" href="https://hi-in.facebook.com/carjaipur"><FacebookIcon />
                                        </a></motion.li>
                                        <motion.li
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 1 },
                                        }}
                                            whileTap={{ scale: 0.9 }}
                                        ><a className="twitter" href="https://twitter.com/carjaipur"> </a><TwitterIcon color="primary" /></motion.li>
                                        {/* <li><a className="linkedin" href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAD2pmmcBl_96lCQKO6g9j7k3PaefzsyWBk0&keywords=codelix%20solution&origin=RICH_QUERY_SUGGESTION&position=0&searchId=1736c682-8e8c-4f6a-86c9-b4dc2026673e&sid=t*r"><i className="fa fa-linkedin"></i></a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* </Footer> */}

                    {/* <!-- Footer End --> */}
          

    </div>
  )
}
