import React, { useContext } from 'react'
import {MdLogout} from 'react-icons/md'
import AuthContext from '../context/AuthContext'
export const Logout = () => {
    const {setUserId , setToken}=useContext(AuthContext) 
    const handleLogout = ()=>{
        setUserId(null)
        setToken(null)
        localStorage.setItem('token_jwt',null)
    }
  return (
    <div className='logout'>
        <MdLogout onClick={handleLogout}/>
    </div>
  )
}
