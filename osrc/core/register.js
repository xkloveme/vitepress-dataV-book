/* Register components */
export default function (app, components, stores) {
  // install auto components under app/modules/
  Object.entries(components).forEach(([path, definition]) => {
    const _componentName = path.split('/').pop().replace(/\.\w+$/, '')
    app.component(_componentName, definition.default)
  })
  // install runtime Dyn component
  //app.component('Dyn', dyn)
  // install data stores from app/stores/
  //app.use(stores)
}
