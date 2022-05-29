export const vpconfig (contentdir)=>{
  return {
    vite: {
      resolve: {
        alias: { '~/': contentdir, },
      },
    },
  }
}

import DefaultTheme from 'vitepress/theme'
export const vptheme = (callback)=>{
  return {
    ...DefaultTheme,
  }
}
