import path from "path"
import { defineConfig } from "vitepress"
import { nav, sidebar,  } from './navigation'
import { head, socialLink, footer, } from './meta'
import { vpconfig } from  "../../src/node"

//----------------------
const repo = 'xkloveme/vitepress-dataV-book'
const base = '/vitepress-dataV-book/'
const logo = base+"bk.png"
const title = "大屏开发指南"
const description = "大屏开发指南"
//----------------------
const outDir = "../dist"
const baseconfig = vpconfig(`${path.resolve(__dirname, "..")}/`)
//----------------------

export default defineConfig({
  ...baseconfig,

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
