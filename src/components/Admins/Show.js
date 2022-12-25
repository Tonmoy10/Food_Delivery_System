import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Sidebar from '../Sidebar'

import axios from '../../axios'
// import UserCircle from './UserCircle'

const Show = () => {
    let navigate = useNavigate()
    const [admin, setAdmin] = useState({})
    const { id } = useParams()

    React.useEffect(() => {
        axios.get(`Admin/View/${id}`).then(
            response => {
                setAdmin(response.data)
            },
            err => {}
        )
    }, [])

    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden '>
                <div className='flex items-center justify-between h-16 px-6 bg-gray-100 border-b border-gray-400 shadow shadow-slate-500'>
                    <div className='text-xl font-bold text-gray-900'>{admin.admin_name}'s Details</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                {/* employee card */}
                <div className='flex'>
                    <div className='w-2/4 mt-16 ml-24 shadow shadow-slate-800 h-96'>
                        <div className='flex items-center w-full h-16 px-6 mt-8 ml-12 text-2xl font-bold tracking-wide'>{admin.admin_name}</div>
                        <div className='ml-28'>
                            <div className='flex mt-4 ml-2 text-xl font-semibold tracking-wide'>
                                Admin ID: <span>ADM-{admin.admin_id}</span>
                            </div>
                            <div className='flex mt-4 ml-2 text-xl font-semibold tracking-wide'>Email: {admin.email}</div>
                            <div className='flex mt-4 ml-2 text-xl font-semibold tracking-wide'>Contact: {admin.contact}</div>
                        </div>
                    </div>
                    {/* <div className='flex justify-end flex-1 mt-32 mr-48'>
                    <div className='flex flex-col items-center justify-center w-48 h-48 text-4xl text-white bg-gray-900 border border-gray-500 rounded-full'>TJ</div>
                </div>  */}
                    {/* <UserCircle name={employee.courier_name}/> */}
                </div>
            </div>
        </div>
    )
}

export default Show
