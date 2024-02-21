import React, { Component } from 'react'
// for navabar header 
// import Navbar from './Navbar'
// for footer
// import Footer from './Footer'
// for bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import div from '@mui/material/div';
// for material ui 
import '/src/assets/style.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { FormControl } from '@mui/material';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import ContactForm from '../component/ContactForm'
import {Helmet} from "react-helmet";

// import Form from '../component/Form'
// for animation framer motion 
// import { motion } from "framer-motion"
// import { Metadata } from 'next'



export default class ContactUs extends Component {
    render() {
        return (
            // <!-- START - Contact Us Section -->
            <div className="lightgray contactus-sec">
                  <Helmet>
                <meta charSet="utf-8" />
                <title>Contact US</title>
                <meta name="description" content="ContactUs:-9828066706, 8742068501, Email:carjaipursince1998@gmail.com, Address:'27,Suratpura house,T.N Mishra Marg, Nirman Nagar, Jaipur, Rajasthan'"/>
                <link rel="canonical" href="https://carjaipur/ContactUs" />
                <link rel="sitemap" type="application/xml" title="ContactUS" href="/ContactUs" />
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
            <div className="section-1" style={{boxSizing:"border-box"}}>
                 <Navbar/>
            </div>

            
                   <div className="section-2 p-8 md:p-16" style={{
                    padding:"90px",background:"whitesmoke",boxSizing:"border-box"
                   }}>
                <div className="container  mx-auto">
                
                    <div className="secheader-grp">
                        <h1 className="h4 sectitle">Contact us</h1>
                    </div>
                    <div className="row flexrow">
                        <div className="col-md-6 cntnt-clmn">
                            <div className="cntnt-grp">
                                <ul className="contactusdetail-list">
                                    <li className="mail m-1">
                                        <div className="li-innr">
                                            <h6 className="h7"><a href="mailto:carjaipursince1998@gmail.com">carjaipursince1998@gmail.com</a></h6>
                                            <p>The best way to get answer faster.</p>
                                        </div>
                                    </li>
                                    <li className="call m-2">
                                        <div className="li-innr">
                                            <h6 className="h7">For Preowned Cars</h6>
                                            <h6 className="h7"><a href="tel:+91-9828066706">(+91) 9829066706</a></h6>
                                            <p>We are happy to help (10am to 7pm)</p>
                                        </div>
                                    </li>

                                    <li className="call m-1">
                                        <div className="li-innr">
                                            <h6 className="h7">For Preowned Cars</h6>
                                            <h6 className="h7"><a href="tel:+919829066706-">(+91) 9829066706</a></h6>
                                            <p>We are happy to help (10am to 7pm)</p>
                                        </div>
                                    </li>
                                </ul>
                                <br className="hide-480" />
                                <h2 className="h4 sectitle">Our Showroom</h2>
                                <ul className="contactusloctn-list">
                                    <li>
                                        <h6 className="h7">Jaipur Headquarters <a href="https://www.google.com/search?q=car+jaipur&sca_esv=593955280&rlz=1C1CHBF_enIN994IN994&sxsrf=AM9HkKlv3inUqZLDXznDUoCwoz26gkieQw%3A1703673780147&ei=tP-LZcymCNbR2roPr6WzyA0&oq=car+ja&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmNhciBqYSoCCAAyChAjGIAEGIoFGCcyDRAAGIAEGIoFGEMYsQMyCBAAGIAEGLEDMgUQABiABDILEAAYgAQYsQMYgwEyBRAAGIAEMhMQLhiABBgCGMsBGMcBGK8BGI4FMgUQABiABDIFEAAYgAQyBRAAGIAESIAgUOYFWM8YcAJ4AZABBJgB_wOgAaoTqgEJMC42LjQuNS0xuAEDyAEA-AEBqAIUwgIKEAAYRxjWBBiwA8ICEBAuGIAEGBQYhwIYxwEYrwHCAgsQLhiABBjHARivAcICBxAjGOoCGCfCAhQQABiABBjjBBjpBBjqAhi0AtgBAcICFhAAGAMYjwEY5QIY6gIYtAIYjAPYAQLCAhEQABiABBiKBRiRAhixAxiDAcICERAuGIAEGIoFGJECGMcBGNEDwgIQEC4YgAQYigUYQxjHARjRA8ICChAAGIAEGIoFGEPCAhcQLhiABBiKBRiRAhixAxiDARjHARjRA8ICBBAjGCfCAgsQABiABBiKBRiRAsICChAAGIAEGLEDGAriAwQYACBBiAYBkAYCugYGCAEQARgBugYGCAIQARgL&sclient=gws-wiz-serp&lqi=CgpjYXIgamFpcHVySPO1rreUq4CACFoSEAAYABgBIgpjYXIgamFpcHVykgEPdXNlZF9jYXJfZGVhbGVymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5TYzI5MWNubEJSUkFCqgFECgcvbS8wazRqEAEqByIDY2FyKAAyHhABIhq-teNFjFYCX8cFaSw6NDStS9DucJ6sB2bi1zIOEAIiCmNhciBqYWlwdXI#rlimm=6634819899059044244" target="_blank" className="locatemap">Locate on map</a></h6>
                                       <p>27,SuratPura House</p>
                                        <p>T.N Mishra Marg, Nirman Nagar, Jaipur, Rajasthan - 122001</p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 form-clmn">
                                
                            <ContactForm/>
                                {/* <Form/> */}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="mt-8 md:mt-16" style={{marginTop:'20px',boxSizing:"border-box"}}>
                    <Footer/>
                  </div>

                
            </div>
            /* <!-- END - Contact Us Section --> */

        )
    }
}
