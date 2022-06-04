//========================================
//markdown plugins

/*
sdfgssdf/markdown-it-vue
 >"markdown-it": "^10.0.0",
  "markdown-it-abbr": "^1.0.4",
 >"markdown-it-emoji": "^1.4.0",
 ="markdown-it-icons": "^0.4.1",
  "markdown-it-ins": "^3.0.0",
  "markdown-it-mark": "^3.0.0",
  "markdown-it-sub": "^1.0.0",
  "markdown-it-sup": "^1.0.0",
 ="markdown-it-deflist": "^2.0.3",
 >"markdown-it-container": "^2.0.0",
 ="markdown-it-footnote": "^3.0.1",
  "markdown-it-task-lists": "^2.1.1",
  "markdown-it-katex": "^2.0.3",
  "markdown-it-latex": "^0.2.0",
  "markdown-it-source-map": "^0.1.1",
  "markdown-it-toc-and-anchor": "^4.1.2",
  "markdown-it-github-toc": "^3.2.4",
  "highlight.js": "^9.16.2",
  "github-markdown-css": "^3.0.1",
 >markdown-it-anchor
 >markdown-it-attrs
 >markdown-it-table-of-contents
*/

/*
Most Common and Useful Markdown-it plugins
------------------------------------------
const dl = require('markdown-it-deflist')
const cicons = require ('./md-icons')
const chints = require ('./md-hints')

sdfgssdf/markdown-it-vue
 >"markdown-it": "^10.0.0",
 >"markdown-it-emoji": "^1.4.0",
 >"markdown-it-container": "^2.0.0",
 >markdown-it-anchor
 >markdown-it-attrs
 >markdown-it-table-of-contents

 ="markdown-it-icons": "^0.4.1",
 ="markdown-it-deflist": "^2.0.3",
 ="markdown-it-footnote": "^3.0.1",

  "markdown-it-abbr": "^1.0.4",
  "markdown-it-ins": "^3.0.0",
  "markdown-it-mark": "^3.0.0",
  "markdown-it-sub": "^1.0.0",
  "markdown-it-sup": "^1.0.0",
  "markdown-it-task-lists": "^2.1.1",
  "markdown-it-katex": "^2.0.3",
  "markdown-it-latex": "^0.2.0",
  "markdown-it-source-map": "^0.1.1",

  "markdown-it-toc-and-anchor": "^4.1.2",
  "markdown-it-github-toc": "^3.2.4",
  "highlight.js": "^9.16.2",
  "github-markdown-css": "^3.0.1",
*/

export default {
  xhtmlOut: true,
  lineNumbers: true,
  anchor: { permalink: false },
  toc: { includeLevel: [1,2] },
  linkify: false,
  config: (md) => {
    md
    .use(require ('./md-hints.cjs')) // asset hints
    .use(require ('./md-icons.cjs')) // icons fa, mdi
    .use(require ('markdown-it-deflist')) // deflists
  },
}

/*
const dl = require('markdown-it-deflist')
const cicons = require ('./md-icons')
const chints = require ('./markdown/md-hints/md-hints')
config: (md) => {
  md
  .use(cicons) // icons fa, mdi
  .use(chints) // asset hints
  .use(dl) // deflists
},
*/



  //==================================
  // inside vitepress, md already has:
  // -container, -emoji,
  // -anchor, -attrs, -table-of-contents
  //----------------------------------
  // this theme adds the followings
  // -hints (allows multiple script sections)
  // -deflist, -icons, -footnotes
  // -abbr, -ins, -mark, -sub, -sup,
  //----------------------------------
  // advanced content types
  // -katex, -latex, -task-lists,
  // -merlion, -drawio?, -music?,
  // -chart?, -3d?,


