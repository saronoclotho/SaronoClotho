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
                                    Hello
                                </p>
                        </div>
                        <div className="row lp-header4-container">
                            <p className="lp-header4-style">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                feugiat egestas ante, nec tristique lectus. Proin eleifend ligula id
                                bibendum sodales. Curabitur luctus interdum velit, 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                feugiat egestas ante, nec tristique lectus. Proin eleifend ligula id
                                bibendum sodales. Curabitur luctus interdum velit, 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                feugiat egestas ante, nec tristique lectus. Proin eleifend ligula id
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

