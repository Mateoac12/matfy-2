import styled from '@emotion/styled'

export const MainHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  position: fixed;
  z-index: 5;
  background-color: var(--dark);
  max-width: 1400px;
  left: 0;
  top: 0;
  transition: background-color .3s;

  @media (min-width: 920px) {
  left: 50%;
  transform: translateX(-50%);
  }
`