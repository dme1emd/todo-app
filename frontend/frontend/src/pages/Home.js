import React from 'react'
import { Folders } from '../components/Folders'
import { Tasks } from '../components/Tasks'

export const Home = () =>{
  return (
    <div className='home'>
      <Folders/>
      <Tasks/>
    </div>
  )
}
