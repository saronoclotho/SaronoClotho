import React from 'react'
import HeroSection from './HeroSection'
import HeroSectionSep from './HeroSectionSep'
import InitSection from "./InitSection"

import {heroObj1, heroObj2, heroObj3, heroObj4, heroObj5, heroObj6} from "./Data"


function Product() {
    return (
            <div className="container-fluid">
                <div className="row">
                    <InitSection />
                </div>

                <div className="row">
                    <HeroSection
                        iconLeft={false}
                        imgSrcIn={heroObj1.imgSrc}
                        header1In={heroObj1.textHeader1}
                        header2In={heroObj1.textHeader2}
                        />

                    <HeroSectionSep />

                    <HeroSection
                        iconLeft={true}
                        imgSrcIn={heroObj2.imgSrc}
                        header1In={heroObj2.textHeader1}
                        header2In={heroObj2.textHeader2}
                        />

                    <HeroSectionSep />

                    <HeroSection
                        iconLeft={false}
                        imgSrcIn={heroObj3.imgSrc}
                        header1In={heroObj3.textHeader1}
                        header2In={heroObj3.textHeader2}
                        />

                    <HeroSectionSep />

                    <HeroSection
                        iconLeft={true}
                        imgSrcIn={heroObj4.imgSrc}
                        header1In={heroObj4.textHeader1}
                        header2In={heroObj4.textHeader2}
                        />

                    <HeroSectionSep />

                    <HeroSection
                        iconLeft={false}
                        imgSrcIn={heroObj5.imgSrc}
                        header1In={heroObj5.textHeader1}
                        header2In={heroObj5.textHeader2}
                        />

                    <HeroSectionSep />

                    <HeroSection
                        iconLeft={true}
                        imgSrcIn={heroObj6.imgSrc}
                        header1In={heroObj6.textHeader1}
                        header2In={heroObj6.textHeader2}
                        />

                </div>
            </div>
    )
}

export default Product;
