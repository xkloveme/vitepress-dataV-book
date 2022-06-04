// this file has code to be used inside "node or server" side
export { default as vp } from './util'

import markdown from './markdown'

export const vpconfig = (contentdir)=>{
  return {
    vite: {
      resolve: {
        alias: { '~/': contentdir, },
      },
    },

    markdown: {
      xhtmlOut: true,
      lineNumbers: true,
      anchor: { permalink: false },
      toc: { includeLevel: [1,2] },
      linkify: false,

      config: (md) => {
        md
        .use(require ('./markdown/md-hints.cjs')) // asset hints
        .use(require ('./markdown/md-icons.cjs')) // icons fa, mdi
        .use(require ('markdown-it-deflist')) // deflists
      },
    },
  }
}


