import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FAQ from '../pages/FAQ'
import Home from '../pages/Home'

export default function Index() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/faq" element={<FAQ />}></Route>
            </Routes>
        </>
    )
}
