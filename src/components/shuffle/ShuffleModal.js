import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect, checkJoinedAddress } from '../../redux/blockchain/blockchainActions'
import ThreeDotsWave from '../public/ThreeDotsWave'
import MyAlgoWalletLogo from '../../assets/myalgo-logo.png'
import { Truncate as truncate } from '../../utils'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'

export default function ShuffleModal({ openModal, handleClose, shuffleSlug }) {
    const dispatch = useDispatch()
    const blockchain = useSelector((state) => state.blockchain)

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        axios
            .post(`${process.env.REACT_APP_API_URL}/shuffle-participants`, { wallet_address: blockchain.walletAddress })
            .then((resp) => {
                console.log(resp)
                toast.success('You are joined the shuffled 🥳')
                dispatch(checkJoinedAddress(blockchain.walletAddress, shuffleSlug))
            })
            .catch((err) => {
                console.log(err)
                toast.error('Something went wrong!')
            })
    }

    if (!openModal) return null

    return (
        <div>
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <div className="inline-block align-bottom bg-white border-2 border-gray-400 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-gray-800">
                            <div className="flex items-center justify-between">
                                <span className="text-center font-semibold grow pl-[40px]">Join The Shuffle</span>
                                <button className="rounded-full border-[1.5px] border-gray-200 p-2 hover:bg-gray-100 transition duration-300 ease-in-out group" onClick={handleClose}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 group-hover:animate-wiggle" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-center">
                                    <div className="inline-block py-1 border border-gray-300 bg-gray-200 rounded-full px-6">
                                        <span className="text-sm">{truncate(blockchain.walletAddress, 20)}</span>
                                    </div>
                                </div>
                                {blockchain.joinedStatus ? (
                                    <div className="flex items-center justify-center mt-2">
                                        <span className="w-2 h-2 rounded-full bg-green-400 mr-1"></span>
                                        <span className="text-xs text-gray-400 font-medium">Joined</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center mt-2">
                                        <span className="w-2 h-2 rounded-full bg-red-400 mr-1"></span>
                                        <span className="text-xs text-gray-400 font-medium">Not Joined</span>
                                    </div>
                                )}
                            </div>
                            {blockchain.loading && (
                                <div>
                                    <div className="flex justify-center mt-4">
                                        <ThreeDotsWave />
                                    </div>
                                    <p className="text-center text-sm">Please Wait...</p>
                                </div>
                            )}
                            {blockchain.walletAddress && !blockchain.joinedStatus && (
                                <form onSubmit={handleOnSubmit}>
                                    <div className="mt-8">
                                        <div className="grid grid-rows-2 gap-6">
                                            <div>
                                                <label htmlFor="discord" className="flex items-center gap-2">
                                                    <span className="text-sm font-medium text-gray-700 inline-block">Discord</span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-discord h-4 w-4 fill-current text-violet-600" viewBox="0 0 16 16">
                                                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <span className="text-gray-500 sm:text-sm">@</span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="discord"
                                                        id="discord"
                                                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  border border-gray-300 rounded-md py-3 cursor-not-allowed bg-gray-200"
                                                        placeholder="Username"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="twitter" className="flex items-center gap-3">
                                                    <span className="text-sm font-medium text-gray-700 inline-block">Twitter</span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter h-4 w-4 fill-current text-blue-500" viewBox="0 0 16 16">
                                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <span className="text-gray-500 sm:text-sm">@</span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="twitter"
                                                        id="twitter"
                                                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  border border-gray-300 rounded-md py-3 cursor-not-allowed bg-gray-200"
                                                        placeholder="Username"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-center mt-4">
                                        {blockchain.walletAddress ? (
                                            <button
                                                type="submit"
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                                            >
                                                Join Shuffle
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-400 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm cursor-not-allowed"
                                                disabled
                                            >
                                                Join Shuffle
                                            </button>
                                        )}
                                        <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={handleClose}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
