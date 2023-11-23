import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Spinner.module.scss'
import { type ReactElement } from 'react'

interface SpinnerProps {
  className?: string
}

export const Spinner = ({ className }: SpinnerProps): ReactElement => {
  return (
      <div className={classNames(cls.Spinner, {}, [className])}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
      </div>
  )
}
