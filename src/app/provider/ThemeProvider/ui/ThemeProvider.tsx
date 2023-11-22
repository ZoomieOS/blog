// libraries
import { type FC, type PropsWithChildren, useMemo, useState } from 'react'
// contexts
import { ThemeContext, LOCAL_STORAGE_THEME_KEY, Theme } from 'app/provider/ThemeProvider/lib/ThemeContext'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT)

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
      <ThemeContext.Provider value={defaultProps}>
          {children}
      </ThemeContext.Provider>
  )
}

export default ThemeProvider
