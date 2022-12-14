import jwt_decode from 'jwt-decode'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import DomainContext from '../context/DomainContext'
export const Login = () => {
  const [message,setMessage]=useState('')
  const {token , setToken,setUserId} = useContext(AuthContext)
  const {domain}= useContext(DomainContext)
  const handleLogin = async(e)=>{
    e.preventDefault()
    const response = await fetch(`${domain}api/token/`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email : e.target.email.value,
            password :e.target.password.value
        })
    })
    if(response.status ===200){
        const data = await response.json()
        setToken(data.access)
        setUserId(jwt_decode(data.access).user_id)
        localStorage.setItem('token_jwt',data.access)
    }
    if(response.status==401){
      setMessage('creadentials not matching')
    }
}

  return (
    <form onSubmit={handleLogin} className='login'>
      <h1>login</h1>
      <input name='email' type='email' placeholder='email' className='email'/>
      <input name='password' type='password' placeholder='password' className='password'/>
      <input type='submit'/>
      <h2>{message}</h2>
      <div className='link'>
        if you dont have an account <Link to='/signup/'>signup</Link>          
      </div>
    </form>
  )
}