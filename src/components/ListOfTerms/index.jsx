import React from 'react'
import SingleTerm from 'components/SingleTerm'
import { BoxSingleTerm } from './styles'

const ListOfTerms = ({ terms }) => {
  return <BoxSingleTerm>
    {
      terms.map((term, index) =>
        <SingleTerm
          index={index}
          key={term}
          term={term}
        />
      )
    }
  </BoxSingleTerm>
}

export default ListOfTerms