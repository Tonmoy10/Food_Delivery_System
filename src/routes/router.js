import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Register from '../components/Register'
import Login from '../components/Login'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

import Employees from '../components/Employees'
import CreateEmployee from '../components/Create'
import ShowEmployee from '../components/Show'
import EditEmployee from '../components/Edit'

import Items from '../components/Items/Items'
import CreateItem from '../components/Items/Create'
import ShowItem from '../components/Items/Show'
import EditItem from '../components/Items/Edit'

const router = () => {
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} />

                {/* Admins */}

                {/* Employees */}
                <Route path='/employees' element={<Employees />} />
                <Route path='/employee/create' element={<CreateEmployee />} />
                <Route path='/employee/:id' element={<ShowEmployee />} />
                <Route path='/employee/edit/:id' element={<EditEmployee />} />

                {/* Items */}
                <Route path='/items' element={<Items />} />
                <Route path='/item/create' element={<CreateItem />} />
                <Route path='/item/:id' element={<ShowItem />} />
                <Route path='/item/edit/:id' element={<EditItem />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
