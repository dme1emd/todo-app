import React, { useState , useContext} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import DomainContext from '../context/DomainContext'
export const Signup = () => {
  const [password , setPassword]=useState('')
  const [confirm , setConfirm]=useState('')
  const [username , setUsername]=useState('')
  const [message , setMessage] = useState('')
  const navigate = useNavigate()
  const {domain} = useContext(DomainContext)
  const handleSignup=async(e)=>{
    e.preventDefault()
    setMessage('')
    if(confirm != password){
      setMessage(`password and confirmation not matching`)
      return
    }
    if(password.length <8){
      setMessage(`password too short`)
      return 
    }
    const response = await fetch(`${domain}api/profiles/`,{
      method:"POST",
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({email:e.target.email.value , username:username,password : password})
    })
    if (response.status ===409) {
      setMessage('an account with this email alreay exists')
      return
    }
    navigate('/')
  } 
  return (
    <div>    
      <form onSubmit={handleSignup} className='signup'>
        <h1>Signup</h1>
        <input name='email' type='email' placeholder='email' className='email' required/>
        <input name='username' type='text' placeholder='username' className='username' onChange={(e)=>{setUsername(e.target.value)}}/>
        <input name='password' type='password' placeholder='password' className='password' onChange={(e)=>{setPassword(e.target.value)}} />
        <input name='password' type='password' placeholder='password' className='password'onChange={(e)=>{setConfirm(e.target.value)}}/>
        <input type='submit'/>
        <h2>{message}</h2>
        <div className='link'>
          if you have an account <Link to='/login/'>login</Link>          
        </div>

      </form>
  </div>
  )
}
