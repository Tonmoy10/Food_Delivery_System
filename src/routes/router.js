import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Register from '../components/Register'
import Login from '../components/Login'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import DashboardAdmin from '../components/Dashboard'
import Admins from '../components/Admins/Admins'
import CreateAdmin from '../components/Admins/Create'
import ShowAdmin from '../components/Admins/Show'

import Employees from '../components/Employees'
import CreateEmployee from '../components/Create'
import ShowEmployee from '../components/Show'
import EditEmployee from '../components/Edit'

import Items from '../components/Items/Items'
import CreateItem from '../components/Items/Create'
import ShowItem from '../components/Items/Show'
import EditItem from '../components/Items/Edit'

import Customers from '../components/Customers'
import Orders from '../components/Orders.js/Orders'

import DashboardCustomer from '../components/Customers/Dashboard'
import ViewItems from '../components/Customers/ViewItems'
import CartAdd from '../components/Customers/CartAdd'
import ViewCart from '../components/Customers/ViewCart'

const router = () => {
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                {/* Admins */}
                <Route path='/dashboard' element={<DashboardAdmin />} />
                <Route path='/admins' element={<Admins />} />
                <Route path='/admin/create' element={<CreateAdmin/>}/>
                <Route path='/admin/:id' element={<ShowAdmin />} />

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

                {/* Orders */}
                <Route path='/orders' element={<Orders />} />

                {/* Customer */}
                <Route path='/dashboard/customer' element={<DashboardCustomer/>}/>
                <Route path='/customers' element={<Customers/>}/>
                <Route path='/Item/List' element={<ViewItems />} />
                <Route path='/Add/Cart/:id' element={<CartAdd />} />
                <Route path='/view/cart' element={<ViewCart/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
