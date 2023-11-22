import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps): ReactElement => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleLanguage}>
          {t('lang')}
      </Button>
  )
}
