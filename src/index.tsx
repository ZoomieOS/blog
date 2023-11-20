// libraries
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// components
import { App } from "app/App";
// contexts
import ThemeProvider from "app/provider/ThemeProvider/ui/ThemeProvider";

import './shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
