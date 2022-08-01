import React, { createContext, useEffect, useState } from 'react'
const TasksContext = createContext()
export default TasksContext;
export const TasksProvider = ({children}) => {
    const [tasks,setTasks]=useState([])
    const [folder , setFolder] = useState()
  return (
    < TasksContext.Provider value={{tasks,setTasks,folder,setFolder}}>
        {children}
    </TasksContext.Provider>
  )
}