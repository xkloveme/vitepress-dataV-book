import path from 'path'

/*
export * from './vitepress'
export * from './core'

export * from './skin'
export { default as Theme } from './theme.config'
export { default as MdConfig} from './md.config'
export { default as ViteConfig} from './vite.config'
export { default as VueConfig } from './vue.config'
export { default as Theme } from './theme.config'
*/




import mdconfig from './markdown'
import viteconfig from './vite'
import vueconfig from './core/vue.config'

export const vpconfig = (contentdir)=>{
  return {
    markdown: mdconfig,
    vue: vueconfig,
    vite: {
      plugins: viteconfig,
      resolve: {
        alias: { '~/': contentdir, },
      },
    },
  }
}



