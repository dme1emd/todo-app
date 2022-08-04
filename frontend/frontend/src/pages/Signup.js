import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  const [password , setPassword]=useState('')
  const [confirm , setConfirm]=useState('')
  const [message , setMessage] = useState('')
  const handleSignup=async()=>{
    if(confirm != password){
      setMessage('password and confirmation not matching')
    }
    
  } 
  return (
    <div>    
      <form onSubmit={handleSignup} className='signup'>
        <h1>Signup</h1>
        <input name='email' type='email' placeholder='email' className='email'/>
        <input name='password' type='password' placeholder='password' className='password' onChange={(e)=>{setPassword(e.target.value)}} />
        <input name='password' type='password' placeholder='password' className='password'onChange={(e)=>{setConfirm(e.target.value)}}/>
        <input type='submit'/>
        <h2>{message}</h2>
        <div className='link'>
          if you have an account<Link to='/login/'>login</Link>          
        </div>

      </form>
  </div>
  )
}
