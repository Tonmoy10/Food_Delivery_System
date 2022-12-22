import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Employees from '../components/Home'

const router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/employees' element={<Employees />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
