import React,{useContext, useEffect, useState} from 'react'
import AuthContext from '../context/AuthContext'
import DomainContext from '../context/DomainContext'
import ShowFoldersContext from '../context/ShowFoldersContext'
import TasksContext from '../context/TasksContext'
import { Folder } from './Folder'
export const Folders = () => {
    const [folders , setFolders]=useState([])
    const {userId} = useContext(AuthContext)
    const {domain} = useContext(DomainContext)
    const [title,setTitle]=useState('')
    const {setFolder} =useContext(TasksContext)
    const {showFolders} = useContext(ShowFoldersContext)
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
    <div className={showFolders ? 'folders' : 'folders-none'}>
        <form onSubmit={handleAdd} className='folder-form'>
          <input type='text' placeholder='add a folder' name='task' value={title} onChange={(e)=>{setTitle(e.target.value)}}  className='folder-add'/>
          <input type='submit' value='add' className='folder-confirm'/>
        </form>
      {folders ? folders.map((e)=>{return <Folder Folder={e}/>}):''}
    </div>
  )
}
