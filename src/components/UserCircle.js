import React from 'react'

const UserCircle = () => {
    const username = (name) => {
        return this.name.match(/[A-Z]/g).slice(0,2).join('');
    }
  return (
    <div className='flex justify-end flex-1 mr-48 mt-32'>
        <div className='flex flex-col items-center justify-center w-48 h-48 text-white text-4xl bg-gray-900 border border-gray-500 rounded-full'>
            {username}
        </div>
    </div> 
  )
}

export default UserCircle