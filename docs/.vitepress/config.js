import { nav, sidebar, socialLink, footer, } from './navigation'
import { defineConfig } from "vitepress"


import path from "path"
const contentdir = `${path.resolve(__dirname, "..")}/`



import { vpconfig } from  "../../src/node"
const baseconfig = vpconfig(contentdir)

export default defineConfig({
  ...baseconfig,

  base: "/",
  title: "Vitepress-Theme-Book",
  description: "Vitepress-powered",
  lang: 'en-us',
  srcExclude: [
    // "components/**/*",
    // "public/**/*",
    "/**/_*/*",
  ],

  themeConfig: {
    logo: "/bk.png",
    nav,
    sidebar,
    socialLink,
    footer,
  }

/*
    repo: "tangodata/vitepress-theme-book",
    iconClass: "i-ri-layout-3-line",
    docsDir: "docs",
    docsBranch: "main",
    docsRepo: "tangodata/vitepress-theme-book",
    editLinks: true,
*/


})
