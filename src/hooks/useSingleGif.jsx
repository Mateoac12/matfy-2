import { useEffect, useContext, useState } from 'react'
import { GifsContext } from 'context/GifsContext'
import { useRoute } from 'wouter'

import GetSingleGif from 'services/getSingleGif'

const UseSingleGif = ({ paramID }) => {
  const [singleGif, setSingleGif] = useState({})
  const { gifs } = useContext(GifsContext)
  const [match] = useRoute("/");

  useEffect(() => {
    !match
      ? setSingleGif(gifs.find(({ id }) => id === paramID))
      : GetSingleGif({ paramID }).then(setSingleGif)
  }, [gifs, paramID, match])

  return { singleGif }
}

export default UseSingleGif