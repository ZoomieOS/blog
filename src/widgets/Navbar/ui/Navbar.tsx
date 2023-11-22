import { type FC } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <div className={cls.links}>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>{t('link-main-label')}</AppLink>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('link-about-label')} </AppLink>
          </div>
      </div>
  )
}
