import React, { useState } from 'react'
import FaqImage from '../../assets/images/FAQ.png'

const faq = [
    {
        number: 1,
        question: 'What Blockchain Will Degen Goat Launch?',
        answer: 'We choose Algorand due to the low gas fee and fast transaction speed. We also want to grow the Algorand NFT by helping the artists (Degen Goat Holders only) to start their own generated NFT projects by helping to generate their art, batch minting (optional), and set up the Discord.',
    },
    {
        number: 2,
        question: 'When will we able to buy Degen Goat?',
        answer: 'Mid January 2022',
    },
    {
        number: 3,
        question: 'How to buy Degen Goat?',
        answer: 'Unlike other blockchains that able to minting on the website, we will do "shuffle" on our discord (Algorand NFT standard). Degen Goat can also be purchased with instant shuffle at Rand Gallery. It works like minting a dApp on another blockchain. Contact us on discord for a guide to join shuffle.',
    },
    {
        number: 4,
        question: 'How much will it cost to buy Degen Goat?',
        answer: '25A for the first shuffle and keep increasing to 50A for the maximum price. There are no price tier and auctions for Degen Goat, all G.O.A.T Are Handsome.',
    },
    {
        number: 5,
        question: 'Where to buy the secondary?',
        answer: `AB2 Gallery: Very Soon \n Rand Gallery: Very Soon`,
    },
]

export default function Index() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="px-6 md:px-24 md:mt-12">
            <div className="md:grid md:grid-cols-6 gap-12 items-center">
                <div className="md:col-span-2">
                    <img src={FaqImage} alt="" />
                </div>
                <div className="md:col-span-3 md:col-start-4 mt-12 md:mt-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-10">F.A.Q.</h1>
                    {faq.map((item, i) => (
                        <div className="bg-semi-black p-4 mb-4 cursor-pointer" key={item.number} onClick={() => toggle(i)}>
                            <div className="flex items-center justify-between">
                                <div className="text-base md:text-lg">
                                    {item.number}. {item.question}
                                </div>
                                <span>
                                    {selected === i ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </div>
                            <div
                                className={
                                    selected === i
                                        ? 'overflow-hidden transition-all duration-500 ease-[cubic-bezier(1,0,1,0)] h-auto max-h-[999px]'
                                        : 'max-h-0 transition-all duration-300 ease-[cubic-bezier(0,1,0,1)] overflow-hidden'
                                }
                            >
                                <p className="text-gray-300 mt-4 text-sm md:text-base whitespace-pre-line">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
