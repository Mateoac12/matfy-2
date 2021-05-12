import React from 'react'
import logo from 'logo.svg'

import { LogoImage } from './styles'
import { Link } from 'wouter'

const Logo = () => {
  return <Link href="/">
    <LogoImage src={logo} alt="Logo Matfy" />
  </Link>
}

export default Logo