import { classNames } from 'shared/lib/classNames/classNames'
// Hooks
import { useTheme } from 'app/provider/ThemeProvider'
// Static
import './styles/index.scss'
import { AppRouter } from 'app/provider/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { type ReactElement, Suspense } from 'react'

export const App = (): ReactElement => {
  const { theme } = useTheme()

  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback=''>
              <Navbar/>

              <div className='content-page'>
                  <Sidebar/>
                  <AppRouter/>
              </div>
          </Suspense>
      </div>
  )
}
