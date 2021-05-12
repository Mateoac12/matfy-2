import { GifsContext } from 'context/GifsContext'
import { useContext, useEffect, useState } from 'react'
import getGifs from 'services/getGifs'

const INITIAL_PAGE = 0

const UseGifs = ({ keyword } = {}) => {
  const { gifs, setGifs } = useContext(GifsContext)

  const [newPage, setNewPage] = useState(INITIAL_PAGE)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getGifs({ keyword }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword, setGifs])

  useEffect(() => {
    if (newPage === INITIAL_PAGE) return

    getGifs({ keyword, newPage }).then(newGifs => {
      setGifs(
        lastGifs => lastGifs.concat(newGifs)
      )
      setLoading(false)
    })
  }, [keyword, newPage, setGifs])

  return {
    gifs,
    setNewPage,
    loading
  }
}

export default UseGifs