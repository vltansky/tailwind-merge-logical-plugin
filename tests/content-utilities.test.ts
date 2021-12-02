import { customTwMergeWithPluginLogical } from './helper'

test('merges content utilities correctly', () => {
    expect(customTwMergeWithPluginLogical("content-['hello'] content-[attr(data-content)]")).toBe(
        'content-[attr(data-content)]'
    )
})
