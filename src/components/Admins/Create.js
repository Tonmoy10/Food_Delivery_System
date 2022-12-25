import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Sidebar from '../Sidebar'

import axios from '../../axios'

const Create = () => {
    let navigate = useNavigate()
    const [admin, setAdmin] = useState({})
    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        setUser(values => ({
            ...values,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("Admin/Add", user).then(
            res => {
                navigate('/admins')
            },
            err => {
            }
        )
    }
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
                <div className='flex items-center justify-between h-16 px-6 border-b border-gray-400 shadow-slate-500 shadow bg-gray-100'>
                    <div className='font-bold text-xl text-gray-900'>Add New Admin</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                <div className='flex flex-col flex-1 overflow-y-hidden'>
                    <div className='p-6 overflow-x-hidden'>
                        <form onSubmit={handleSubmit}>
                            {/* employee name */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Name
                                </label>
                                <input name='admin_name' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='Admin Name' value={admin.admin_name || ''} onChange={handleChange} />
                            </div>
                            {/* employee email */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Email
                                </label>
                                <input name='email' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='employee@xyz.bd' value={admin.email || ''} onChange={handleChange} />
                            </div>
                            {/* employee contact*/}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Contact
                                </label>
                                <input name='contact' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='+880 xxxx xxxxxx' value={admin.contact || ''} onChange={handleChange} />
                            </div>
                            {/* password */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Password
                                </label>
                                <input name='password' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='********' value={admin.password || ''} onChange={handleChange} />
                            </div>
                            <div className='flex justify-end'>
                                <button className='px-4 py-2 mr-5 text-red-700 border rounded hover:border-red-700'>Cancel</button>
                                <input type='submit' className='px-4 py-2 text-white bg-gray-800 rounded hover:bg-blue-900' value="Add"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
