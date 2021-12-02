import { twMerge } from 'tailwind-merge'

import { customTwMergeWithPluginLogical } from './helper'

test('has correct export types', () => {
    expect(twMerge).toStrictEqual(expect.any(Function))
    expect(customTwMergeWithPluginLogical).toStrictEqual(expect.any(Function))
})

test('customTwMergeWithPluginLogical() has correct inputs and outputs', () => {
    expect(customTwMergeWithPluginLogical('')).toStrictEqual(expect.any(String))
    expect(customTwMergeWithPluginLogical('hello world')).toStrictEqual(expect.any(String))
    expect(customTwMergeWithPluginLogical('-:-:-:::---h-')).toStrictEqual(expect.any(String))
    expect(customTwMergeWithPluginLogical('hello world', '-:-:-:::---h-')).toStrictEqual(
        expect.any(String)
    )
    expect(
        customTwMergeWithPluginLogical('hello world', '-:-:-:::---h-', '', 'something')
    ).toStrictEqual(expect.any(String))
    expect(customTwMergeWithPluginLogical('hello world', undefined)).toStrictEqual(
        expect.any(String)
    )
    expect(customTwMergeWithPluginLogical('hello world', undefined, null)).toStrictEqual(
        expect.any(String)
    )
    expect(customTwMergeWithPluginLogical('hello world', undefined, null, false)).toStrictEqual(
        expect.any(String)
    )

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const noRun = () => {
        // @ts-expect-error
        customTwMergeWithPluginLogical(0)
        // @ts-expect-error
        customTwMergeWithPluginLogical(123)
        // @ts-expect-error
        customTwMergeWithPluginLogical(true)
        // @ts-expect-error
        customTwMergeWithPluginLogical({})
        // @ts-expect-error
        customTwMergeWithPluginLogical(new Date())
        // @ts-expect-error
        customTwMergeWithPluginLogical(() => {})
    }
})
