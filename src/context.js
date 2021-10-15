import React, { useContext, useState, useEffect } from 'react'

import { people_data } from './data'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [people, setPeoples] = useState(people_data)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  return (
    <AppContext.Provider value={{ people, index, setIndex }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
