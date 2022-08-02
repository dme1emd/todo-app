import React, { useContext, useState } from 'react'
import {ImCross} from 'react-icons/im'
import {BsPencil} from 'react-icons/bs'
import {MdOutlineDone} from 'react-icons/md'
import DomainContext from '../context/DomainContext'
export const Task = ({task}) => {
    const {domain}=useContext(DomainContext)
    const [show , setShow]=useState(true)
    const [isBeingModified , setIsbeingModified] = useState(false)
    const [modifiedTitle , SetModifiedTitle] =useState(task.title)
    const handleDelete= async()=>{
        await fetch(`${domain}api/tasks/${task.id}/`,{method:'DELETE'})
        setShow(false)
    }
  return (
    show ?
          isBeingModified ? 
            <div className='container-modify'>
                <input value={modifiedTitle} onChange={(e)=>{SetModifiedTitle(e.target.value)}} className='input-modify'/>
                <div className='icons'>
                    <MdOutlineDone className='done'/>
                    <BsPencil className='modify modify-active' onClick={()=>{setIsbeingModified(false)}}/>
                    <ImCross onClick={handleDelete} className='delete'/>
                </div> 
            </div>
            :
            <div className='task'>
                <div className='task-title'>{task.title}</div>
                <div className='icons'>
                    <MdOutlineDone className='done'/>
                    <BsPencil className='modify' onClick={()=>{setIsbeingModified(true)}}/>
                    <ImCross onClick={handleDelete} className='delete'/>
                </div> 
            </div>

        
        :''
  )
}
