import React from 'react'

export default function Registration() {
    return (
        <div>
            <div className='flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50'>
                <div>
                    <a href='/'>FOOOOOOD</a>
                </div>
                <div className='w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg'>
                    <form>
                        <div className='mt-2'>
                            <label for='name' className='block text-sm font-semibold text-blue-900'>
                                Name
                            </label>
                            <input type='text' className='block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' />
                        </div>
                        <div className='mt-2'>
                            <label for='email' className='block text-sm font-semibold text-blue-900'>
                                Email
                            </label>
                            <input type='email' className='block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' />
                        </div>
                        <div className='mt-2'>
                            <label for='password' className='block text-sm font-semibold text-blue-900'>
                                Password
                            </label>
                            <input type='password' className='block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' />
                        </div>
                        <div className='mt-2'>
                            <label for='confirm_password' className='block text-sm font-semibold text-blue-900'>
                                Confirm Password
                            </label>
                            <input type='password' className='block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' />
                        </div>
                        <a href='#' className='text-xs text-blue-700 hover:underline'>
                            Forget Password?
                        </a>
                        <div className='flex items-center mt-4'>
                            <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-gray-700'>Register</button>
                        </div>
                    </form>
                    <div className='mt-4 text-grey-700'>
                        Already have an account?{' '}
                        <span>
                            <a className='text-blue-700 hover:underline' href='/login'>
                                Log in
                            </a>
                        </span>
                    </div>
                    <div className='flex items-center w-full my-4'>
                        <hr className='w-full' />
                        <p className='px-3 '>OR</p>
                        <hr className='w-full' />
                    </div>
                    <div className='my-6 space-y-2'>
                        <button aria-label='Login with Google' type='button' className='flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' className='w-5 h-5 fill-current'>
                                <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                        <button aria-label='Login with GitHub' role='button' className='flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' width='30px' height='30px'>
                                {' '}
                                <path d='M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z' />
                            </svg>
                            <p>Login with Facebook</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
