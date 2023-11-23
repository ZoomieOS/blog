// libraries
import { useContext } from 'react'
// contexts
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'

interface IThemeResult {
  toggleTheme: () => void
  theme: Theme | undefined
}

export function useTheme (): IThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = (theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)

    if (setTheme != null) {
      setTheme(newTheme)
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme
  }
}
