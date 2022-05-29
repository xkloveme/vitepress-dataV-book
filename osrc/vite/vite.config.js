//========================================
//vite.config.js

const SOURCE = '../..' // relative to "source/app/extensions"
import path from 'path'

// vite import *.yaml *.json *.csv etc
import content from '@originjs/vite-plugin-content'

//import vql from 'vite-plugin-vue-gql'
//import radar from 'vite-plugin-radar'
//import compress from 'vite-plugin-compress'
//import Pages from 'vite-plugin-pages'
//import Components from 'unplugin-vue-components/vite'
//import AutoImport from 'unplugin-auto-import/vite'
//import Unocss from 'unocss/vite'


export default {
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, SOURCE)}/`,
    },
  },
  plugins: [
    content(),
    //vql(),
    //radar(siteconfig.analytics),
    //compress(),
    //Pages(),
    //AutoImport({
    //}),
    //Components({
    //}),
    //Unocss(),
  ],
}
