import React from 'react'
import { HeroImages } from '../../utils'
import WelcomeImage from '../../assets/images/Welcome.png'

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
                <div className="flex justify-center mx-auto">
                    <div className="md:w-1/2">
                        <img src={WelcomeImage} alt="WelcomeImage.png" />
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden relative mt-16">
                <div className="w-[3500px] flex animate-infinite-carousel">
                    {images.map((image) => (
                        <div className="w-[250px] mx-2" key={image.src}>
                            <img className="rounded-xl" src={image.src} alt={image.alt} />
                        </div>
                    ))}
                    {images.map((image) => (
                        <div className="w-[250px] mx-2" key={image.src}>
                            <img className="rounded-xl" src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
