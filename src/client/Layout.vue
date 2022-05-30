<template lang="pug">
.main
  h1 Hello World
  hr

  Content
  hr
  pre
    | page: {{ page }}
    | lang: {{ lang }}
    | route: {{ route }}
  hr
  .footer {{h}}

</template>


<style>
</style>


<script setup>
import { useData, useRoute } from 'vitepress'
import { ref } from 'vue'
const h=ref("hello")
const route=useRoute()
const { page, lang }=useData()
</script>
