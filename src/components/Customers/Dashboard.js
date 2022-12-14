import React from 'react'
import Sidebar from '../Sidebar'

const Dashboard = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
                <div className='flex items-center justify-between h-16 px-6 border-b border-gray-400 shadow-slate-500 shadow bg-gray-100'>
                    <div className='font-bold text-xl text-gray-900'>Dashboard</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                <main className='flex justify-end flex-1'>
                    <div className='container mx-12 mt-12'>
                        <div className='grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3'>
                            <div className='w-full px-4 py-5 bg-gray-700  rounded-lg shadow shadow-teal-900'>
                                <div className='mt-1 text-3xl font-semibold text-white'>
                                    <a href='/Item/List'>Place Order</a>
                                </div>
                            </div>
                            <div className='w-full px-4 py-5 bg-gray-700  rounded-lg shadow shadow-teal-900'>
                                <div className='mt-1 text-3xl font-semibold text-white'>
                                    <a href='/orders'>View Orders</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard
