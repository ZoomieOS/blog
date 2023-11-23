// libraries
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// components
import { App } from 'app/App'
// contexts
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider'

import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const container = document.getElementById('root')

/* eslint-disable  @typescript-eslint/no-non-null-assertion */
const root = createRoot(container!)
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)
