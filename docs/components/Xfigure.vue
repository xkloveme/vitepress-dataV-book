<template lang="pug">
.not-prose.text-center
  .shadow.shadow-md.rounded.rounded-sm.p-2
    //-h3 IMAGE CARD
    //-i Check out {{ src }}
    figure
      img(:src="src" :alt="alt" :title="caption")
      figcaption.text-sm.px-4.my-0
        i {{caption}}
</template>

<script setup>
const name = 'Xfigure'

const props = defineProps ({
  caption: String,
  alt: String,
  src: String,
})

</script>
