import styled from '@emotion/styled'

export const ContainerOfGifs = styled.section`
  min-height: 150vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  column-gap: .5rem;
  row-gap: .5rem;
  padding-top: 100px;
  
  @media (min-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    column-gap: 1rem;
    row-gap: 1rem;
  }
`