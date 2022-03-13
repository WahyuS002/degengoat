import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink'
import HamburgerMenu from './HamburgerMenu'

export default function Navbar() {
    return (
        <nav className="px-6 md:px-24 py-2 md:py-8">
            <div className="hidden md:block">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-5 h-5 bg-emerald-500 rounded-full"></div>
                        <div className="ml-2 font-semibold text-xl">DegenGoat</div>
                    </div>
                    <div className="flex space-x-5 ml-12">
                        <CustomLink to="/" className="py-2 px-5 rounded-lg text-sm">
                            Home
                        </CustomLink>
                        <CustomLink to="/faq" className="py-2 px-5 rounded-lg text-sm">
                            FAQ
                        </CustomLink>
                        <CustomLink to="/team" className="py-2 px-5 rounded-lg text-sm">
                            Team
                        </CustomLink>
                        <CustomLink to="/shuffle" className="py-2 px-5 rounded-lg text-sm">
                            Shuffle
                        </CustomLink>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden justify-between items-center w-min-full py-4">
                <Link to="/" className="uppercase font-semibold">
                    DegenGoat<span className="ml-[0.09rem] inline-block w-[0.4rem] h-[0.4rem] rounded-full bg-primary"></span>
                </Link>
                <HamburgerMenu />
            </div>
        </nav>
    )
}
