import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Sidebar from './Sidebar'

import axios from 'axios'
import UserCircle from './UserCircle'

const Show = () => {
    let navigate = useNavigate()
    const [item, setItem] = useState({})
    const { id } = useParams()

    React.useEffect(() => {
        axios.get(`https://localhost:44364/api/View/Item/${id}`).then(
            response => {
                setItem(response.data)
            },
            err => {}
        )
    }, [])

    const deleteItem = id => {
        axios.get(`https://localhost:44364/api/Item/Delete/${id}`).then(
            res => {
                navigate('/items')
            },
            err => {}
        )
    }

    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden '>
                <div className='flex items-center justify-between h-16 px-6 bg-gray-100 border-b border-gray-400 shadow shadow-slate-500'>
                    <div className='text-xl font-bold text-gray-900'>{item.item_name}'s Details</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                {/* employee card */}
                <div className='flex'>
                    <div className='w-2/4 mt-16 ml-24 shadow shadow-slate-800 h-96'>
                        <div className='flex items-center w-full h-16 px-6 mt-8 ml-12 text-2xl font-bold tracking-wide'>{item.item_name}</div>
                        <div className='ml-28'>
                            <div className='flex mt-4 ml-2 text-xl font-semibold tracking-wide'>
                                Food ID: <span>FD-{item.item_id}</span>
                            </div>
                            <div className='flex mt-4 ml-2 text-xl font-semibold tracking-wide'>Quantity: {item.stock}</div>
                            <div className='flex mt-4 ml-2 text-xl font-semibold tracking-wide'>Unit Price: {item.unit_price}</div>
                            <div className='flex mt-4 ml-2 text-xl font-semibold tracking-wide'>Production Date: {item.man_date}</div>
                            <div className='flex mt-4 ml-2 text-xl font-semibold tracking-wide bg-slate-400'>Expiry Date: {item.exp_date}</div>
                        </div>
                    </div>
                    {/* <div className='flex justify-end flex-1 mt-32 mr-48'>
                    <div className='flex flex-col items-center justify-center w-48 h-48 text-4xl text-white bg-gray-900 border border-gray-500 rounded-full'>TJ</div>
                </div>  */}
                    {/* <UserCircle name={employee.courier_name} /> */}
                </div>
                {/* buttons */}
                <div className='flex justify-end flex-1 mt-12 mr-52'>
                    {/* <div className=''>
                        <button type='submit' className='px-4 py-2 text-xl text-white bg-red-900 rounded-lg hover:bg-red-800 hover:shadow hover:shadow-red-500' onClick={() => deleteItem(item.item_id)}>
                            Delete
                        </button>
                    </div> */}
                    <div className='ml-4'>
                        {/* give condition, if less than 200 then button otherwise not */}
                        if (){' '}
                        {
                            <button className='px-6 py-2 text-xl text-white bg-blue-900 rounded-lg hover:bg-blue-800 hover:shadow hover:shadow-blue-500'>
                                <Link to={{ pathname: '/item/edit/' + item.item_id }}>Restock</Link>
                            </button>
                        }{' '}
                        else {}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Show
