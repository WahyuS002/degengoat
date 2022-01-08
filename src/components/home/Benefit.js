import React from 'react'
import BenefitImage from '../../assets/images/Benefit.png'

export default function Benefit() {
    return (
        <div className="px-6 md:px-24">
            <div className="md:grid md:grid-cols-8 gap-6 items-center">
                <div className="md:col-span-2">
                    <img src={BenefitImage} alt="" />
                </div>
                <div className="md:col-span-5 col-start-4 mt-4 md:mt-0">
                    <h2 className="text-3xl md:text-5xl font-semibold">Benefit for the holders</h2>
                    <p className="mt-4 text-base md:text-lg text-gray-300 text-justify leading-relaxed">
                        By owning Degen Goat, you'll become a part of <span className="bg-primary px-2 py1 rounded-lg text-semi-black font-semibold">Respected Alpha</span> on Algorand, also you will
                        get full access to make Degen Goat <span className="bg-primary px-2 py1 rounded-lg text-semi-black font-semibold">derivative art</span>. There will be a Degen Goat Derivative
                        and Collab edition, where all derivative and collab between us become one. 90% of total sales will be transfered to the creator, 10% will go to the Degen Goat Bank. Degen Goat
                        Bank will be use wisely according to the wishes of all collectors.
                        <br />
                        <br />
                        <span className="bg-primary px-2 py1 rounded-lg text-semi-black font-semibold">We also willing to help you</span> as a holder to start your own nft project. If you already have
                        a raw materials, we are happy to help to generate your art and batch minting.
                    </p>
                </div>
            </div>
        </div>
    )
}
