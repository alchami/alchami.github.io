<script setup>
const props = defineProps({
  data: Object,
});

</script>
<template>
  <ul>
    <li v-for="info in data" :key="info.title">
      {{ info.title }} {{ info.text }}
      <p v-if="info.description">{{ info.description }}</p>
    </li>
  </ul>
</template>