import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AlgorandLogo from '../../assets/images/algorand_logo.png'
import axios from 'axios'
import moment from 'moment'

export default function Index() {
    const [shuffles, setShuffles] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/shuffles`)
            .then(({ data }) => {
                setShuffles(data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <div className="flex justify-center">
                <div className="max-w-lg">
                    <h1 className="text-3xl md:text-5xl font-semibold text-center">Degen Goat Shuffle</h1>
                    <p className="text-center mt-4 text-gray-500 font-semibold">We will announce the shuffle schedule, don't miss it! 50A is the maximum mint price.</p>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <a href="https://discord.gg/b9wn7da2c3" target={'_blank'} rel="noreferrer">
                    <button className="bg-primary hover:bg-green-400 hover:text-white transition-all duration-300 ease-in-out flex items-center px-8 py-3 rounded-lg hover:animate-grow hover:scale-105 group">
                        <span className="group-hover:animate-wiggle">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-discord h-6 w-6 fill-current text-semi-black" viewBox="0 0 16 16">
                                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                            </svg>
                        </span>
                        <span className="text-semi-black font-semibold ml-3 text-lg">Join Community</span>
                    </button>
                </a>
            </div>
            <div className="mt-28 px-24">
                <h2 className="font-semibold">Latest Shuffle</h2>
                {shuffles.length > 0 ? (
                    <div>
                        {shuffles.map((shuffle) => (
                            <div key={shuffle.id}>
                                <div className="mt-4">
                                    <div className="bg-semi-black-900 px-5 py-6 rounded-lg">
                                        <div className="flex items-center justify-between space-x-5">
                                            {shuffle.status === 'opened' ? (
                                                <span className="w-3 h-3 rounded-full bg-primary"></span>
                                            ) : shuffle.status === 'draf' ? (
                                                <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                                            ) : (
                                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                            )}
                                            <p className="w-1/6">{shuffle.title}</p>
                                            <div className="flex items-center space-x-5">
                                                <div className="flex flex-col w-auto">
                                                    <p className="text-left">{moment(shuffle.started_at).format('MMM Do hh:mm')}</p>
                                                    <p className="text-right text-gray-500">EST</p>
                                                </div>
                                                <span className="w-12 bg-gray-500 h-[1.1px]"></span>
                                                <div className="flex flex-col w-auto">
                                                    <p className="text-left">{moment(shuffle.ended_at).format('MMM Do hh:mm')}</p>
                                                    <p className="text-right text-gray-500">EST</p>
                                                </div>
                                            </div>
                                            <div className="w-[11%] flex space-x-3 items-center justify-center">
                                                <div className="bg-white rounded-full p-1">
                                                    <img src={AlgorandLogo} alt="" />
                                                </div>
                                                <p className="text-sm">{shuffle.price} ALgo</p>
                                            </div>
                                            <div className="flex space-x-3 items-center">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col">
                                                    <span className="text-sm">{shuffle.total_winners_amount}</span>
                                                    <span className="text-xs text-gray-500">Total Winners</span>
                                                </div>
                                            </div>
                                            {shuffle.status === 'opened' ? (
                                                <Link to={`/shuffle/${shuffle.slug}`}>
                                                    <button className="bg-primary hover:bg-green-400 transition-all duration-300 ease-in-out text-semi-black uppercase font-semibold px-4 py-1 rounded-lg hover:scale-105">
                                                        join
                                                    </button>
                                                </Link>
                                            ) : shuffle.status === 'draf' ? (
                                                <button className="bg-gray-400 text-semi-black uppercase font-semibold px-4 py-1 rounded-lg cursor-not-allowed">join</button>
                                            ) : (
                                                <button className="bg-gray-400 text-semi-black uppercase font-semibold px-4 py-1 rounded-lg cursor-not-allowed">ended</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <div className="mt-4">
                            <div className="bg-semi-black-900 px-5 py-6 rounded-lg">
                                <div className="flex items-center justify-center space-x-3">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    <p className="text-gray-300">
                                        There is no shuffle data. Join Our{' '}
                                        <a href="https://discord.gg/b9wn7da2c3" target={'_blank'} rel="noreferrer" className="text-primary font-semibold">
                                            Discord
                                        </a>{' '}
                                        to get more information.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
