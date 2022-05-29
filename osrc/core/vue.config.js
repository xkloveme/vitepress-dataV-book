//========================================
//vue.config.js

// extend with vue plugins?

export default {

}


/*
//import vue from '@vitejs/plugin-vue'
//vite.config.js => plugins: [vue()]



  //vitejs/plugin-vue:
  include: [/\.vue$/, /\.md$/]
  exclude:
  ssr:
  isProduction:

  //custom element mode of vue3.2
  customElements:

  //reactivity transform vue3.2.25
  reactivityTransform:

  //options for vue/compiler-sfc
  script:
  template:
  style:


  //e.g.
  template: {
    compilerOptions: {
      //...
    },
    transformAssetUrls: {
      // default tags
      tags: {
        video: ['src', 'poster'],
        source: ['src'],
        img: ['src'],
        image: ['xlink:href', 'href'],
        use: ['xlink:href', 'href']
      }
    }
  }


  //e.g.
  //vite plugin example
  const vueI18nPlugin = {
    name: 'vue-i18n',
    transform(code, id) {
      if (!/vue&type=i18n/.test(id)) {
        return
      }
      if (/\.ya?ml$/.test(id)) {
        code = JSON.stringify(require('js-yaml').load(code.trim()))
      }
      return `export default Comp => {
        Comp.i18n = ${code}
      }`
    }
  }


*/
