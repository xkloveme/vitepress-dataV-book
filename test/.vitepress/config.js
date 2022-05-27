import { defineConfig } from 'vitepress'

import { vpconfig } from '../../src/index'

import path from 'path'
const contentdir=`${path.resolve(__dirname, '..')}/`

export default defineConfig({
  ...vpconfig(contentdir),

  base:'/',
  title: 'Vitepress-Theme-Book',
  description: "vitepress theme book",
/*  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/logo.svg'
      }
    ]
  ],
  vite: {
    build: {
      minify: 'terser'
    }
  }
*/

  srcExclude: [
    'components/**/*', // vue+js
    'site/**/*', // page data
    'public/**/*', // public
    '/**/_*/*', // unpublished drafts
  ],

//  markdown: MdConfig,
//  vite: ViteConfig,
//  vue: VueConfig,


  themeConfig: {
    nav: [
      {
        text: 'Alice Book',
        link: '/alice-00',
      },
      {
        text: 'Theme Info',
        items: [
          { text: 'Sandbox',
            link: '/sandbox',
          },
          { text: 'About',
            link: '/about',
          },
          {
            text: 'Home',
            link: '/index',
          },
        ],
      },
    ],

    sidebar: [
      {
        "text": "Documentation",
        "children": [
          {
            "text": "Home",
            "link": "/index"
          },
          {
            "text": "About",
            "link": "/about"
          },
          {
            "text": "Sandbox",
            "link": "/sandbox"
          },
        ],
      },
      {
        "text": "Alice's Adventures in Wonderland",
        "children": [
          {
            "text": "Frontispiece",
            "link": "/alice-00"
          },
          {
            "text": "I. Down the Rabbit-Hole",
            "link": "/alice-01"
          },
          {
            "text": "II. The Pool of Tears",
            "link": "/alice-02"
          },
          {
            "text": "III. A Caucus-Race and a Long Tale",
            "link": "/alice-03"
          },
          {
            "text": "VI. The Rabbit Sends in a Little Bill",
            "link": "/alice-04"
          },
          {
            "text": "V. Advice fom a Caterpillar",
            "link": "/alice-05"
          },
          {
            "text": "VI. Pig and Pepper",
            "link": "/alice-06"
          },
          {
            "text": "VII. A Mad Tea-Party",
            "link": "/alice-07"
          },
          {
            "text": "VIII. The Queen's Croquet-Ground",
            "link": "/alice-08"
          },
          {
            "text": "IX. The Mock Turtle's Story",
            "link": "/alice-09"
          },
          {
            "text": "X. The Lobster Quadrille",
            "link": "/alice-10"
          },
          {
            "text": "XI. Who Stole the Tarts?",
            "link": "/alice-11"
          },
          {
            "text": "XII. Alice's Evidence",
            "link": "/alice-12"
          },
          {
            "text": "Epigraph",
            "link": "/alice-99"
          },
        ],
      },
    ],
  },
})
