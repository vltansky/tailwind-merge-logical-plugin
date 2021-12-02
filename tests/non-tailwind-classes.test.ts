import { customTwMergeWithPluginLogical } from './helper'

test('does not alter non-tailwind classes', () => {
    expect(customTwMergeWithPluginLogical('non-tailwind-class inline block')).toBe(
        'non-tailwind-class block'
    )
    expect(customTwMergeWithPluginLogical('inline block inline-1')).toBe('block inline-1')
    expect(customTwMergeWithPluginLogical('inline block i-inline')).toBe('block i-inline')
    expect(customTwMergeWithPluginLogical('focus:inline focus:block focus:inline-1')).toBe(
        'focus:block focus:inline-1'
    )
})
