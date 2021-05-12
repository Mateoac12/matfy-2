import React from 'react'
import { Link } from './styles'

const SingleTerm = ({ index, term }) => {
  return <>
    <Link href={`/search/${term}`} index={index}>
      {term}
    </Link>
  </>
}

export default SingleTerm