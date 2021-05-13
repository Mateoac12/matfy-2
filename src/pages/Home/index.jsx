import React from 'react'
import TrendingSearches from 'components/TrendingSearches'
import TrendingGifs from 'components/TrendingGifs'
import SEO from 'components/SEO'

const Home = () => {
  return <section>
    <SEO
      title={"Home"}
      description={"Busca gifs graciosos con la API de GIPHY, Matfy app."}
    />
    <TrendingSearches />
    <TrendingGifs />
  </section>
}

export default Home