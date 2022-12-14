import axios from '../../axios'
import React from 'react'
import { Link } from 'react-router-dom'

import Sidebar from '../Sidebar'

const baseURL = 'https://localhost:44364/api/View/Items'

const Items = () => {
    const [items, setItem] = React.useState([])

    React.useEffect(() => {
        axios.get("View/Items").then(
            response => {
                console.log(response.data)
                debugger
                setItem(response.data)
            },
            err => {
                debugger
            }
        )
    }, [])

    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
                <div className='flex items-center justify-between h-16 px-6 bg-gray-100 border-b border-gray-400 shadow shadow-slate-500'>
                    <div className='text-2xl font-bold text-gray-900'>All Items</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                <div className='ml-2 mt-2'>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='flex items-center w-full h-16 px-6 border-b border-gray-400'>
                                <div className='flex items-center justify-center w-12 h-12 text-white bg-blue-900 border border-gray-500 rounded-full'>IT-{item.item_id}</div>
                                <Link to={{ pathname: '/item/' + item.item_id }}>{item.item_name}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Items
