import React from 'react'
import "./HeroSection.css"

function TextSection({header1, header2}) {
    return (
        
        <div className="col-md-7 hs-custom-div-gray">
        
        <div className="container-fluid hs-text-container">

            <div>
                <div className="hs-header3-container">
                    <div className="hs-header2-style">{header1}</div>
                </div>
                <div className="hs-header3-container">
                    <div className="hs-header3-style">
                        {header2}
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default TextSection


