import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Employees from '../components/Employees'
import Create from '../components/Create'
import Register from '../components/Register'
import Login from '../components/Login'

const router = () => {
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/employee/create' element={<Create />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
