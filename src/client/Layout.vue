<template lang="pug">
.main
  h1 Hello World
  hr
  Content
  hr
  .footer {{h}}
</template>


<style>
</style>


<script setup>
import { ref } from 'vue'
const h=ref("hello")
</script>
