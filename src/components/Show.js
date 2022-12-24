import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Sidebar from './Sidebar'

import axios from 'axios'
import UserCircle from './UserCircle'

const Show = () => {
    let navigate = useNavigate();
    const [employee, setEmployee] = useState({});
    const {id} = useParams();

    React.useEffect(() => {
        axios.get(`https://localhost:44364/api/View/Courier/${id}`).then(response => {
            console.log(response.data)
            debugger
            setEmployee(response.data)
        },
        err => {
            debugger
        }) 
    }, []
    )

    const deleteUser = id => {
        axios.get(`https://localhost:44364/api/Courier/Delete/${id}`).then(
            res => {
              navigate('/employees')  
            },
            err => {}
        )
    }

  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex flex-col flex-1 h-screen overflow-y-hidden '>
            <div className='flex items-center justify-between h-16 px-6 border-b border-gray-400 shadow-slate-500 shadow bg-gray-100'>
                    <div className='font-bold text-xl text-gray-900'>{employee.courier_name}'s Details</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
            </div>
            {/* employee card */}
            <div className='flex'>
                <div className='shadow shadow-slate-800 mt-16 w-2/4 h-96 ml-24'>
                    <div className='flex ml-8 font-bold text-2xl tracking-wide items-center h-16 px-6 w-full mt-8 ml-12'>{employee.courier_name}</div>
                    <div className='ml-28'>
                        <div className='flex ml-2 font-semibold text-xl tracking-wide mt-4'>Employee ID: <span>EMP-{employee.courier_id}</span></div>
                        <div className='flex ml-2 font-semibold text-xl tracking-wide mt-4'>Email: {employee.email}</div>
                        <div className='flex ml-2 font-semibold text-xl tracking-wide mt-4'>Contact: {employee.contact}</div>
                        <div className='flex ml-2 font-semibold text-xl tracking-wide mt-4'>Location: {employee.location}</div>
                    </div>
                </div>
                {/* <div className='flex justify-end flex-1 mr-48 mt-32'>
                    <div className='flex flex-col items-center justify-center w-48 h-48 text-white text-4xl bg-gray-900 border border-gray-500 rounded-full'>TJ</div>
                </div>  */}
                <UserCircle name={employee.courier_name}/>
            </div>
            {/* buttons */}
            <div className='flex flex-1 justify-end mt-12 mr-52'>
                <div className=''>
                    <button type='submit' className='bg-red-900 text-white text-xl px-4 py-2 rounded-lg hover:bg-red-800 hover:shadow hover:shadow-red-500' onClick={() => deleteUser(employee.courier_id)}>Delete</button>
                </div>
                <div className='ml-4'>
                    <button className='bg-blue-900 px-6 py-2 text-xl text-white rounded-lg hover:bg-blue-800 hover:shadow hover:shadow-blue-500'>
                        <Link to={{pathname: '/employee/edit/' + employee.courier_id}}>Edit</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Show