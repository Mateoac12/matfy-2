import Gif from 'components/Gif'
import Loading from 'components/Loading'
import useTrendingGifs from 'hooks/useTrendingGifs'
import React from 'react'
import { ContainerOfGifs, TitleTrends, ContainerAllBlock } from './styles'

const TrendingGifs = () => {
  const { trendGifs, loading } = useTrendingGifs()

  return <ContainerAllBlock>
    <TitleTrends>Trending Gifs</TitleTrends>
    <ContainerOfGifs>
      {
        loading ? <Loading /> : trendGifs.map(({ img, title, id }, index) => {
          return (
            <Gif
              img={img}
              key={id}
              title={title}
              index={index}
              id={id}
            />
          )
        })
      }
    </ContainerOfGifs>
  </ContainerAllBlock>
}

export default TrendingGifs