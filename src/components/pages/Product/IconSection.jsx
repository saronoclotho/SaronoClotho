import React from 'react'

function IconSection({imgSrc}) {
    return (
            <div className="col-md-5 hs-custom-div-red hs-img-container">
                <img className="hs-img-style" src={imgSrc} alt=""/>
            </div>
    )
}

export default IconSection

