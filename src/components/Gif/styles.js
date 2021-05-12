import styled from '@emotion/styled'

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

export const GifContainer = styled.figure`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  margin: 0;

  @media (min-width: 800px) {
    height: 320px;
  }
`

export const GifImage = styled.img`
  ${diferentsColors}
  width: 100%;
  height: inherit;
  object-fit: cover;
  box-sizing: border-box;
  transition: background-color .3s;
`

export const GifTitle = styled.figcaption`
  position: absolute;
  ${diferentsColors}
  left: 0;
  bottom: 0;
  font-size: 12px;
  transition: background-color .3s;

  @media (min-width: 800px) {
    font-size: initial;
  }
`