import React, { useContext, useEffect } from 'react'
import TasksContext from '../context/TasksContext'
import { Task } from './Task'
export const Tasks = () => {
    const {tasks} = useContext(TasksContext)
    useEffect(()=>{console.log(tasks)},[tasks])
  return (
    <div  className='tasks'>
        {tasks ? tasks.map((task)=>{return <Task task={task}/>}):'e'}
    </div>
  )
}
