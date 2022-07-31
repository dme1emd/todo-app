import React, { createContext, useEffect, useState } from 'react'
const TasksContext = createContext()
export default TasksContext;
export const TasksProvider = ({children}) => {
    const [tasks,setTasks]=useState([])
  return (
    < TasksContext.Provider value={{tasks,setTasks}}>
        {children}
    </TasksContext.Provider>
  )
}