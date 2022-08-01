import React, { useContext } from 'react'
import DomainContext from '../context/DomainContext'
import TasksContext from '../context/TasksContext'

export const Folder = ({Folder}) => {
    const {tasks , setTasks,setFolder ,folder} = useContext(TasksContext)
    const {domain}=useContext(DomainContext)
    const handleClick=async()=>{
        const response = await fetch(`${domain}api/tasks/${Folder.id}/`)
        const data = await response.json()
        setTasks(data)
        setFolder(Folder.id)
    } 
  return (
    <div onClick={handleClick} className={`folder ${Folder.id===folder ? 'actual':''}`}>
        {Folder.name}
    </div>
  )
}
