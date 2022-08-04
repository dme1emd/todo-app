import React, { useContext, useState } from 'react'
import {ImCross} from 'react-icons/im'
import {BsPencil} from 'react-icons/bs'
import {MdOutlineDone} from 'react-icons/md'
import DomainContext from '../context/DomainContext'
export const Task = ({task}) => {
    const {domain}=useContext(DomainContext)
    const [show , setShow]=useState(true)
    const [done , setDone] = useState(task.done)
    const [isBeingModified , setIsbeingModified] = useState(false)
    const [modifiedTitle , SetModifiedTitle] =useState(task.title)
    const handleDelete= async()=>{
        await fetch(`${domain}api/tasks/${task.id}/`,{method:'DELETE'})
        setShow(false)
    }
    const handleDone = async()=>{
        setDone(!done)
        await fetch(`${domain}api/tasks/${task.id}/`,
        {
                method:"PATCH",
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({done:!done})
        })
        console.log(!done)
    }
    const handleStopModifiying=async ()=>{
        await fetch(`${domain}api/tasks/${task.id}/`,
        {
                method:"PATCH",
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({title:modifiedTitle})
        })
        setIsbeingModified(false)
    }
  return (
    show ?
          isBeingModified ? 
            <div className='container-modify'>
                <input value={modifiedTitle} onChange={(e)=>{SetModifiedTitle(e.target.value)}} className='input-modify'/>
                <div className='icons'>
                    <BsPencil className='modify modify-active' onClick={handleStopModifiying}/>
                    <ImCross onClick={handleDelete} className='delete'/>
                </div> 
            </div>
            :
            <div className={done ? 'task task-done':'task'}>
                <div className='task-title'>{modifiedTitle}</div>
                <div className='icons'>
                    <MdOutlineDone className='done' onClick={handleDone}/>
                    <BsPencil className='modify' onClick={()=>{setIsbeingModified(true)}}/>
                    <ImCross onClick={handleDelete} className='delete'/>
                </div> 
            </div>

        
        :''
  )
}
