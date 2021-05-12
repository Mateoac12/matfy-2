import styled from '@emotion/styled'
import { Link as LinkWouter } from 'wouter'

const diferentsColors = (props) => {
  const colorIndex = props.index % 5 + 1

  const colorText = colorIndex === 5
    ? 'var(--white)'
    : 'var(--dark)'

  if (props.border) return `
  background-color: var(--background-color-${colorIndex});
  border: 4px solid var(--background-color-${colorIndex});
  `
  
  return `
  background-color: var(--background-color-${colorIndex});
  color: ${colorText};
  `
}

export const Link = styled(LinkWouter)`
  margin: .25rem;
  padding: .5rem 1rem;
  text-decoration: none;
  text-transform: capitalize;
  flex-grow: 1;
  text-align: center;
  ${diferentsColors};
  transition: background-color .3s;
`