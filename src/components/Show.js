import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Sidebar from './Sidebar'

import axios from 'axios'

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
        axios.delete(`https://localhost:44364/api/Courier/Delete/${id}`).then(
            res => {
              navigate('/employees')  
            },
            err => {}
        )
    }

  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex flex-col flex-1 h-screen overflow-y-hidden'>
            <div className='flex items-center justify-between h-16 px-6 border-b border-gray-400 shadow-slate-500 shadow bg-gray-100'>
                    <div className='font-bold text-xl text-gray-900'>All Employees</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
            </div>
            <div className='flex items-center justify-between h-16 px-6 w-full border-b border-gray-400'>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-blue-900 border border-gray-500 rounded-full'>TJ</div>
                        {employee.courier_name}
            </div>
        <div>
            <a className='bg-blue-900 px-2 py-1 rounded-lg' onClick={() => deleteUser(employee.courier_id)}>Delete</a>
        </div>
        <div>
            <button className='bg-blue-900 px-2 py-1 rounded-lg'>Update</button>
        </div>
        </div>
    </div>
  )
}

export default Show