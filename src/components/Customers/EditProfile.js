import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import Sidebar from '../Sidebar'

import axios from '../../axios'

const EditProfile = () => {
    let navigate = useNavigate()
    const [customer, setCustomer] = useState({})
    const [id, setId] = useState(1)

    React.useEffect(() => {
        axios.get('getUser').then(
            response => {
                setId(response.data)
                debugger
            },
            err => {}
        )
        axios.get(`View/Customer/${id}`).then(
            res => {
                setCustomer(res.data)
                debugger
            },
            err => {
                console.log(err)
            }
        )
    }, [])

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        setCustomer(values => ({
            ...values,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('Customer/Update', customer).then(
            res => {
                navigate('/customer/profile')
            },
            err => {
                console.log(err)
            }
        )
        debugger
    }
    
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
                <div className='flex items-center justify-between h-16 px-6 border-b border-gray-400 shadow-slate-500 shadow bg-gray-100'>
                    <div className='font-bold text-xl text-gray-900'>Edit Profile</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                <div className='flex flex-col flex-1 overflow-y-hidden'>
                    <div className='p-6 overflow-x-hidden'>
                        <form onSubmit={handleSubmit}>
                            {/* employee name */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    ID
                                </label>
                                <input name='customer_id' readOnly type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='Customer ID' value={customer.customer_id || ''} onChange={handleChange} />
                            </div>
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Name
                                </label>
                                <input name='customer_name' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='Admin Name' value={customer.customer_name} onChange={handleChange} />
                            </div>
                            {/* employee email */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Email
                                </label>
                                <input name='email' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='employee@xyz.bd' value={customer.email || ''} onChange={handleChange} />
                            </div>
                            {/* employee contact*/}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Contact
                                </label>
                                <input name='contact' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='+880 xxxx xxxxxx' value={customer.contact || ''} onChange={handleChange} />
                            </div>
                            {/* password */}
                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                
                                </label>
                                <input name='password' hidden type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='********' value={customer.password || ''} onChange={handleChange} />
                            </div>

                            <div className='relative pb-4'>
                                <label className='absolute text-sm font-bold text-gray-900 uppercase'>
                                    Location
                                </label>
                                <input name='location' type='text' className='w-full pt-8 pb-2 text-gray-900 border-b focus:outline-none focus:border-blue-500' placeholder='********' value={customer.location || ''} onChange={handleChange} />
                            </div>
                            <div className='flex justify-end'>
                                <input type='submit' className='px-4 py-2 text-white bg-gray-800 rounded hover:bg-blue-900' value="Update"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
