import React, { useCallback, useEffect } from 'react'
import Gif from 'components/Gif'
import UseGifs from 'hooks/useGifs';
import UseNearScreen from 'hooks/useNearScreen';

import { ContainerOfGifs } from './styles'
import Loading from 'components/Loading';
import { useLocation } from 'wouter';

const ListOfGifs = ({ keyword }) => {
  const { gifs, setNewPage, loading } = UseGifs({ keyword })
  const { isIntersecting, elementRef } = UseNearScreen()
  const [, setLocation] = useLocation()

  useEffect(() => {
    isIntersecting && setNewPage(lastPage => lastPage + 1)
  }, [isIntersecting, setNewPage])

  const handleShowGifs = useCallback(() => {
    return gifs.length
      ? gifs.map(({ img, title, id }, index) => {
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
      : setLocation('/error')
  }, [gifs, setLocation])

  return <ContainerOfGifs>
    {
      loading
        ? <Loading />
        : handleShowGifs()
    }
    <div ref={elementRef}></div>
  </ContainerOfGifs>
}

export default ListOfGifs