<template>
  <tiny-rate v-model="rate" radio></tiny-rate>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate = ref(2)
</script>
