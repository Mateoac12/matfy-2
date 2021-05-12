import useThemeMode from 'hooks/useThemeMode'
import React, { useEffect, useState } from 'react'
import { ALL_THEMES } from 'config/themeModes'

import { InputTheme, StyleInput, FormInput } from './styles'

const ThemeMode = () => {
  const [modeOfTheme, setModeOfTheme] = useState({})
  const { theme, handleCheckTheme } = useThemeMode({ modeOfTheme })

  useEffect(() => {
    theme
      ? setModeOfTheme(ALL_THEMES.darkMode)
      : setModeOfTheme(ALL_THEMES.lightMode)
  }, [theme])

  return <>
    <FormInput>
      <InputTheme type="checkbox" onChange={handleCheckTheme} checked={theme} id="theme" />
      <StyleInput className="styleInput" htmlFor="theme" />
    </FormInput>
  </>

}

export default ThemeMode