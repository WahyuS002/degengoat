import React from 'react'
import AboutImage from '../../assets/images/About.png'

export default function About() {
    return (
        <div className="px-6 md:px-24">
            <div className="md:grid md:grid-cols-7 items-center">
                <div className="md:col-span-2">
                    <img src={AboutImage} alt="AboutImage" />
                </div>
                <div className="md:col-span-4 md:col-start-4 mt-4 md:mt-0">
                    <p className="text-base md:text-lg text-gray-300 text-justify leading-relaxed">
                        Welcome to Degen Goat, the <span className="bg-primary px-2 py1 rounded-lg text-semi-black font-semibold mx-1">G.O.A.T</span> on Algorand blockchain! Degen Goat is a collection
                        of 1000 generated hand-drawn NFT with 9 different traits categories.
                        <br /> <br />
                        Our main focus is gathering Algofam and talented artist to become a strongest community on Algorand in humble way. We're also here to support the other NFT projects on Algorand
                        by collecting them as a form of support and put them in the Degen Goat Bank.
                    </p>
                </div>
            </div>
        </div>
    )
}
