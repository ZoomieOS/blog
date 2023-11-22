import { classNames } from './classNames'

describe('classNames', () => {
  test('with first parameter', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional class', () => {
    const expected = 'someClass wrapper is-disabled'

    expect(classNames('someClass', {}, ['wrapper is-disabled'])).toBe(expected)
  })

  test('with mods class', () => {
    const expected = 'someClass wrapper is-disabled hovered active'

    expect(
      classNames(
        'someClass',
        { hovered: true, active: true },
        ['wrapper is-disabled'])
    ).toBe(expected)
  })

  test('with one is mods equals false', () => {
    const expected = 'someClass wrapper is-disabled hovered'

    expect(
      classNames(
        'someClass',
        { hovered: true, active: false },
        ['wrapper is-disabled'])
    ).toBe(expected)
  })

  test('with check classNames of undefined', () => {
    const expected = 'someClass wrapper is-disabled hovered'

    expect(
      classNames(
        'someClass',
        { hovered: true, active: undefined },
        ['wrapper is-disabled'])
    ).toBe(expected)
  })
})
