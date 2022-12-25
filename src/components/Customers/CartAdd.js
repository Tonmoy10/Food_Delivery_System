import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Sidebar from '../Sidebar'

import axios from '../../axios'
// import UserCircle from './UserCircle'

const CartAdd = ({idd}) => {
    let navigate = useNavigate()
    const [item, setItem] = useState({})
    const [cart, setCart] = useState({})
    const [quantity, setQuantity] = useState(0)
    const { id } = useParams()

    React.useEffect(() => {
        axios.get(`View/Item/${id}`).then(
            response => {
                setItem(response.data)
                debugger
            },
            err => {}
        )
    }, [])

    const counter = () => {
        setQuantity((count) => {
            return count + 1
        })
    }

    const handleSubmit = e => {
        axios.get('getUser').then(
            res => {
                console.log(res.data)
                debugger
                setCart({
                    item_id : item.item_id,
                    total_price : item.unit_price * quantity,
                    customer_id : res.data
                })
            },
            err => {
                console.log(err)
            }
        )
        debugger
        
        // console.log(idd)
        axios.post('Add/Cart', cart).then(
            res => {
                navigate('/Item/List')
            },
            err => {
                console.log(cart)
            }
        )
    }

    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-1 h-screen overflow-y-hidden '>
                <div className='flex items-center justify-between h-16 px-6 bg-gray-100 border-b border-gray-400 shadow shadow-slate-500'>
                    <div className='text-xl font-bold text-gray-900'>{item.item_name}'s Details</div>
                    <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-900 border border-gray-500 rounded-full shadow shadow-slate-400 hover:cursor-pointer hover:shadow-slate-900 hover:shadow'>TJ</div>
                </div>
                {/* employee card */}
                <div className='flex'>
                    <div className='w-2/4 mt-16 ml-24 shadow shadow-slate-800 h-96'>
                        <div className='flex items-center w-full h-16 px-6 mt-8 ml-12 text-2xl font-bold tracking-wide'>{item.item_name}</div>
                        <div className='ml-28'>
                            {/* <div className='flex mt-4 ml-2 text-xl font-semibold tracking-wide'>
                                Food ID: <span>FD-{item.item_id}</span>
                            </div> */}
                            <div className='flex mt-4 ml-2 text-xl font-semibold tracking-wide'>Unit Price: {item.unit_price}</div>
                            <input name="quantity" type="number" min="0" placeholder='quantity' onClick={counter}/>
                        </div>
                    </div>
                    {/* <div className='flex justify-end flex-1 mt-32 mr-48'>
                    <div className='flex flex-col items-center justify-center w-48 h-48 text-4xl text-white bg-gray-900 border border-gray-500 rounded-full'>TJ</div>
                </div>  */}
                    {/* <UserCircle name={employee.courier_name} /> */}
                </div>
                {/* buttons */}
                <div className='flex justify-end flex-1 mt-12 mr-52'>
                    {/* <div className=''>
                        <button type='submit' className='px-4 py-2 text-xl text-white bg-red-900 rounded-lg hover:bg-red-800 hover:shadow hover:shadow-red-500' onClick={() => deleteItem(item.item_id)}>
                            Delete
                        </button>
                    </div> */}
                    <div className='ml-4'>
                        {/* give condition, if less than 200 then button otherwise not */}
                
                            <button onClick={()=>handleSubmit()} className='px-6 py-2 text-xl text-white bg-blue-900 rounded-lg hover:bg-blue-800 hover:shadow hover:shadow-blue-500'>
                                Add
                            </button>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartAdd
