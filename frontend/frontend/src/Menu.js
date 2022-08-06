import React, { useContext } from 'react'
import {FiMenu} from 'react-icons/fi'
import ShowFoldersContext from './context/ShowFoldersContext'
export const Menu = () => {
    const {showFolders , setShowFolders}=useContext(ShowFoldersContext)
    const handleClick = ()=>{
        setShowFolders(!showFolders)
    }
  return (
    <div className='menu'>
        <FiMenu onClick={handleClick}/>
    </div>
  )
}
