import React from 'react'
const CoronaContext = React.createContext()
const CoronaProvider = ({ children }) => {
  return (
    <CoronaContext.Provider value='hello'>{children}</CoronaContext.Provider>
  )
}

export { CoronaProvider, CoronaContext }
