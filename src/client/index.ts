// this file has code to be used "client or SSG" side Vue/SFC

import './tailwind.css'
import myLayout from './Layout.vue'
import defaultTheme from 'vitepress/client/theme-default'
//import { appendFile } from 'fs'

export const vptheme = (callback)=>{
  return {
    ...defaultTheme,
    Layout: myLayout,
    enhanceApp(ctx) {
      let submodules = import.meta.globEager('~/components/**/*.vue')
      register(ctx.app, submodules)
      callback(ctx.app)
    }
  }
}



/* Register components */
export function register(app, components) {
  // install auto components under app/modules/
  Object.entries(components).forEach(([path, definition]) => {
    const _componentName = path.split('/').pop().replace(/\.\w+$/, '')
    console.log('Register Component [',_componentName,']')
    app.component(_componentName, definition.default)
  })
  // install runtime Dyn component
  //app.component('Dyn', dyn)
  // install data stores from app/stores/
  //app.use(stores)
}


/*
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
*/
