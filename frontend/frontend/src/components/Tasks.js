import React, { useContext, useEffect, useState } from 'react'
import DomainContext from '../context/DomainContext'
import TasksContext from '../context/TasksContext'
import { Task } from './Task'
export const Tasks = () => {
    const [title,setTitle] = useState('')
    const {tasks , setTasks , folder} = useContext(TasksContext)
    const {domain}=useContext(DomainContext)
    const handleAdd = async(e)=>{
        e.preventDefault()
        setTitle('')
        await fetch(`${domain}api/tasks/${folder}/`,{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({title:e.target.task.value})
        })
        const response = await fetch(`${domain}api/tasks/${folder}/`)
        const data = await response.json()
        setTasks(data)
    }
    
  return (
    folder ? 
    <div  className='tasks'>
        <form onSubmit={handleAdd}>
            <input type='text' placeholder='add a task' name='task' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type='submit' value='add a task'/>
        </form>
        {tasks ? tasks.map((task)=>{return <Task task={task}/>}):'e'}
    </div>
    :
    <div className='select-folder'>select folder please</div>
  )
}
