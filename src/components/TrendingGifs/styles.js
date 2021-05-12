import styled from '@emotion/styled'

export const ContainerAllBlock = styled.section`
  max-width: 1400px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

export const ContainerOfGifs = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  column-gap: .5rem;
  row-gap: .5rem;
  padding: .5rem 1rem 100px;
  
  @media (min-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    column-gap: 1rem;
    row-gap: 1rem;
  }
`

export const TitleTrends = styled.h2`
  color: var(--dark-2);
  padding-left: 1rem;
`