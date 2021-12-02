import { customTwMergeWithPluginLogical } from './helper'

test('logical', () => {
    ;[
        'bs',
        'min-bs',
        'max-bs',
        'is',
        'min-is',
        'max-is',
        'mlb',
        'mli',
        'mbs',
        'mbe',
        'mis',
        'mie',
        'plb',
        'pli',
        'pbs',
        'pbe',
        'pis',
        'pie',
        'space-b',
        'space-i',
    ].forEach((tag) => {
        expect(
            customTwMergeWithPluginLogical(
                `${tag}-1 ${tag}-4 focus:${tag}-2 focus:${tag}-[4px] hover:${tag}-[2px] hover:${tag}-[1px]`
            )
        ).toBe(`${tag}-4 focus:${tag}-[4px] hover:${tag}-[1px]`)
    })
    ;['border-bs', 'border-be', 'border-is', 'border-ie'].forEach((tag) => {
        expect(
            customTwMergeWithPluginLogical(
                `${tag}-3 ${tag}-1 ${tag}-2 focus:${tag}-black focus:${tag}-yellow hover:${tag}-3 hover:${tag}-4`
            )
        ).toBe(`${tag}-2 focus:${tag}-yellow hover:${tag}-4`)
    })
    // ;['text', 'clear', 'float'].forEach((tag) => {
    //     expect(
    //         customTwMergeWithPluginLogical(
    //             `${tag}-left ${tag}-start ${tag}-end focus:${tag}-end focus:${tag}-start hover:${tag}-start hover:${tag}-end`
    //         )
    //     ).toBe(`${tag}-end focus:${tag}-start hover:${tag}-end`)
    // })
    expect(customTwMergeWithPluginLogical('text-black text-left text-end')).toBe(
        'text-black text-end'
    )
})
