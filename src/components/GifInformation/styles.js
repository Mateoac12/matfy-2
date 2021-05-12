import styled from '@emotion/styled'

export const GifTitle = styled.p`
  margin: 1rem 0;
  min-height: 2rem;
  color: var(--white);
  font-size: 24px;
  padding-left: 1rem;
  padding-right: 3rem;
  
  @media (min-width: 800px) {
    padding-left: 0;
  }
`


export const GifImage = styled.img`
  width: 98vw;

  @media (min-width: 800px) {
    max-width: 60vw;
    max-height: 80vh;
    object-fit: contain;
  }
`