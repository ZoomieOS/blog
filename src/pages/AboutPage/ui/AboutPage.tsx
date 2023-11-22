import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'

const AboutPage = (): ReactElement => {
  const { t } = useTranslation('about')

  return <h1>{t('title')}</h1>
}

export default AboutPage
