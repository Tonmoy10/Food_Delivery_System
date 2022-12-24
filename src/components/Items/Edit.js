import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Sidebar from './Sidebar'

import axios from 'axios'

const Create = () => {
    let navigate = useNavigate()
    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getItem()
    }, [])

    const getItem = () => {
        axios.get(`https://localhost:44364/api/View/Item/${id}`).then(res => {
            setEmployee({
                item_id: res.data.item_id,
                item_name: res.data.item_name,
                stock: res.data.stock,
                unit_price: res.data.unit_price,
                man_date: res.data.man_date,
                exp_date: res.data.exp_date
            })
        })
    }

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
        axios.post('https://localhost:44364/api/Item/Update', item).then(
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
                    <div className='text-xl font-bold text-gray-900'>{item.item_id} - Edit</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                <div className='flex flex-col flex-1 overflow-y-hidden'>
                    <div className='p-6 overflow-x-hidden'>
                        <form onSubmit={handleSubmit}>
                            {/* item id */}
                            <div className='relative pb-4'>
                                <input readOnly hidden name='courier_id' type='text' value={item.item_id} />
                            </div>
                            {/* item name */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>Item</label>
                                <input name='item_name' readOnly type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' value={item.item_name} onChange={handleChange} />
                            </div>
                            {/* item stock */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>Stock</label>
                                <input name='email' type='number' min={1} className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' value={item.stock || ''} onChange={handleChange} />
                            </div>
                            {/* item manufacturing date*/}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>Production date</label>
                                <input name='contact' type='date' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' value={item.man_date} onChange={handleChange} />
                            </div>
                            {/* item expiry date*/}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>Expiry date</label>
                                <input name='location' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' value={item.exp_date || ''} onChange={handleChange} />
                            </div>

                            <div className='flex justify-end'>
                                <button className='px-4 py-2 mr-5 text-red-700 border rounded hover:border-red-700'>Cancel</button>
                                <input type='submit' className='px-4 py-2 text-white bg-gray-800 rounded hover:bg-blue-900' value='Update' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
