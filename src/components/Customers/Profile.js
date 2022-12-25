import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import Sidebar from '../Sidebar'

import axios from '../../axios'

const Profile = () => {
    let navigate = useNavigate()
    const [customer, setCustomer] = useState({})
    const [id, setId] = useState(1)

    React.useEffect(() => {
        axios.get('getUser').then(
            response => {
                setId(response.data)
                debugger
            },
            err => {}
        )
        axios.get(`View/Customer/${id}`).then(
            res => {
                setCustomer(res.data)
                debugger
            },
            err => {
                console.log(err)
            }
        )
    }, [])

    const handleSubmit = e => {
        axios.get('getUser').then(
            res => {
                console.log(res.data)
                debugger
                setCart({
                    item_id : item.item_id,
                    total_price : item.unit_price * quantity,
                    customer_id : res.data
                })
            },
            err => {
                console.log(err)
            }
        )
        debugger
        
        // console.log(idd)
        axios.post('Add/Cart', cart).then(
            res => {
                navigate('/Item/List')
            },
            err => {
                console.log(cart)
            }
        )
    }
    
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
                <div className='flex items-center justify-between h-16 px-6 border-b border-gray-400 shadow-slate-500 shadow bg-gray-100'>
                    <div className='font-bold text-xl text-gray-900'>Profile</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                <div className='flex flex-col flex-1 overflow-y-hidden'>
                    <div className='p-6 overflow-x-hidden'>
                            {/* employee name */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Name
                                </label>
                                <input name='customer_name' readOnly type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='Admin Name' value={customer.customer_name || ''} />
                            </div>
                            {/* employee email */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Email
                                </label>
                                <input name='email' readOnly type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='employee@xyz.bd' value={customer.email || ''} />
                            </div>
                            {/* employee contact*/}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Contact
                                </label>
                                <input name='contact' readOnly type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='+880 xxxx xxxxxx' value={customer.contact || ''} />
                            </div>
                            {/* password */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Location
                                </label>
                                <input name='location' readOnly type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='********' value={customer.location || ''} />
                            </div>
                            <div className='flex justify-end'>
                                <a href='/customer/edit'>
                                    <button className='px-4 py-2 mr-5 text-red-700 border rounded hover:border-red-700'>Edit</button>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
