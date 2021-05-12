import ListOfGifs from 'components/ListOfGifs'
import React from 'react'

const ListOfResults = ({ params }) => {
  const { keyword } = params

  return <>
    <ListOfGifs keyword={keyword} />
  </>
}

export default ListOfResults