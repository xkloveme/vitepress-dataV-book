import path from "path"
import { defineConfig } from "vitepress"
import { nav, sidebar,  } from './navigation'
import { head, socialLink, footer, } from './meta'
import { vpconfig } from  "../../src/node"

//----------------------
const repo = 'tangodata/vitepress-theme-book'
const base = '/vitepress-theme-book/'
const logo = base+"bk.png"
const title = "Vitepress-Theme-Book"
const description = "Vitepress-powered"
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
