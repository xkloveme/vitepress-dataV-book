// this file has code to be used "client or SSG" side Vue/SFC

import myLayout from './Layout.vue'
import defaultTheme from 'vitepress/dist/client/theme-default'

export const vptheme = (callback)=>{
  callback()
  return {
    ...defaultTheme,
    //Layout: myLayout,
  }
}
