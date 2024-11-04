import React from 'react'
import {Link} from 'react-router-dom';



const Login = () => {
  return (
<div className='login flex items-center justify-center min-h-screen '>
  <div className='login2 shadow-lg rounded-lg p-8 max-w-md w-full'>
    <h2 className='text-2xl font-bold text-gray-1000 mb-6'>Log in</h2>
    <form>
    <div className='mb-4'>
        <label className='block text-gray-1000 font-semibold mb-2'>Email</label>
        <input type='email' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus: outline-none focus: border-blue-500' placeholder='Enter your email'required/>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-1000 font-semibold mb-2'>Password</label>
        <input type='password' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus: outline-none focus: border-blue-500' placeholder='Enter your password'required/>
      </div>
      <button type='submit' className='w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition duration-300'>Log in</button>
    </form>
    <p className='text-center text-gray-1000 mt-4' >
      Don't have an account? <Link to={'/register'} className='text-blue-500 hover:underline'>Register</Link>
    </p>
  </div>
</div>
  )
}

export default Login
