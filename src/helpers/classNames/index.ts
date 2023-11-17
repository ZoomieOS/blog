type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, adtCls: string[]): string {
    return [
        cls,
        ...adtCls,
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}
