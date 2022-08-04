import React, { useContext, useState } from 'react'
import DomainContext from '../context/DomainContext'
import TasksContext from '../context/TasksContext'
import {ImCross} from 'react-icons/im'
export const Folder = ({Folder}) => {
    const {tasks , setTasks,setFolder ,folder} = useContext(TasksContext)
    const {domain}=useContext(DomainContext)
    const [show , setShow]=useState(true)
    const handleClick=async()=>{
        const response = await fetch(`${domain}api/tasks/${Folder.id}/`)
        const data = await response.json()
        setTasks(data)
        setFolder(Folder.id)
    } 
    const handleDelete= async()=>{
      await fetch(`${domain}api/folders/${Folder.id}/`,{method:'DELETE'})
      setShow(false)
  }
  return (
    show?<div className='folder-container'>
      <div onClick={handleClick} className={`folder ${Folder.id===folder ? 'actual':''}`}>
          {Folder.name}
          <ImCross onClick={handleDelete} className='delete-folder'/>
      </div>

    </div>:''

  )
}
