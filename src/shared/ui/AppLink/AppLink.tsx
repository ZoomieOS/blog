import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
// helpers
import cls from './AppLink.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
// static

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        theme= AppLinkTheme.PRIMARY,
        children,
        ...adtProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...adtProps}
        >
            {children}
        </Link>
    );
};
