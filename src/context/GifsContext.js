import React, { useState } from 'react'

export const GifsContext = React.createContext({error: 'Not permission'})

const GifsContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([])

  return <GifsContext.Provider value={{gifs, setGifs}}>
    {children}
  </GifsContext.Provider>
}

export default GifsContextProvider