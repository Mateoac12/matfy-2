import styled from '@emotion/styled'

export const FormInput = styled.form`
  @media (max-width: 1400px) {
    margin-left: 2rem;
  }

  @media (max-width: 920px) {
    margin-left: 1rem;
  }
`

export const InputTheme = styled.input`
  display: none;

  :checked + .styleInput::before {
    transform: translateX(100%);
  }
`

export const StyleInput = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 40px;
  height: 20px;
  background-color: var(--dark-2);
  border-radius: 25px;
  transition: background-color .3s;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border: 2px solif white;
    border-radius: 50%;
    background-color: var(--white);
    transform: translateX(0);
    transition: transform .2s, background-color  .3s;
  }
`