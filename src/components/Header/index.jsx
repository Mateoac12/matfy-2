import Logo from 'components/Logo'
import SearchBar from 'components/SearchBar'
import ThemeMode from 'components/ThemeMode'
import React from 'react'

import { MainHeader } from './styles'

const Header = () => {
  return <MainHeader>
    <ThemeMode />
    <Logo />
    <SearchBar />
  </MainHeader>
}

export default Header