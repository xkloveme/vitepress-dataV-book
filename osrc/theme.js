//export { default as Theme } from 'vitepress/theme'
/*
import DarkStyles from './dark-theme.css'
export { DarkStyles }
import DarkLayout from './DarkLayout.vue'
Layout: DarkLayout
*/


import DefaultTheme from 'vitepress/theme'
//const submodules = import.meta.globEager('~/components/**/*.vue')
//const stores = ()=> {}

export const vptheme = (callback)=>{
  return {
    ...DefaultTheme,
    //enhanceApp({app}) {
    // register(app, ... submodules, stores)
    // autoregister submodules...
    // autoregister stores...
    //},
  }
}
