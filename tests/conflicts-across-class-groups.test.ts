import { customTwMergeWithPluginLogical } from './helper'

test('handles conflicts across class groups correctly', () => {
    expect(customTwMergeWithPluginLogical('inset-1 inset-x-1')).toBe('inset-1 inset-x-1')
    expect(customTwMergeWithPluginLogical('inset-x-1 inset-1')).toBe('inset-1')
    expect(customTwMergeWithPluginLogical('inset-x-1 left-1 inset-1')).toBe('inset-1')
    expect(customTwMergeWithPluginLogical('inset-x-1 inset-1 left-1')).toBe('inset-1 left-1')
    expect(customTwMergeWithPluginLogical('inset-x-1 right-1 inset-1')).toBe('inset-1')
    expect(customTwMergeWithPluginLogical('inset-x-1 right-1 inset-x-1')).toBe('inset-x-1')
    expect(customTwMergeWithPluginLogical('inset-x-1 right-1 inset-y-1')).toBe(
        'inset-x-1 right-1 inset-y-1'
    )
    expect(customTwMergeWithPluginLogical('right-1 inset-x-1 inset-y-1')).toBe(
        'inset-x-1 inset-y-1'
    )
    expect(customTwMergeWithPluginLogical('inset-x-1 hover:left-1 inset-1')).toBe(
        'hover:left-1 inset-1'
    )
})

test('ring and shadow classes do not create conflict', () => {
    expect(customTwMergeWithPluginLogical('ring shadow')).toBe('ring shadow')
    expect(customTwMergeWithPluginLogical('ring-2 shadow-md')).toBe('ring-2 shadow-md')
    expect(customTwMergeWithPluginLogical('shadow ring')).toBe('shadow ring')
    expect(customTwMergeWithPluginLogical('shadow-md ring-2')).toBe('shadow-md ring-2')
})
