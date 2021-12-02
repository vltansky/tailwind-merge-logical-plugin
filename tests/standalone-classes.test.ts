import { customTwMergeWithPluginLogical } from './helper'

test('merges standalone classes from same group correctly', () => {
    expect(customTwMergeWithPluginLogical('inline block')).toBe('block')
    expect(customTwMergeWithPluginLogical('hover:block hover:inline')).toBe('hover:inline')
    expect(customTwMergeWithPluginLogical('hover:block hover:block')).toBe('hover:block')
    expect(
        customTwMergeWithPluginLogical(
            'inline hover:inline focus:inline hover:block hover:focus:block'
        )
    ).toBe('inline focus:inline hover:block hover:focus:block')
    expect(customTwMergeWithPluginLogical('underline line-through')).toBe('line-through')
    expect(customTwMergeWithPluginLogical('line-through no-underline')).toBe('no-underline')
})
