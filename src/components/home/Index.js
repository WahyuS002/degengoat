import React from 'react'
import Hero from '../../assets/images/Hero.png'

export default function Index() {
    return (
        <div className="px-24 flex items-center gap-24">
            <div className="w-4/6">
                <h1 className="text-6xl font-bold leading-tight">
                    Welcome To <br /> <span className="text-primary">Degen Goat</span>
                </h1>
                <p className="mt-3 text-2xl text-gray-400">The story about a degen scientist who conducted a crazy experiment on 1000 goats. </p>
            </div>
            <div className="w-3/5">
                <img src={Hero} alt="" />
            </div>
        </div>
    )
}
