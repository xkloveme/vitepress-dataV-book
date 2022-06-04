
//import { vptheme } from 'vitepress-theme-book/theme'
import { vptheme } from '../../../src/client'

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

function register(app, components) {
  Object.entries(components)
  .forEach(
    ([path, definition]) => {
      const _compoName = path.split('/').pop().replace(/\.\w+$/, '')

      console.log('Register Component [',_compoName,']')
      app.component(_compoName, definition.default)
    }
  )
}
