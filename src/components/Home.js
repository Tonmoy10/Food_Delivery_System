import axios from 'axios'
import React from 'react'

const baseURL = 'https://localhost:44364/api/Admin/ViewAll'

const Home = () => {
    const [employees, setEmployee] = React.useState([])

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data)
            debugger
            setEmployee(response.data)
        },
        (err)=> {
            debugger
        })
    }, [])

    //if (!post) return null

    return (
        <div>
            {employees.map(employee => (
                <p>{employee.admin_name}</p>
            ))}
        </div>
    )
}

export default Home
