
//import { vptheme } from 'vitepress-theme-book/theme'

import { vptheme, register } from '../../../src/client'

const themeconfig = vptheme(
  () => {console.log('Callback inside Theme')}
)



import theme from 'vitepress/theme'
export default {
  //...themeconfig,
  ...theme,
  enhanceApp(ctx) {
    let submodules = import.meta.globEager('~/components/**/*.vue')
    register(ctx.app, submodules)
  }
}

