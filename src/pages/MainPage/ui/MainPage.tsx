import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'

const MainPage = (): ReactElement => {
  const { t } = useTranslation('main')

  return <h1>{t('title')}</h1>
}

export default MainPage
