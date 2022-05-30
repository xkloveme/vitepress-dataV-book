
//import { vptheme } from 'vitepress-theme-book/theme'


import { vptheme } from '../../../src/client'

const themeconfig = vptheme(
  () => {console.log('Callback inside Theme')}
)



import theme from 'vitepress/theme'
export default {
  ...themeconfig,
  //...theme,
}

