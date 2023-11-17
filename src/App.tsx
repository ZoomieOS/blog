// libraries
import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
// components
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
// helpers
import { classNames } from "./helpers/classNames";
// hooks
import { useTheme} from "./theme/useTheme";
// static
import './styles/index.scss';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Изменить тему</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас </Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
