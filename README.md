# vitepress-theme-book
A simple vitepress theme for online books



## Reference

https://github.com/emersonbottero/vitepress-dark-theme

https://github.com/ElMassimo/vitepress-theme

https://github.com/YunYouJun/vitepress-theme-you

https://github.com/flaribbit/vitepress-theme-sakura

https://github.com/dyzdyz010/vitepress-theme-oblivion

https://github.com/posva/vitepress-theme-nuxt-content

https://github.com/alex8088/vitepress-theme-vue

https://github.com/outlovecn/vitepress-theme-vitenote

https://github.com/clark-cui/vitepress-blog-zaun

https://github.com/xinlei3166/vitepress-theme-demoblock

https://github.com/emersonbottero/vitepress-plugin-mermaid

https://github.com/airene/vitepress-blog-pure

https://github.com/emersonbottero/vitepress-dark-theme


https://github.com/davay42/vitepress-pages
~~~
npm i -D vite-plugin-pages vite-plugin-pages-sitemap
npm i vitepress-pages

import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import { extendRoutes } from "vitepress-pages";
import generateSitemap from "vite-plugin-pages-sitemap"; //optional;

export default defineConfig({
  plugins: [
    Pages({
      dirs: [{ dir: ".", baseRoute: "." }],
      extensions: ["md"],
      ...extendRoutes(),
      onRoutesGenerated: (routes) =>
        generateSitemap({ routes, hostname: "http://localhost/" }), //provide a hostname and generate a `sitemap.xml` in the public folder
    }),
  ],
});
~~~

https://github.com/slidevjs/themes

---

## Modifications
Basic Styles
- tailwind
- tailwind/typography
- daisyui
- google font
- fontawesome
- css = vars, sidebar-links, layout


Markdown-it
- hint = upgrade hoist, component
- icon = fontawesome support
- deflist
- ... other markdown syntax
- container (custom blocks)
- emoji
- 
- code (prism)
- css = code, custom-blocks
- Embed = Youtube, FBsocial plugin, audio/podcast, videojs/shuttle
- 


Third Parties Layout functions
- Algolia Search
- Carbon Ads / Buy Sell Ads
- Google Analytics?
- Site Footer
- Site Dark Mode
- Site Back to Top floating button
- Sitemap
- FeedRSS
- Blog - Collection (Paged), Article, Tags
- PWA
- Multilingual
- Edit this page (gitlab or github)
- NetlifyCMS integration
- Layout (generic two drawer) => Skin (classic, simple, book)


Public
- robots.txt
- favicons
- manifest
- \_header
- nojekyl




Vue/Vite enhanced
- auto-module registration
- auto-store registration
- store based on Pinia, Axios, GraphQL, FB SDK
- Dynamic module (for 3d demos)
- Pages traversal (extract MDs to YAML)
- Pages expansion (hydrate YAML to MDs)
- vite-plugin-content (yaml json etc)
- vite-plugin-pwa
- vite-plugin-compress
- vite-plugin-radar
- vite-plugin-pages
- vue/use
- vite alias (~/)
- (permalink)
- (layout component)
 

---
**One Vitepress Repo**

https://gitlab.com/tspore/landing


**Split Vitepress Repo**

https://github.com/tangodata/vitepress-theme-book

https://gitlab.com/tangopedia/doc-library

**Target Vitepress Repo**

https://gitlab.com/tspore/tspore.gitlab.io
tspore.gitlab.io
= info.tangosingapore.com
tangosingapore.com

tangosingapore.com/practicafit 
tspore.gitlab.io/practicafit
=https://gitlab.com/tspore/practicafit

tangosingapore.com/web-ganges
tspore.gitlab.io/web-ganges
=https://gitlab.com/tspore/web-ganges


https://tspore.gitlab.io/project-letsdance

https://tspore.gitlab.io/project-adagio

https://tspore.gitlab.io/project-blindfold

https://tspore.gitlab.io/project-finder

https://tspore.gitlab.io/project-gofest

https://tspore.gitlab.io/homepage


