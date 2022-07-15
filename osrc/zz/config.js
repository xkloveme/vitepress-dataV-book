import { nav, sidebar } from './navigation'
import { defineConfig } from "vitepress"

import path from "path"
const contentdir = `${path.resolve(__dirname, "..")}/`


import { vpconfig } from  '../zz'     //"../../src"
const baseconfig = vpconfig(contentdir)

export default defineConfig({
  ...baseconfig,
  base: "/",
  title: "dataV",
  description: "dataV上手指南",
  srcExclude: [
    "components/**/*",
    "public/**/*",
    "/**/_*/*"
  ],
  themeConfig: {
    repo: "xkloveme/vitepress-dataV-book",
    logo: "/bk.png",
    iconClass: "i-ri-layout-3-line",
    docsDir: "docs",
    docsBranch: "main",
    docsRepo: "xkloveme/vitepress-dataV-book",
    editLinks: true,
    nav,
    sidebar
  }
})
