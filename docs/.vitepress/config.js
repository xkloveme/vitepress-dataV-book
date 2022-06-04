import { defineConfig } from "vitepress"
import { nav, sidebar, socialLink, footer, } from './navigation'
import path from "path"
const contentdir = `${path.resolve(__dirname, "..")}/`
import { vpconfig } from  "../../src/node"
const baseconfig = vpconfig(contentdir)

const base = '/vitepress-theme-book/'
const logo = base+"bk.png"

export default defineConfig({
  ...baseconfig,

  outDir: "../dist",
  base,

  title: "Vitepress-Theme-Book",
  description: "Vitepress-powered",
  lang: 'en-us',
  srcExclude: [
    // "components/**/*",
    // "public/**/*",
    "/**/_*/*",
  ],
  lastUpdated: false,

  themeConfig: {
    nav,
    sidebar,
    socialLink,
    footer,
    logo,
    editLink: {
      repo: 'tangodata/vitepress-theme-book',
      dir: 'docs',
      text: 'Edit this page on GitHub',
    },
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
