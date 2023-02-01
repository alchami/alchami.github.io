<script setup>
const props = defineProps({
  data: Object,
});
</script>
<template>
  <section> 
    <div class="bg-pink shadow-md shadow-cyan rounded-[2vw] p-[1vw] mx-auto left-0 right-0 mb-10 h-full w-full">
    <!-- Card title from-cyan to-pastel-green -->
    <slot/>
    <ul class="p-5"> 
      <li class="text-body lg:text-lg-body" v-for="info in data" :key="info.title">

        <span v-if="info.link">{{ info.title }} <a href="info.link">{{ info.text }}</a></span>
        <span v-else>{{ info.title }} {{ info.text }}</span>

        <p v-if="info.description" class="
            mt-[2vw] mb-[2vw] p-[1vw] leading-[3vw] text-[2.6vw]
            lg:mt-[1vw] lg:mb-[1vw] lg:leading-[0] lg:text-lg-body
          ">{{ info.description }}</p>
      </li>
    </ul>
    </div>
  </section>
</template>