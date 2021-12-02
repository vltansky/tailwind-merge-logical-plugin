import { customTwMergeWithPluginLogical } from './helper'

test('merges non-conflicting classes correctly', () => {
    expect(customTwMergeWithPluginLogical('border-t border-white/10')).toBe(
        'border-t border-white/10'
    )
    expect(customTwMergeWithPluginLogical('border-t border-white')).toBe('border-t border-white')
})
