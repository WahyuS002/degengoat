import React from 'react'
import Index from '../components/home/Index'
import About from '../components/home/About'
import Roadmap from '../components/home/Roadmap'
import JoinUs from '../components/home/JoinUs'
import Benefit from '../components/home/Benefit'

import Navbar from '../components/public/Navbar'
import Footer from '../components/public/Footer'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="mt-20">
                <Index />
            </div>
            <div className="mt-12 md:mt-44">
                <About />
            </div>
            <div className="mt-12 md:mt-44">
                <Roadmap />
            </div>
            <div className="mt-12 md:mt-44">
                <Benefit />
            </div>
            <div className="mt-12 md:mt-44">
                <JoinUs />
            </div>
            <div className="mt-12 md:mt-44">
                <Footer />
            </div>
        </div>
    )
}
