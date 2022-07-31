import React, { useContext } from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
export const PrivateRoute = () => {
    const {token} = useContext(AuthContext)
  return (
    !token ? <Navigate to='login/'/> : <Outlet/>
  )
}
