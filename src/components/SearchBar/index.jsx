import React, { useState } from 'react'
import { useLocation } from 'wouter'

import search from 'search.svg'

import {
  SearchBox,
  InputSearch,
  ButtonSearch,
  SearchImage,
} from './styles'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')
  const [, setLocation] = useLocation()

  const handleChangeKeyword = e => setKeyword(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocation(`/search/${keyword}`)
    setKeyword('')
  }

  return <>
    <SearchBox onSubmit={handleSubmit}>
      <InputSearch
        onChange={handleChangeKeyword}
        placeholder="Search a gif here..."
        type="text"
        value={keyword}
      />
      <ButtonSearch>
        <SearchImage src={search} alt="search" />
      </ButtonSearch>
    </SearchBox>
  </>
}

export default SearchBar