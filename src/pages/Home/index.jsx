import React from 'react'
import TrendingSearches from 'components/TrendingSearches'
import TrendingGifs from 'components/TrendingGifs'

const Home = () => {
  return <section>
    <TrendingSearches />
    <TrendingGifs />
  </section>
}

export default Home