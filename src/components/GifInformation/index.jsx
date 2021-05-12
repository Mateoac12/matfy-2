import UseSingleGif from 'hooks/useSingleGif'
import React from 'react'
import { GifImage, GifTitle } from './styles'


const GifInformation = ({ paramID }) => {
  const { singleGif } = UseSingleGif({ paramID })

  return <>
    <GifTitle>{singleGif.title}</GifTitle>
    <GifImage src={singleGif.img} alt={singleGif.title} />
  </>
}

export default GifInformation