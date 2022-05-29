import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  //enhanceApp(ctx) { AppMain(ctx) },
}

/*
const submodules = import.meta.globEager('./components/ ** / *.vue')

function AppMain({app, router, siteData}) {
  // install data stores from app/stores/
  //app.use(stores)
  // install auto components under app/modules/
  Object.entries(submodules).forEach(([path, definition]) => {
    const _componentName = path.split('/').pop().replace(/\.\w+$/, '')
    app.component(_componentName, definition.default)
  })
  // install runtime Dyn component
  //app.component('Dyn', dyn)
}
*/

