import NotFoundPage from 'components/NotFoundPage'
import SEO from 'components/SEO'
import React from 'react'

const ErrorPage = () => {
  return <>
    <SEO
      title={"Error Page"}
      description={"404 Error page. No se pudo encontrar los resultados de la busqueda en Matfy"}
    />
    <NotFoundPage />
  </>
}

export default ErrorPage