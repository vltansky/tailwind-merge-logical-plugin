# tailwind-merge-logical-plugin

[Tailwind Logical](https://github.com/stevecochrane/tailwindcss-logical) Plugin for [Tailwind Merge](https://github.com/dcastil/tailwind-merge)

```ts
import { extendTailwindMerge } from 'tailwind-merge'
import { withLogical } from 'tailwind-merge-logical-plugin'

const customTwMergeWithPluginLogical = extendTailwindMerge(withLogical)

customTwMergeWithPluginLogical(
    'mlb-1 mlb-3 hover:border-bs-black',
    'hover:border-bs-yellow inset-block-end-[15px]'
)
// → 'mlb-3 hover:border-bs-yellow inset-block-end-[15px]'
```
