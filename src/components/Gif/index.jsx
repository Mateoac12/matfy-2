import GifInformation from 'components/GifInformation'
import ModalPortal from 'components/Modal'
import React, { useState } from 'react'

import { GifImage, GifContainer, GifTitle } from './styles'

const Gif = ({ img, title, id, index }) => {
  const [showModalGif, setShowModalGif] = useState(false)

  const onClose = () => {
    setShowModalGif(false)
  }

  return <>
    <GifContainer onClick={() => setShowModalGif(true)}>
      <GifImage index={index} border={true} src={img} alt={title} loading="lazy" />
      <GifTitle index={index}>{title}</GifTitle>
    </GifContainer>
    {
      showModalGif && <ModalPortal onClose={onClose}>
        <GifInformation paramID={id} />
      </ModalPortal>
    }
  </>
}

export default React.memo(Gif)