import styled from '@emotion/styled'

export const SearchBox = styled.form`
  display: flex;
  align-items: center;
  transition: background-color .3s;

  @media (max-width: 1400px) {
    margin-right: 2rem;
  }

  @media (max-width: 920px) {
    display: flex;
    position: fixed;
    bottom: 10px;
    right: 10px;
    left: 10px;
    height: 60px;
    background-color: var(--dark-transparent-3);
    backdrop-filter: blur(4px);
    margin: 0;
  }
`

export const InputSearch = styled.input`
  width: 200px;
  background-color: var(--dark-2);
  border: none;
  outline: none;
  color: var(--white);
  font-size: 16px;
  padding: .5rem;
  height: 25px;
  transition: background-color .3s;

  @media (max-width: 920px) {
    flex-grow: 2;
    height: 100%;
    padding: 0;
    padding-left: 2rem;
    background-color: transparent;
  }
`

export const ButtonSearch = styled.button`
  outline: none;
  border: none;
  font-size: 16px;
  height: 41px;
  width: 41px;
  padding: .5rem;
  background-color: var(--background-color-1);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 920px) {
    height: 100%;
  }
`

export const SearchImage = styled.img`
`