import React, { useState } from 'react'
import FaqImage from '../../assets/images/FAQ.png'

const faq = [
    {
        number: 1,
        question: 'Why we choose algorand?',
        answer: 'Dummy Text',
    },
    {
        number: 2,
        question: 'Who is the team behind degen goat?',
        answer: 'Dummy Text',
    },
    {
        number: 3,
        question: 'lorem abxzvxcv',
        answer: 'Dummy Text',
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
        <div className="px-24 mt-12">
            <div className="grid grid-cols-6 gap-12 items-center">
                <div className="col-span-2">
                    <img src={FaqImage} alt="" />
                </div>
                <div className="col-span-3 col-start-4">
                    <h1 className="text-5xl font-bold mb-10">F.A.Q.</h1>
                    {faq.map((item, i) => (
                        <div className="bg-semi-black p-4 mb-4 cursor-pointer" key={item.number} onClick={() => toggle(i)}>
                            <div className="flex items-center justify-between">
                                <div className="text-lg">
                                    {item.number}. {item.question}
                                </div>
                                <span>
                                    {selected === i ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                clip-rule="evenodd"
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
                                <p className="text-gray-300 mt-4">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
