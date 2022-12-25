import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Sidebar from './Sidebar'

import axios from '../axios'


const Create = () => {
    let navigate = useNavigate()
    const [employee, setEmployee] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        axios.get(`View/Courier/${id}`).then(res => {
            setEmployee({
                courier_id: res.data.courier_id,
                courier_name: res.data.courier_name,
                email: res.data.email,
                contact: res.data.contact,
                location: res.data.location,
                income: res.data.income,
                password: res.data.password,
                user_id: res.data.user_id
            })
        })
    }

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        setEmployee(values => ({
            ...values,
            [name]: value
        }))
        //console.log(employee)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(employee)
        axios.post('Courier/Update', employee).then(
            res => {
                navigate('/employees')
                // debugger
            },
            err => {
                console.log(employee)
                console.log(err)
            }
        )
    }
    

    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
                <div className='flex items-center justify-between h-16 px-6 border-b border-gray-400 shadow-slate-500 shadow bg-gray-100'>
                    <div className='font-bold text-xl text-gray-900'>Edit {employee.courier_name}'s Details</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                <div className='flex flex-col flex-1 overflow-y-hidden'>
                    <div className='p-6 overflow-x-hidden'>
                        <form onSubmit={handleSubmit}>
                            {/* employee id */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Employee ID
                                </label>
                                <input readOnly name='courier_id' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='Employee Name' value={employee.courier_id} />
                            </div>
                            {/* employee name */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Name
                                </label>
                                <input name='courier_name' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='Employee Name' value={employee.courier_name || ''} onChange={handleChange} />
                            </div>
                            {/* employee email */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Email
                                </label>
                                <input name='email' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='employee@xyz.bd' value={employee.email || ''} onChange={handleChange} />
                            </div>
                            {/* employee contact*/}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Contact
                                </label>
                                <input name='contact' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='+880 xxxx xxxxxx' value={employee.contact || ''} onChange={handleChange} />
                            </div>
                            {/* employee location*/}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Location
                                </label>
                                <input name='location' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='Employee Location' value={employee.location || ''} onChange={handleChange} />
                            </div>
                            {/* employee income */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Income
                                </label>
                                <input name='income' type='text' readOnly className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='BDT 0.00' value={0} onChange={handleChange} />
                            </div>
                            {/* password */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Password
                                </label>
                                <input name='password' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='********' value={employee.password || ''} onChange={handleChange} />
                            </div>
                            <div className='flex justify-end'>
                                <button className='px-4 py-2 mr-5 text-red-700 border rounded hover:border-red-700'>Cancel</button>
                                <input type='submit' className='px-4 py-2 text-white bg-gray-800 rounded hover:bg-blue-900' value="Update"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
