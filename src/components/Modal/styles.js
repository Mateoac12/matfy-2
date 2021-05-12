import styled from '@emotion/styled'
import { RandomColor } from 'styles/base'

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: var(--dark-transparent);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: background-color .3s;
`

export const ModelContent = styled.div`
  padding-top: 0;
  background-color: var(--dark);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color .3s;

  @media (min-width: 800px) {
    padding: 2rem;
  }
`

export const ExitButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  cursor: pointer;
  ${ RandomColor }
`