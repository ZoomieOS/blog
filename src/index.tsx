// libraries
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// components
import { App } from 'app/App'
// contexts
import ThemeProvider from 'app/provider/ThemeProvider/ui/ThemeProvider'

import './shared/config/i18n/i18n'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)
