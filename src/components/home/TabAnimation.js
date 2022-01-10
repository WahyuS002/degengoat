import React, { useState } from 'react'
import { initialTabs as tabs } from '../../utils'
import { motion, AnimatePresence } from 'framer-motion'

export default function TabAnimation() {
    const [selectedTab, setSelectedTab] = useState(tabs[0])

    return (
        <div className="rounded-xl bg-semi-black overflow-hidden flex flex-col">
            <nav className="bg-gray-800 p-2 rounded-lg">
                <ul
                    className="list-none pb-4 m-0 flex w-full overflow-x-auto"
                    style={{
                        scrollbarWidth: 'thin',
                    }}
                >
                    {tabs.map((item) => (
                        <li
                            key={item.label}
                            className={'text-center rounded-md px-4 cursor-pointer' + (item === selectedTab ? ' text-white font-semibold bg-semi-black' : ' text-gray-300')}
                            onClick={() => setSelectedTab(item)}
                        >
                            <div className="flex flex-col relative">
                                <span className="text-lg">{item.icon}</span>
                                <span className="text-sm">
                                    {item.label}
                                    {item === selectedTab ? <motion.div className="absolute -bottom-[5px] left-0 right-0 h-[2px] bg-primary" layoutId="underline" /> : null}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="w-full h-full">
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={selectedTab ? selectedTab.label : 'empty'}
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}
                    >
                        <img className="p-10" src={selectedTab.src} alt="" />
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}
