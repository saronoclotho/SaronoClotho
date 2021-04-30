import React from 'react'
import Demo from './Demo'
import {Link} from 'react-router-dom'
import "./LandingPage.css"
import Button from 'react-bootstrap/Button'

function LadingPage() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 lp-custom-div-black">
                        <div className="container-fluid lp-text-container">
                            <div className="lp-header1-container">
                                <p className="lp-header1-style">
                                    SaronoClotho
                                </p>
                            </div>
                            <div className="lp-header2-container">
                                <p className="lp-header2-style">
                                    Because your body is unique
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 lp-custom-div-black">
                        <Demo />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-5 lp-custom-div-black lp-img-container">
                        <img className="lp-img-style" src="/images/homeimg.svg" alt=""/>
                    </div>
                    <div className="col-md-7 lp-custom-div-black">
                        <div className="row lp-header3-container">
                                <p className="lp-header3-style">
                                    We provide a novel set of digital tools that 
                                    aim to redefine the online shopping experience of 
                                    apparel.
                                </p>
                        </div>
                        <div className="row lp-header4-container">
                            <p className="lp-header4-style">
                                SaronoClotho employs 3D scanning technology 
                                combined with advanced cloth simulation 
                                algorithms to provide personalised sizing
                                recommendations for the clothes of different
                                clothing brands and manufacturers. This allows
                                our users to shop from the websites of different
                                retailers while being confident that the size that they have
                                chosen is optimized to their body shape and needs.
                            </p>
                        </div>

                        <div className="row lp-btn-container">
                            <Button variant="outline-light" size="lg" as={Link} to="./Product">
                                Learn More
                            </Button>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}
export default LadingPage

