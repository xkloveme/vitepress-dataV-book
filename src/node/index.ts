// this file has code to be used inside "node or server" side
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


