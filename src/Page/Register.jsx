import React from 'react'
import {Link} from 'react-router-dom';



const Register = () => {
  return (
<div className='register2 flex items-center justify-center min-h-screen '>
  <div className='register shadow-lg rounded-lg p-8 max-w-md w-full'>
    <h2 className='text-2xl font-bold text-gray-1000 mb-6'>Register</h2>
    <form>
    <div className='mb-4'>
        <label className='block text-gray-1000 font-semibold mb-2'>Username</label>
        <input type='text' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus: outline-none focus: border-blue-500' placeholder='Enter your username'required/>
      </div>
    <div className='mb-4'>
        <label className='block text-gray-1000 font-semibold mb-2'>Email</label>
        <input type='email' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus: outline-none focus: border-blue-500' placeholder='Enter your email'required/>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-1000 font-semibold mb-2'>Phone</label>
        <input type='number' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus: outline-none focus: border-blue-500' placeholder='Phone'required/>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-1000 font-semibold mb-2'>Password</label>
        <input type='password' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus: outline-none focus: border-blue-500' placeholder='Enter your password'required/>
      </div>
      <button type='submit' className='w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition duration-300'>Log in</button>
    </form>
    <p className='text-center text-gray-1000 mt-4' >
      Don't have an account? <Link to={'/login'} className='text-blue-500 hover:underline'>Log in</Link>
    </p>
  </div>
</div>
  )
}

export default Register
