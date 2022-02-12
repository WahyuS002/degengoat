import React, { useEffect, useState } from 'react'
import Countdown from '../../components/public/Countdown'
import { Link, useParams } from 'react-router-dom'
import ShuffleModal from '../../components/shuffle/ShuffleModal'
import AlgorandLogo from '../../assets/images/algorand_logo.png'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import ConnectWallet from '../../components/public/ConnectWallet'
import { checkJoinedAddress } from '../../redux/blockchain/blockchainActions'
import { zonedTimeToUtc } from 'date-fns-tz'

export default function Shuffle() {
    let { slug } = useParams()
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [shuffle, setShuffle] = useState(null)
    const [loading, setLoading] = useState(false)

    const blockchain = useSelector((state) => state.blockchain)
    console.log(blockchain)

    const notify = () => toast.warning('Please connect your wallet first!')

    const joinShuffle = async (shuffleId, shuffleSlug) => {
        let url = `${process.env.REACT_APP_API_URL}/participant/shuffle`
        setLoading(true)
        await axios
            .post(url, { wallet_address: blockchain.walletAddress, shuffle_id: shuffleId })
            .then(() => {
                toast.success('You are joined the shuffled 🥳')
                dispatch(checkJoinedAddress(blockchain.walletAddress, shuffleSlug))
            })
            .catch((err) => {
                console.log(err)
            })
        setLoading(false)
    }

    const joinShuffleButton = (shuffle) => {
        const currentTime = Date.parse(zonedTimeToUtc(new Date(), 'America/New_York'))
        if (currentTime < +new Date(shuffle.started_at)) {
            return (
                <button className="px-12 py-4 rounded-lg font-semibold text-lg text-semi-black bg-gray-400 cursor-not-allowed" disabled>
                    Join Shuffle
                </button>
            )
        } else if (currentTime > +new Date(shuffle.started_at) && currentTime < +new Date(shuffle.ended_at)) {
            if (blockchain.walletAddress) {
                return (
                    <>
                        {loading ? (
                            <button className="px-12 py-4 rounded-lg font-semibold text-lg text-semi-black bg-gray-400 cursor-not-allowed">Loading . . .</button>
                        ) : (
                            <>
                                {blockchain.joinedStatus ? (
                                    <div>
                                        <div className="flex justify-center">
                                            <button className="px-12 py-4 rounded-lg font-semibold text-lg text-semi-black bg-primary ">You're Joined</button>
                                        </div>
                                        <p className="text-center mt-6 text-gray-200">
                                            You're <span className="text-primary font-bold">#{blockchain.participantPosition}</span> participant in this shuffle.
                                        </p>
                                    </div>
                                ) : (
                                    <button
                                        className="px-12 py-4 rounded-lg font-semibold text-lg text-semi-black bg-white hover:bg-primary transition duration-300 ease-in-out"
                                        onClick={() => joinShuffle(shuffle.id, shuffle.slug)}
                                    >
                                        Join Shuffle
                                    </button>
                                )}
                            </>
                        )}
                    </>
                )
            } else {
                return (
                    <button className="px-12 py-4 rounded-lg font-semibold text-lg text-semi-black bg-white hover:bg-primary transition duration-300 ease-in-out" onClick={notify}>
                        Join Shuffle
                    </button>
                )
            }
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
                    <ShuffleModal openModal={openModal} handleClose={() => setOpenModal(false)} shuffleSlug={shuffle.slug} />
                    <ToastContainer />
                    <nav className="flex items-center justify-between py-12 px-24">
                        <Link to="/" className="uppercase font-semibold">
                            DegenGoat<span className="ml-[0.09rem] inline-block w-[0.4rem] h-[0.4rem] rounded-full bg-primary"></span>
                        </Link>
                        <ConnectWallet />
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
