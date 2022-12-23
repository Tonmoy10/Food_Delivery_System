import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Sidebar from './Sidebar'

import axios from 'axios'

const baseURL = 'https://localhost:44364/api/Add/Courier'

const Create = () => {
    let navigate = useNavigate()
    const [user, setUser] = useState({})
    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        setUser(values => ({
            ...values,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        axios.post(baseURL, user).then(
            res => {
                navigate('/employees')
            },
            err => {}
        )
    }
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
                <div className='flex items-center justify-between h-16 px-6 border-b border-gray-400'>
                    <div>Contacts</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-blue-900 border border-gray-500 rounded-full'>TJ</div>
                </div>
                <div className='flex flex-col flex-1 overflow-y-hidden'>
                    <div className='p-6 overflow-x-hidden'>
                        <form action=''>
                            {/* employee name */}
                            <div className='relative pb-4'>
                                <label htmlFor='name' className='absolute text-sm font-bold text-blue-900 uppercase'>
                                    Name
                                </label>
                                <input id='name' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='Employee Name' value={user.courier_name || ''} onChange={handleChange} />
                            </div>
                            {/* employee email */}
                            <div className='relative pb-4'>
                                <label htmlFor='name' className='absolute text-sm font-bold text-blue-900 uppercase'>
                                    Email
                                </label>
                                <input id='name' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='employee@xyz.bd' value={user.email || ''} onChange={handleChange} />
                            </div>
                            {/* employee contact*/}
                            <div className='relative pb-4'>
                                <label htmlFor='name' className='absolute text-sm font-bold text-blue-900 uppercase'>
                                    Contact
                                </label>
                                <input id='name' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='+880 xxxx xxxxxx' value={user.contact || ''} onChange={handleChange} />
                            </div>
                            {/* employee location*/}
                            <div className='relative pb-4'>
                                <label htmlFor='name' className='absolute text-sm font-bold text-blue-900 uppercase'>
                                    Location
                                </label>
                                <input id='name' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='Employee Location' value={user.location || ''} onChange={handleChange} />
                            </div>
                            {/* employee income */}
                            <div className='relative pb-4'>
                                <label htmlFor='name' className='absolute text-sm font-bold text-blue-900 uppercase'>
                                    Income
                                </label>
                                <input id='name' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='BDT 0.00' value={user.income || ''} onChange={handleChange} />
                            </div>
                            {/* password */}
                            <div className='relative pb-4'>
                                <label htmlFor='name' className='absolute text-sm font-bold text-blue-900 uppercase'>
                                    Password
                                </label>
                                <input id='name' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='********' value={user.password || ''} onChange={handleChange} />
                            </div>
                            <div className='flex justify-end'>
                                <button className='px-4 py-2 mr-5 text-red-700 border rounded hover:border-red-700'>Cancel</button>
                                <button className='px-4 py-2 text-white bg-blue-800 rounded hover:bg-blue-900'>Add New Employee</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
