import axios from 'axios'
import React from 'react'

import Sidebar from './Sidebar'

const baseURL = 'https://localhost:44364/api/Admin/ViewAll'

const Employees = () => {
    const [employees, setEmployee] = React.useState([])

    React.useEffect(() => {
        axios.get(baseURL).then(
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
        <div className="flex">
            <Sidebar/>
            <div>
            {/* <div className='shadow-2xl shadow-indigo-600'>
                <div className='flex justify-end mr-32'>
                    <button className='px-5 py-1 mt-4 font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800'>
                        <a href='/employee/create'>Add</a>
                    </button>
                </div>
            </div> */}
            {
                employees.map((employee) => {
                    return (
                        <p>{employee.id}</p>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Employees
