import React from 'react'
import { Folders } from '../components/Folders'
import { Logout } from '../components/Logout'
import { Tasks } from '../components/Tasks'

export const Home = () =>{
  return (
    <div className='home'>
      <Logout/>
      <Folders/>
      <Tasks/>
    </div>
  )
}
