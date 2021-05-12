import ListOfTerms from 'components/ListOfTerms'
import Loading from 'components/Loading'
import useTrendingTerms from 'hooks/useTrendingTerms'
import React from 'react'

import { BoxListTrends, TitleTrends } from './styles'

const TrendingSearches = () => {
  const { terms, loading } = useTrendingTerms()

  return <BoxListTrends>
    <TitleTrends>Trending Searches</TitleTrends>
    {
      loading ? <Loading /> : <ListOfTerms terms={terms} />
    }
  </BoxListTrends>
}

export default TrendingSearches