import React, { useState } from 'react'

export const Task = ({task}) => {
    const [show , setShow]=useState(false)
  return (
    <div className='task'>
        <div className='task-title'>{task.title}</div>
    </div>
  )
}
