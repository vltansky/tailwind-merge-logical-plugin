import { customTwMergeWithPluginLogical } from './helper'

test('conflicts across prefixes', () => {
    expect(customTwMergeWithPluginLogical('hover:block hover:inline')).toBe('hover:inline')
    expect(customTwMergeWithPluginLogical('hover:block hover:focus:inline')).toBe(
        'hover:block hover:focus:inline'
    )
    expect(
        customTwMergeWithPluginLogical('hover:block hover:focus:inline focus:hover:inline')
    ).toBe('hover:block focus:hover:inline')
    expect(customTwMergeWithPluginLogical('focus-within:inline focus-within:block')).toBe(
        'focus-within:block'
    )
})
