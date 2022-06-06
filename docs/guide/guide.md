---
sidebar: 5
---

# Guide


## Files Layout

Repo Layout

```ts
Repo Directory/
  package.json
  README.md
  tailwind.config.js
  .vitepress/
    config.js
    navigation.js
    meta.js
    theme/
      index.js
  source/
    **/*.md
    **/*.{png,jpg,svg,etc}
    public/
    components/
      **/*.vue
```

## Add Dependency

```bash
pnpm add https://github/tangodata/vitepress-theme-book
```

## Modify Builder Config

modify `.vitepress/config.js`

```ts
// docs/.vitepress/config.js

import path from "path"
import { defineConfig } from "vitepress"
import { nav, sidebar,  } from './navigation'
import { head, socialLink, footer, } from './meta'
import { vpconfig } from  'vitepress-theme-book/node"

//----------------------
const repo = '(this repo)'
const base = '/(repo-base)/'
const logo = '(logo url)'
const title = "(title)"
const description = "(description)"
//----------------------
const outDir = "(build dir)"
const source = `${path.resolve(__dirname, "..")}
/` // where ~/ alias should point to

//----------------------

export default defineConfig({
  ... vpconfig(source),
  srcExclude: [
    "components/**/*",
    "public/**/*",
    "/**/_*/*",
  ],
  lang: 'en-us',
  lastUpdated: false,
  title,
  description,
  outDir,
  base,
  head,

  themeConfig: {
    nav,
    sidebar,
    socialLink,
    footer,
    logo,
    editLink: {
      repo,
      branch: 'main',
      dir: 'docs',
      //text: 'Edit this page on GitHub',
    },
  }
})
```

modify `.vitepress/navigation.js`
```
export const nav = [
  {
    text: 'Theme Info',
    link: '/guide/',
  },
  {
    text: 'Sample Book',
    link: '/alice/alice-00',
  },
]

export const sidebar = [
  {
    "text": "Theme Info",
    "collapsible": true,
    "items": [
      {
        "text": "About",
        "link": "/guide/"
      },
      {
        "text": "Guide",
        "link": "/guide/guide"
      },
    ],
  },
  {
    "text": "Alice's Adventures in Wonderland",
    "collapsible": true,
    "items": [
      {
        "text": "Frontispiece",
        "link": "/alice/alice-00"
      },
      {
        "text": "I. Down the Rabbit-Hole",
        "link": "/alice/alice-01"
      },
    ],
  },
]
```


modify `.vitepress/meta.js`
```
export const head =  [
  ['link', {
    rel: 'icon', type: 'image/svg+xml', href: '/logo.svg'
  }],
]

export const socialLink = [
  {
    icon: 'github',
    link: 'https://github.com/tangodata/vitepress-theme-book',
  },
]

export const footer = {
  message: 'Released under the MIT License.',
  copyright: 'Copyright © 2022 Tangueros.org'
}
```



## Modify Runtime Config

modify `.vitepress/theme/index.js`

```ts
// docs/.vitepress/theme/index.js

import { vptheme, register } from 'vitepress-theme-book/client/'

export default {
  ... vptheme(),
  enhanceApp(ctx) {
    let submodules = import.meta.globEager('~/components/**/*.vue')
    register(ctx.app, submodules)
    // optionally connect ctx.app to stores/pinia/vuex
  }
}
```



...
