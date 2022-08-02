import React,{useContext, useEffect, useState} from 'react'
import AuthContext from '../context/AuthContext'
import DomainContext from '../context/DomainContext'
import { Folder } from './Folder'
export const Folders = () => {
    const [folders , setFolders]=useState([])
    const {userId} = useContext(AuthContext)
    const {domain} = useContext(DomainContext)
    const [title,setTitle]=useState('')
    console.log(userId)
    const getFolders=async()=>{
      const response = await fetch(`${domain}api/folders/${userId}/`)
      const data = await response.json()
      setFolders(data)
    }
    const handleAdd = async(e)=>{
      e.preventDefault()
      setTitle('')
      await fetch(`${domain}api/folders/${userId}/`,{
          method:"POST",
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({name:e.target.task.value})
      })
      getFolders()
  }
    useEffect(()=>{getFolders()},[])
  return (
    <div className='folders'>
        <form onSubmit={handleAdd}>
          <input type='text' placeholder='add a task' name='task' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          <input type='submit' value='add a task'/>
        </form>
      {folders ? folders.map((e)=>{return <Folder Folder={e}/>}):''}
    </div>
  )
}
