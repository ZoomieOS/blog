import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import { Spinner } from 'shared/ui/Spinner/Spinner'
import { type ReactElement } from 'react'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps): ReactElement => {
  return (
      <div className={classNames(cls.PageLoader, {}, [className])}>
          <Spinner />
      </div>
  )
}
