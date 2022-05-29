import { vptheme } from '../../../src'
//import { vptheme } from 'vitepress-theme-book/theme'


//import register from '../../../src/core/register'

//const submodules = import.meta.globEager('~/components/**/*.vue')
//const stores = ()=> {}

export default {
  ...vptheme(() => {
    console.log('Callback inside Theme')
  }),
  //enhanceApp({app}) {
  //  register(app, submodules, stores)
  //},
}

