import { customTwMergeWithPluginLogical } from './helper'

test('merges tailwind classes with important modifier correctly', () => {
    expect(customTwMergeWithPluginLogical('!font-medium !font-bold')).toBe('!font-bold')
    expect(customTwMergeWithPluginLogical('!font-medium !font-bold font-thin')).toBe(
        '!font-bold font-thin'
    )
    expect(customTwMergeWithPluginLogical('!right-2 !-inset-x-px')).toBe('!-inset-x-px')
    expect(customTwMergeWithPluginLogical('focus:!inline focus:!block')).toBe('focus:!block')
})
