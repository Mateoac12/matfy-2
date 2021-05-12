import styled from '@emotion/styled'

export const BlockSpinner = styled.div`
  display: inline-flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 4px solid var(--background-color-1);
  display: inline-block;
  animation: loader 3s infinite alternate-reverse;

  @keyframes loader {
    from {
      transform: translateX(-50%) rotate(0);
    } to {
      transform: translateX(-50%) rotate(2.5turn);
    }
  }
`

export const TitleSpinner = styled.h2`
  color: var(--background-color-1);
  display: inline-block;
`