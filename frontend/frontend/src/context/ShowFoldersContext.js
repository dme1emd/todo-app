import React, { createContext, useState } from 'react'
const ShowFoldersContext = createContext()
export default ShowFoldersContext;
export const ShowFoldersProvider = ({children}) => {
    const [showFolders , setShowFolders] = useState(false)
  return (
    <ShowFoldersContext.Provider value={{showFolders , setShowFolders}}>
        {children}
    </ShowFoldersContext.Provider>
  )
}