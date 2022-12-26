import axios from '../axios'
import React from 'react'
import { Link } from 'react-router-dom'

import Sidebar from './Sidebar'


const Employees = () => {
    const [employees, setEmployee] = React.useState([])

    React.useEffect(() => {
        axios.get("View/Couriers").then(
            response => {
                console.log(response.data)
                debugger
                setEmployee(response.data)
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
                    <div className='flex'>
                        <div className='text-2xl font-bold text-gray-900'>All Employees</div>
                        <div className='ml-2 text-xl font-bold text-gray-900'>
                            <a href='/employee/create'>
                                <button className='hover:bg-gray-900 bg-blue-900 px-2 py-1 rounded rounded-lg text-sm ml-2 shadow shadow-blue-500 text-white'>Add</button>
                            </a>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                <div className='mt-2 ml-2'>
                    {employees.map((employee, index) => {
                        return (
                            <div key={index} className='flex items-center w-full h-16 px-6 border-b border-gray-400'>
                                <div className='flex items-center justify-center w-12 h-12 text-white bg-blue-900 border border-gray-500 rounded-full'>CT-{employee.courier_id}</div>
                                <Link className='ml-4 font-semibold text-lg' to={{ pathname: '/employee/' + employee.courier_id }}>{employee.courier_name}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Employees
