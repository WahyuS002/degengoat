import React, { useEffect, useState } from 'react'
import Countdown from '../../components/public/Countdown'
import { Link, useParams } from 'react-router-dom'
import ShuffleModal from '../../components/shuffle/ShuffleModal'
import AlgorandLogo from '../../assets/images/algorand_logo.png'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'

export default function Shuffle() {
    let { slug } = useParams()
    const [openModal, setOpenModal] = useState(false)
    const [shuffle, setShuffle] = useState(null)

    const blockchain = useSelector((state) => state.blockchain)

    const hideModal = () => {
        setOpenModal(false)
    }

    const joinShuffleButton = (shuffle) => {
        if (+new Date() < +new Date(shuffle.started_at)) {
            return (
                <button className="px-12 py-4 rounded-lg font-semibold text-lg text-semi-black bg-gray-400 cursor-not-allowed" disabled>
                    Join Shuffle
                </button>
            )
        } else if (+new Date() > +new Date(shuffle.started_at) && +new Date() < +new Date(shuffle.ended_at)) {
            return (
                <button className="px-12 py-4 rounded-lg font-semibold text-lg text-semi-black bg-white hover:bg-primary transition duration-300 ease-in-out" onClick={() => setOpenModal(true)}>
                    Join Shuffle
                </button>
            )
        } else {
            return (
                <button className="px-12 py-4 rounded-lg font-semibold text-lg text-semi-black bg-gray-400 cursor-not-allowed" disabled>
                    Ended
                </button>
            )
        }
    }

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/shuffles/${slug}`)
            .then(({ data }) => {
                setShuffle(data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {shuffle && shuffle.status !== 'draf' ? (
                <div>
                    <ShuffleModal openModalParent={openModal} handleClose={hideModal} shuffleId={shuffle.id} />
                    <ToastContainer />
                    <nav className="flex items-center justify-between py-12 px-24">
                        <Link className="text-lg font-semibold flex items-center gap-3 hover:text-primary duration-300 ease-in-out" to="/shuffle">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            <span className="text-sm md:text-base">Back</span>
                        </Link>
                    </nav>
                    <div className="flex justify-center mt-20">
                        <div className="max-w-md">
                            <h2 className="text-center font-semibold mt-6 text-3xl md:text-5xl">{shuffle.title}</h2>
                            <div className="flex justify-center space-x-4 my-5">
                                <div className="flex space-x-3 items-center">
                                    <div className="bg-gray-500 rounded-full p-1">
                                        <img src={AlgorandLogo} alt="" />
                                    </div>
                                    <p className="text-sm text-gray-500 font-semibold">{shuffle.price} ALgo</p>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-gray-500 font-semibold">{shuffle.total_participants} Participant</span>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-gray-500 font-semibold">{shuffle.total_winners_amount} Total of Winners</span>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">{joinShuffleButton(shuffle)}</div>
                            <div className="flex justify-center mt-8">
                                <Countdown started_at={shuffle.started_at} ended_at={shuffle.ended_at} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}
