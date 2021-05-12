import { useEffect, useState } from 'react'
import { getTrendingTerms } from 'services/getTrendingTerms'


const useTrendingTerms = () => {
  const [terms, setTerms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTrendingTerms().then(listTerms => {
      setTerms(listTerms)
      setLoading(false)
    })
  }, [setTerms])

  return { terms, loading }
}

export default useTrendingTerms