import React from 'react'
import Hero from '../../assets/images/Hero.png'

export default function Index() {
    return (
        <div className="px-6 md:px-24 md:flex md:items-center md:gap-24">
            <div className="w-full md:w-4/6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Welcome To <br /> <span className="text-primary">Degen Goat</span>
                </h1>
                <p className="mt-3 text-lg md:text-2xl text-gray-400">The story about a degen scientist who conducted a crazy experiment on 1000 goats. </p>
            </div>
            <div className="w-full md:w-3/5 mt-6 md:mt-0">
                <img className="hidden md:block" src={Hero} alt="" />
            </div>
        </div>
    )
}
