import React, { createContext } from 'react'
const DomainContext = createContext()
export default DomainContext;
export const DomainProvider = ({children}) => {
  return (
    <DomainContext.Provider value={{domain:"https://todo-app-mohal.herokuaplmp.com/"}}>
        {children}
    </DomainContext.Provider>
  )
}