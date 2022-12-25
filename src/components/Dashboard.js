import React from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'

const Dashboard = () => {
    const [users, setUsers] = React.useState(0)

    React.useEffect(() => {
        axios.get("user/count").then(
            response => {
                setUsers(response.data)
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
                <div className='flex items-center justify-between h-16 px-6 border-b border-gray-400 shadow-slate-500 shadow bg-gray-100'>
                    <div className='font-bold text-xl text-gray-900'>Dashboard</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                <main className='flex justify-center flex-1'>
                    <div className='container mx-12 mt-12'>
                        <div className='grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3'>
                            <div className='w-full px-4 py-5 bg-gray-700  rounded-lg shadow shadow-teal-900'>
                                <div className='text-sm font-medium text-white truncate'>Total users</div>
                                <div className='mt-1 text-3xl font-semibold text-white'>50</div>
                            </div>
                            <div className='w-full px-4 py-5 bg-gray-700  rounded-lg shadow shadow-teal-900'>
                                <div className='text-sm font-medium text-white truncate'>Total Profit</div>
                                <div className='mt-1 text-3xl font-semibold text-white'>BDT 4500</div>
                            </div>
                            <div className='w-full px-4 py-5 bg-gray-700  rounded-lg shadow shadow-teal-900'>
                                <div className='text-sm font-medium text-white truncate'>Total Orders</div>
                                <div className='mt-1 text-3xl font-semibold text-white'>20</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard
