<script setup>
const props = defineProps({
  data: Object,
});
</script>
<template>
  <section class="bg-pink shadow-md shadow-cyan rounded-[2vw] p-[1vw] mx-auto left-0 right-0 mb-10 w-5/6">

    <!-- Card title from-cyan to-pastel-green -->
    <slot/>
    <ul class="p-5"> 
      <li class="text-body lg:text-lg-body" v-for="info in data" :key="info.title">
      <!-- <li v-for="info in data" :key="info.title" :style="info.bulletStyle"> -->
        {{ info.title }} {{ info.text }}
        <p v-if="info.description" class="mt-[2vw] mb-[2vw] p-[1vw] leading-[3vw] text-[2.6vw] lg:text-lg-body">{{ info.description }}</p>
      </li>
    </ul>
  </section>
</template>