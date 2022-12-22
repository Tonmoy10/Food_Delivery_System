import axios from 'axios'
import React from 'react'

const baseURL = 'http://localhost:44364/api/view/couriers'

const Home = () => {
    const [employees, setEmployee] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseURL).then(response => {
            setEmployee(response.data)
        })
    }, [])

    //if (!post) return null

    return (
        <div>
            {employees.map(employee => (
                <p>{employee.courier_name}</p>
            ))}
        </div>
    )
}

export default Home
