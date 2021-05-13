import ListOfGifs from 'components/ListOfGifs'
import React from 'react'
import SEO from 'components/SEO'

const ListOfResults = ({ params }) => {
  const { keyword } = params

  return <>
    <SEO
      title={`Resultados de: ${decodeURI(keyword)}`}
      description={`Resultados de la busqueda de ${decodeURI(keyword)} con la API de GIPHY. Matfy app`}
    />
    <ListOfGifs keyword={keyword} />
  </>
}

export default ListOfResults