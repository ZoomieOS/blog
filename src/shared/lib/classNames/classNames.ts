type Mods = Record<string, boolean | string | undefined>

export function classNames (cls: string, mods: Mods = {}, adtCls: Array<string | undefined> = []): string {
  return [
    cls,
    ...adtCls.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className)
  ]
    .join(' ')
}
