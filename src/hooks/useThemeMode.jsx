import { useState } from 'react'

const DOCUMENT_STYLES = document.documentElement.style

const useThemeMode = ({ modeOfTheme }) => {
  const localTheme = window.localStorage.getItem('typeTheme')
  const themeToUse = localTheme || window.localStorage.setItem('typeTheme', JSON.stringify(true)) || true

  const [theme, setTheme] = useState(JSON.parse(themeToUse))

  const infoOfSingleTheme = Object.entries(modeOfTheme)
  // eslint-disable-next-line
  infoOfSingleTheme.map(entry => {
    const [key, value] = entry
    DOCUMENT_STYLES.setProperty(key, value)
  })

  const handleCheckTheme = (e) => {
    const value = e.target.checked
    window.localStorage.setItem('typeTheme', JSON.stringify(value))
    setTheme(value)
  }

  return {
    theme,
    handleCheckTheme
  }
}

export default useThemeMode