import React from 'react'
import Hero from '../../assets/images/Hero.png'
import { HeroImages } from '../../utils'

const images = [
    { src: HeroImages.Hero1, alt: 'Hero1' },
    { src: HeroImages.Hero2, alt: 'Hero2' },
    { src: HeroImages.Hero3, alt: 'Hero3' },
    { src: HeroImages.Hero4, alt: 'Hero4' },
    { src: HeroImages.Hero5, alt: 'Hero5' },
    { src: HeroImages.Hero6, alt: 'Hero6' },
    { src: HeroImages.Hero7, alt: 'Hero7' },
]

export default function Index() {
    return (
        <div>
            <div className="px-6 md:px-24 md:flex md:items-center md:gap-24">
                <div className="w-full text-center">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Welcome To <br /> <span className="text-primary">Degen Goat</span>
                    </h1>
                </div>
                {/* <div className="w-full md:w-3/5 mt-6 md:mt-0">
                    <img className="hidden md:block" src={Hero} alt="" />
                </div> */}
            </div>
            <div className="w-full overflow-hidden relative mt-12">
                <div className="w-[3500px] flex animate-infinite-carousel">
                    {images.map((image) => (
                        <div className="w-[250px]" key={image.src}>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                    {images.map((image) => (
                        <div className="w-[250px] h-[100px]" key={image.src}>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
