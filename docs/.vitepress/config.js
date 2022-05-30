import { nav, sidebar } from './navigation'
import { defineConfig } from "vitepress"


import path from "path"
const contentdir = `${path.resolve(__dirname, "..")}/`

import { vpconfig } from  "../../src/node"
const baseconfig = vpconfig(contentdir)



export default defineConfig({
  ...baseconfig,
  base: "/",
  title: "Vitepress-Theme-Book",
  description: "vitepress theme book",
  srcExclude: [
    "components/**/*",
    "public/**/*",
    "/**/_*/*"
  ],
  themeConfig: {
    repo: "tangodata/vitepress-theme-book",
    logo: "/bk.png",
    iconClass: "i-ri-layout-3-line",
    docsDir: "docs",
    docsBranch: "main",
    docsRepo: "tangodata/vitepress-theme-book",
    editLinks: true,
    nav,
    sidebar
  }
})
