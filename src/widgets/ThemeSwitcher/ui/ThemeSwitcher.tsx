import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/provider/ThemeProvider";
import DarkIcon from 'shared/assets/icons/icon-dark.svg';
import LightIcon from 'shared/assets/icons/icon-light.svg';
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon width={24} height={24} /> : <LightIcon width={24} height={24} />}
        </Button>
    );
};
