import React, { useState } from 'react'
import Footer from '../../components/public/Footer'
import Countdown from '../../components/public/Countdown'
import { Link } from 'react-router-dom'
import ShuffleModal from '../../components/shuffle/ShuffleModal'
import AlgorandLogo from '../../assets/images/algorand_logo.png'

export default function Shuffle() {
    const [openModal, setOpenModal] = useState(false)

    const hideModal = () => {
        setOpenModal(false)
    }

    return (
        <div>
            <ShuffleModal openModalParent={openModal} handleClose={hideModal} />
            <nav class="flex items-center justify-between py-12 px-24">
                <Link class="text-lg font-semibold flex items-center gap-3 hover:text-primary duration-300 ease-in-out" to="/shuffle">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                    <span class="text-sm md:text-base">Back to Shuffle</span>
                </Link>
            </nav>
            <div className="flex justify-center">
                <div className="max-w-md">
                    <h2 className="text-center font-semibold mt-6 text-3xl md:text-5xl">Degen Goat Shuffles</h2>
                    <div className="flex justify-center space-x-4 my-5">
                        <div className="flex space-x-3 items-center">
                            <div className="bg-gray-500 rounded-full p-1">
                                <img src={AlgorandLogo} alt="" />
                            </div>
                            <p className="text-sm text-gray-500 font-semibold">30 ALgo</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span className="text-sm text-gray-500 font-semibold">120 Participant</span>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            className="px-12 py-4 rounded-lg font-semibold text-lg text-semi-black bg-white hover:bg-primary transition duration-300 ease-in-out"
                            onClick={() => setOpenModal(true)}
                        >
                            Join Shuffle
                        </button>
                        {/* <button className="px-12 py-4 rounded-lg font-semibold text-lg text-semi-black bg-white hover:bg-primary transition duration-300 ease-in-out">You're Joined</button> */}
                    </div>
                    <div className="flex justify-center items-center space-x-3 mt-8">
                        <span className="w-3 h-3 rounded-full bg-red-600 block animate-blink"></span>
                        <Countdown />
                    </div>
                    <div className="text-center mt-2 text-primary">VXUASDS..... is #121 Participant of this Shuffle</div>
                </div>
            </div>
        </div>
    )
}
