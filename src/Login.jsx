import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState();
  const navigate=useNavigate()

  const handleSubmit = async(e)=>{
    try {
        e.preventDefault();
        console.log("this is login page")
        const res=await axios.post('http://localhost:3001/login',{email,password})
        console.log("result",res)
        console.log("this is loginRegistraion page3")
        navigate('/home')
    } catch (error) {
         console.log(error)
    }
   
};


  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
                <input 
                type="email"
                placeholder='Enter email'
                autoComplete='off'
                name='email'
                className='form-control-rounded-0'
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>

            <div className='mb-3'>
                <label htmlFor='password'>
                    <strong>Password</strong>
                </label>
                <input 
                type="password"
                placeholder='Enter password'
                autoComplete='off'
                name='password'
                className='form-control-rounded-0'
                onChange={(e)=>setPassword(e.target.value)}
                />

            </div>
            <button type='submit' className="btn btn-success w-100 rounded-0">
                Login
            </button>
            </form>
            <p>Already Have an Account</p>
            <Link to="/register" className="btn btn-success border w-100 bg-black rounded-0 text-decoration-none">
                Sign Up
            </Link>
        
    </div>
  
</div>
  );
}

export default Login;
