<script setup>
const props = defineProps({
  data: Object,
});
</script>
<template>
<p> {{ data.text }} </p>
</template>