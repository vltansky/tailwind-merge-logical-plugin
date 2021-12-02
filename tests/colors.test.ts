import { customTwMergeWithPluginLogical } from './helper'

test('handles color conflicts properly', () => {
    expect(customTwMergeWithPluginLogical('bg-grey-5 bg-hotpink')).toBe('bg-hotpink')
    expect(customTwMergeWithPluginLogical('hover:bg-grey-5 hover:bg-hotpink')).toBe(
        'hover:bg-hotpink'
    )
})
