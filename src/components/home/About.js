import React from 'react'
import TabAnimation from './TabAnimation'

export default function About() {
    return (
        <div className="px-6 md:px-24">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="w-full md:w-4/12">
                    <TabAnimation />
                </div>
                <div className="md:w-7/12 mb-8 md:mb-0">
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
