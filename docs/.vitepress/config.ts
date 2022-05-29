
import { defineConfig } from 'vitepress'

import { vpconfig } from 'vitepress-theme-book'
//import baseConfig from 'vitepress-theme-book/config'

import path from 'path'

import { nav, sidebar } from './navigation'

const contentdir=`${path.resolve(__dirname, '..')}/`

export default defineConfig({
  ...vpconfig(contentdir),

  base:'/',
  title: 'Vitepress-Theme-Book',
  description: "vitepress theme book",

  srcExclude: [
    'components/**/*', // vue+js
    'site/**/*', // page data
    'public/**/*', // public
    '/**/_*/*', // unpublished drafts
  ],

  themeConfig: {
    repo: 'tangodata/vitepress-theme-book',
    logo: '/favicon.svg',
    iconClass: 'i-ri-layout-3-line',

    docsDir: 'docs',
    docsBranch: 'main',
    docsRepo: 'tangodata/vitepress-theme-book',

    editLinks: true,
    editLinkText: '帮助改善此页面',
    lastUpdated: '上次更新',

    nav: nav,
    sidebar: sidebar,
  },
})

