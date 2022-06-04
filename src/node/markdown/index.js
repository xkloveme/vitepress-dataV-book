//========================================
//markdown plugins

exports.default = {
  xhtmlOut: true,
  lineNumbers: true,
  anchor: { permalink: false },
  toc: { includeLevel: [1,2] },
  linkify: false,

  config: (md) => {
    md
    .use(require ('./md-hints.cjs')) // asset hints
   // .use(require ('./md-icons.cjs')) // icons fa, mdi
   // .use(require ('markdown-it-deflist')) // deflists
  },
}


