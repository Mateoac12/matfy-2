import React from 'react'
import { ErrorContent, ImageError } from './styles'

const NotFoundPage = () => {
  return <ErrorContent>
    <h1>Sorry! 😮 We didn't find any search 😭</h1>
    <code>Famous 404 Error</code>
    <ImageError
      src="https://media0.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=ece5e8ecay0l7cs3vyybtmctaa5djegt0r4r3i6aiuynk7ok&rid=giphy.gif&ct=g"
      alt="404 error"
    />
  </ErrorContent>
}

export default NotFoundPage