import React from 'react'

import SocialMediaLink from 'components/SocialMediaLink'

import github from 'github.svg'
import linkedin from 'linkedin.svg'
import twitter from 'twitter.svg'

import { FooterContainer } from './styles'

const Footer = () => {
  return <FooterContainer>
    <SocialMediaLink title={"GitHub"} image={github} url={"https://github.com/Mateoac12"} />
    <SocialMediaLink title={"LinkedIn"} image={linkedin} url={"https://www.linkedin.com/in/mateo-%C3%A1lvarez-731313188/"} />
    <SocialMediaLink title={"Twitter"} image={twitter} url={"https://twitter.com/maadeval"} />
  </FooterContainer>
}

export default Footer