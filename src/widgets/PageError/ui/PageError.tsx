import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps): ReactElement => {
  const { t } = useTranslation()

  const onReloadPage = (): void => {
    location.reload()
  }

  return (
      <div className={classNames(cls.PageError, {}, [className])}>
          <p>{t('something-wrong')}</p>
          <Button
              onClick={onReloadPage}
              >
              {t('reload-page')}
          </Button>
      </div>
  )
}
