import React, { useEffect } from 'react'
import Gif from 'components/Gif'
import UseGifs from 'hooks/useGifs';
import UseNearScreen from 'hooks/useNearScreen';

import { ContainerOfGifs } from './styles'
import Loading from 'components/Loading';

const ListOfGifs = ({ keyword }) => {
  const { gifs, setNewPage, loading } = UseGifs({ keyword })
  const { isIntersecting, elementRef } = UseNearScreen()

  useEffect(() => {
    isIntersecting && setNewPage(lastPage => lastPage + 1)
  }, [isIntersecting, setNewPage])

  /*   if (loading) return <Loading /> */

  return <ContainerOfGifs>
    {
      loading
        ? <Loading />
        : gifs.map(({ img, title, id }, index) => {
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
    <div ref={elementRef}></div>
  </ContainerOfGifs>
}

export default ListOfGifs