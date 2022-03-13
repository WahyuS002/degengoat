import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FAQ from '../pages/FAQ'
import Home from '../pages/Home'
import Team from '../pages/Team'
import ShuffleIndex from '../pages/shuffle/Index'

export default function Index() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/faq" element={<FAQ />}></Route>
                <Route path="/team" element={<Team />}></Route>

                <Route path="/shuffle" element={<ShuffleIndex />}></Route>
            </Routes>
        </>
    )
}
