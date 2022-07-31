import React, { createContext, useContext, useEffect, useState } from 'react'
import DomainContext from './DomainContext';
import jwt_decode from 'jwt-decode'
const AuthContext = createContext()
export default AuthContext;
export const AuthProvider = ({children}) => {
    const [token,setToken] = useState(localStorage.getItem('token_jwt'))
    const [userId , setUserId] = useState(token ? jwt_decode(token).user_id:null)
    console.log(userId)
  return (
    <AuthContext.Provider value={{token , setToken , userId ,setUserId}}>
        {children}
    </AuthContext.Provider>
  )
}
