import React from 'react'
import {Link} from 'react-router-dom'

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';



import Logo from '../Logo'
import "./FooterCustom.css"
import Gmaillto from './Gmailto';

function FooterCustom() {
    return (
        <div className="row-fluid footer-style">
            <div className="col-sm text-center">
                {/* <Logo /> */}
            </div>

            <div className="col-sm trademark-container">
                <div className='text-light'> 
                    SaronoClotho © {new Date().getFullYear()}
                </div>
            </div> 

            <div className="col-sm text-center">

                <span className="align-middle d-inline">
                    <div className="container d-inline">
                        <Link to='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook className="text-white" />
                        </Link> 
                    </div>

                    <div className="container d-inline">
                        <Link to='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram className="text-white"/>
                        </Link> 
                    </div>

                    <div className="container d-inline">
                        <Gmaillto mailto={"mailto:saronoclotho@gmail.com"} />
                    </div>

                    <div className="container d-inline">
                        <Link to='//www.youtube.com/channel/UCQCdPfL4DqhGh9_j2OseY_A' target='_blank' aria-label='Youtube'>
                            <FaYoutube className="text-white"/>
                        </Link> 
                    </div>
                </span>
            </div>
        </div>
    )
}

export default FooterCustom;

