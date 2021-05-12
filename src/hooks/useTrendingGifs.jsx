import { useState, useEffect } from 'react'
import { getTrendingGifs } from 'services/getTrendingGifs'

const useTrendingGifs = () => {
  const [trendGifs, setTrendGifs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTrendingGifs().then(entryGif => {
      setTrendGifs(entryGif)
      setLoading(false)
    })
  }, [setTrendGifs, setLoading])

  return {
    trendGifs,
    loading
  }
}

export default useTrendingGifs