---
---

# Modifications to Vitepress

## Markdown

1. `<script>`, `<style>` are hoisted out of Markdown stream and placed into
their own sections, as required for Vue SFC. Multiple sections of the same types are combined.

2. `<CustomComponents>` are identified by PascalCase or hyphenated syntax.


3. Icons :fa-xxx: becomes `<i class="fa fa-xxx">`, a FontAwesome icon



## Vite

1. Alias `~/` is added to point to the root of the source directory.  This is parent to 'public', 'components', 'stores' and user collections of posts.

2. Vite plugins are added to process "yaml", "json", "csv" data files.  This allow expressions like `import MyVar from 'mydata.yaml'`


## Vue



## Scripts (pre-build, post-build)

1. Convert Data to MD

2. Convert MD to Data

3. Process Sitemap, Feed, Related, Tags, Pagination

