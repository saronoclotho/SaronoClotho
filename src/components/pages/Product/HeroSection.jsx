import React from 'react'
import './HeroSection.css'
import IconSection from "./IconSection"
import TextSection from "./TextSection"




function HeroSection({iconLeft, imgSrcIn, header1In, header2In}) {

    let first = null;
    let second = null;

    if(iconLeft){
        first = (<IconSection imgSrc={imgSrcIn} />)
        second = (<TextSection header1={header1In} header2={header2In} />)
    }
    else{
        first = (<TextSection header1={header1In} header2={header2In} />)
        second = (<IconSection imgSrc={imgSrcIn} />)
    }

    return (
        <>
            {first}
            {second}
        </>
            
    )
}

export default HeroSection
