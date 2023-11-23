import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

const NotFoundPage = (): ReactElement => {
  const { t } = useTranslation()

  return (
      <div className={classNames(cls.NotFoundPage, {}, [])}>
          {t('not-found-page')}
      </div>
  )
}

export default NotFoundPage
