import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'

import Employees from '../components/Home'

const router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/employees' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
