import React, { useContext } from 'react'
import DomainContext from '../context/DomainContext'
import TasksContext from '../context/TasksContext'

export const Folder = ({folder}) => {
    const {tasks , setTasks} = useContext(TasksContext)
    const {domain}=useContext(DomainContext)
    const handleClick=async()=>{
        const response = await fetch(`${domain}api/tasks/${folder.id}/`)
        const data = await response.json()
        setTasks(data)
    } 
  return (
    <div onClick={handleClick}>
        {folder.name}
    </div>
  )
}
