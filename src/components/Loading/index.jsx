import React from 'react'
import { Spinner, TitleSpinner, BlockSpinner } from './styles'

const Loading = () => {
  return <BlockSpinner>
    <Spinner />
    <TitleSpinner>Loading ...</TitleSpinner>
  </BlockSpinner>
}

export default Loading