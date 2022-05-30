export { default as vp } from './util'


export const vpconfig = (contentdir)=>{
  return {
    vite: {
      resolve: {
        alias: { '~/': contentdir, },
      },
    },
  }
}



import Layout from './Layout.vue'
//import defaultTheme from 'vitepress/dist/client/theme-default'

export const vptheme = (callback)=>{
  return {
    layout: Layout,
    //...defaultTheme,
  }
}
