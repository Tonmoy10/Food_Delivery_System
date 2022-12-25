import axios from '../../axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Sidebar from '../Sidebar'


const ViewCart = () => {
    const [cart, setCart] = React.useState([])
    let navigate = useNavigate()
    React.useEffect(() => {
        axios.get("View/Carts").then(
            response => {
                console.log(response.data)
                debugger
                setCart(response.data)
            },
            err => {
                debugger
            }
        )
    }, [])

    const handleSubmit = e => {
        axios.get('new/order').then(
            res => {
                console.log(res.data)
                navigate('/dashboard/customer')
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
                <div className='flex items-center justify-between h-16 px-6 bg-gray-100 border-b border-gray-400 shadow shadow-slate-500'>
                    <div className='text-xl font-bold text-gray-900'>Cart Items</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                {cart.map((item, index) => {
                    return (
                        <div key={index} className='flex items-center w-full h-16 px-6 border-b border-gray-400'>
                            <div className='flex items-center justify-center w-10 h-10 text-white bg-blue-900 border border-gray-500 rounded-full'>CRT-{item.cart_id}</div>
                            {/* <Link to={{ pathname: '/Add/Cart/' + item.item_id }}>{cart.customer_id}</Link> */}
                            {/* <p>{item.customer_id}</p> */}
                            <p>{item.total_price}</p>
                            
                        </div>
                    )
                })}
                <div className='ml-4'>                
                    <button onClick={()=>handleSubmit()} className='px-6 py-2 text-xl text-white bg-blue-900 rounded-lg hover:bg-blue-800 hover:shadow hover:shadow-blue-500'>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewCart
