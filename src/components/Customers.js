import axios from '../axios'
import React from 'react'
import { Link } from 'react-router-dom'

import Sidebar from './Sidebar'


const Employees = () => {
    const [customers, setCustomer] = React.useState([])

    React.useEffect(() => {
        axios.get("View/Customers").then(
            response => {
                console.log(response.data)
                debugger
                setCustomer(response.data)
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
                    <div className='text-xl font-bold text-gray-900'>All Customers</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                {customers.map((customer, index) => {
                    return (
                        <div key={index} className='flex items-center w-full h-16 px-6 border-b border-gray-400'>
                            <div className='flex items-center justify-center w-10 h-10 text-white bg-blue-900 border border-gray-500 rounded-full'>TJ</div>
                            <Link to={{ pathname: '/customer/' + customer.customer_id }}>{customer.customer_name}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Employees
