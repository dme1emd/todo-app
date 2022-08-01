import React,{useContext, useEffect, useState} from 'react'
import AuthContext from '../context/AuthContext'
import DomainContext from '../context/DomainContext'
import { Folder } from './Folder'
export const Folders = () => {
    const [folders , setFolders]=useState([])
    const {userId} = useContext(AuthContext)
    const {domain} = useContext(DomainContext)
    console.log(userId)
    const getFolders=async()=>{
      const response = await fetch(`${domain}api/folders/${userId}/`)
      const data = await response.json()
      setFolders(data)
    }
    useEffect(()=>{getFolders()},[])
  return (
    <div className='folders'>
      {folders ? folders.map((e)=>{return <Folder Folder={e}/>}):''}
    </div>
  )
}
