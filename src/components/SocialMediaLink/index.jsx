import React from 'react'

const SocialMediaLink = ({ title, image, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} alt={title} />
    </a>
  )
}

export default SocialMediaLink