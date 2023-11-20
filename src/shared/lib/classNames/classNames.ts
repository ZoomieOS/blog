type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, adtCls: string[] = []): string {
    return [
        cls,
        ...adtCls.filter(Boolean),
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}
