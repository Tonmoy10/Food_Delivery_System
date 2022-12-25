import axios from '../../axios'
import React from 'react'
import { Link } from 'react-router-dom'

import Sidebar from '../Sidebar'


const Admins = () => {
    const [admins, setAdmin] = React.useState([])

    React.useEffect(() => {
        axios.get("Admin/ViewAll").then(
            response => {
                setAdmin(response.data)
            },
            err => {}
        )
    }, [])

    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
                <div className='flex items-center justify-between h-16 px-6 bg-gray-100 border-b border-gray-400 shadow shadow-slate-500'>
                    <div className='flex items-center justify-between text-xl font-bold text-gray-900'>
                        <div>All Admins</div>
                        <div className='ml-4 mt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" width="20px" height="20px">
                            <path fill="#32BEA6" d="M7.9,256C7.9,119,119,7.9,256,7.9C393,7.9,504.1,119,504.1,256c0,137-111.1,248.1-248.1,248.1C119,504.1,7.9,393,7.9,256z"/><path fill="#FFF" d="M391.5,214.5H297v-93.9c0-4-3.2-7.2-7.2-7.2h-68.1c-4,0-7.2,3.2-7.2,7.2v93.9h-93.9c-4,0-7.2,3.2-7.2,7.2v69.2c0,4,3.2,7.2,7.2,7.2h93.9v93.4c0,4,3.2,7.2,7.2,7.2h68.1c4,0,7.2-3.2,7.2-7.2v-93.4h94.5c4,0,7.2-3.2,7.2-7.2v-69.2C398.7,217.7,395.4,214.5,391.5,214.5z"/></svg>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                {admins.map((admin, index) => {
                    return (
                        <div key={index} className='flex items-center w-full h-16 px-6 border-b border-gray-400'>
                            <div className='flex items-center justify-center w-10 h-10 text-white bg-blue-900 border border-gray-500 rounded-full'>TS</div>
                            <Link to={{ pathname: '/admin/' + admin.admin_id }}>{admin.admin_name}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Admins
