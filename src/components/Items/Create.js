import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Sidebar from '../Sidebar'

import axios from '../../axios'


const Create = () => {
    let navigate = useNavigate()
    const [item, setItem] = useState({})
    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        setItem(values => ({
            ...values,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("Add/Item", item).then(
            res => {
                navigate('/items')
            },
            err => {}
        )
    }
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
                <div className='flex items-center justify-between h-16 px-6 bg-gray-100 border-b border-gray-400 shadow shadow-slate-500'>
                    <div className='text-xl font-bold text-gray-900'>Add New Item</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                <div className='flex flex-col flex-1 overflow-y-hidden'>
                    <div className='p-6 overflow-x-hidden'>
                        <form onSubmit={handleSubmit}>
                            {/* employee name */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>Name</label>
                                <input name='item_name' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='Item Name' value={item.courier_name || ''} onChange={handleChange} />
                            </div>
                            {/* employee email */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>Quantity</label>
                                <input name='stock' type='number' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' min={1} max={2000} value={item.stock || ''} onChange={handleChange} />
                            </div>
                            {/* employee contact*/}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>Production date</label>
                                <input name='man_date' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' value={item.man_date || ''} onChange={handleChange} />
                            </div>
                            {/* employee location*/}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>Location</label>
                                <input name='exp_date' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' value={item.exp_date || ''} onChange={handleChange} />
                            </div>
                            <div className='flex justify-end'>
                                <button className='px-4 py-2 mr-5 text-red-700 border rounded hover:border-red-700'>
                                    <a href='/items'>Cancel</a>
                                </button>
                                <input type='submit' className='px-4 py-2 text-white bg-gray-800 rounded hover:bg-blue-900' value='Add' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
