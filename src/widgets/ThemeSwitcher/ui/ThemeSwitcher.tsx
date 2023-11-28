import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/icon-dark.svg'
import LightIcon from 'shared/assets/icons/icon-light.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'
import { type ReactNode } from 'react'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps): ReactNode => {
  const { theme, toggleTheme } = useTheme()

  const renderIcon = (): ReactNode => {
    if (theme === Theme.DARK) {
      return <DarkIcon width={24} height={24} />
    }

    return <LightIcon width={24} height={24} />
  }

  return (
      <Button
            type="button"
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
          {renderIcon()}
      </Button>
  )
}
