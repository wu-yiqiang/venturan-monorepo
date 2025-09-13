<template>
  <section class="Button">
   设置页面 {{ title }}
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
const props = defineProps({
    title: {
      type: String,
      default: '',
    },
});
</script>
<style lang="scss" scoped>

//.Button{}
</style>
