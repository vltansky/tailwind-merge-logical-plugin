import { customTwMergeWithPluginLogical } from './helper'

test('merges classes with per-side border colors correctly', () => {
    expect(customTwMergeWithPluginLogical('border-t-some-blue border-t-other-blue')).toBe(
        'border-t-other-blue'
    )
    expect(customTwMergeWithPluginLogical('border-t-some-blue border-some-blue')).toBe(
        'border-some-blue'
    )
})
