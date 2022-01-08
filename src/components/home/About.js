import React from 'react'

export default function About() {
    return (
        <div className="px-6 md:px-24">
            <div className="md:grid md:grid-cols-6 items-center">
                <div className="md:col-span-3">
                    <h2 className="text-3xl md:text-5xl font-semibold">
                        What Is <br /> Degen Goat?
                    </h2>
                    <a
                        href="#roadmap"
                        className="mt-4 md:mt-8 px-6 md:px-12 py-3 bg-primary rounded-lg font-bold text-lg md:text-xl text-semi-black shadow-[5px_5px_0_0_rgba(0,113,56,1)] hover:bg-green-400 hover:shadow-none transition-all duration-300 ease-in-out inline-block"
                    >
                        Check Our Roadmap
                    </a>
                </div>
                <div className="md:col-span-3 mt-4 md:mt-0">
                    <p className="text-base md:text-lg text-gray-300 text-justify leading-relaxed">
                        Welcome to Degen Goat, the <span className="bg-primary px-2 py1 rounded-lg text-semi-black font-semibold mx-1">G.O.A.T</span> on Algorand blockchain! Degen Goat is a collection
                        of 1000 generated hand-drawn NFT with 8 different traits categories.
                        <br /> <br />
                        Our main focus is gathering Algofam and talented artist to become a strongest community on Algorand. We're also here to support the other NFT projects on Algorand by collecting
                        them as a form of support and put them in the Degen Goat Bank.
                    </p>
                </div>
            </div>
        </div>
    )
}
