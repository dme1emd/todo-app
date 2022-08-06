import React from 'react'
import { Folders } from '../components/Folders'
import { Logout } from '../components/Logout'
import { Tasks } from '../components/Tasks'
import { ShowFoldersProvider } from '../context/ShowFoldersContext'
export const Home = () =>{
  return (
    <div className='home'>
      <ShowFoldersProvider>
        <Logout/>
        <Folders/>
        <Tasks/>
      </ShowFoldersProvider>

    </div>
  )
}
