import jwt_decode from 'jwt-decode'
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import DomainContext from '../context/DomainContext'
export const Login = () => {
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
        console.log(data)
        setToken(data.access)
        setUserId(jwt_decode(data.access).user_id)
        localStorage.setItem('token_jwt',data.access)
    }
}

  return (
    <form onSubmit={handleLogin}>
      <input name='email' type='email' placeholder='email'/>
      <input name='password' type='password' placeholder='password'/>
      <input type='submit'/>
    </form>
  )
}