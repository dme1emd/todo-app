import React, { useState } from 'react'

export const Task = ({task}) => {
    const [show , setShow]=useState(false)
  return (
    <div className='task'>
        <div className='task-title'>{task.title}</div>
        <div className='task-content'>{show ? task.content : task.content.length > 10 ? `${task.content.slice(0,10)} ...`:task.content}</div>
    </div>
  )
}
