<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import CardList from "./components/CardList.vue";
import cv from "./cv.json";

</script>
<template>
  <Header/>

  <main class="lg:grid lg:grid-cols-3 lg:grid-row-5 lg:gap-x-0 max-w-[80%] px-[10%]">
    <!-- h1 and h2 are used in Header, so h3 is it -->
    <CardList :data="cv.techs" class="lg:col-start-1 lg:col-span-2 lg:row-span-1">
      <h3 class="font-mono text-heading lg:text-lg-heading text-center">Mes technologies :</h3>
    </CardList>

    <CardList :data="cv.learning" class="lg:col-start-1 lg:col-span-2 lg:row-span-1">
      <h3 class="font-mono text-heading lg:text-lg-heading text-center">Ce que j’apprends :</h3>
    </CardList>

    <CardList :data="cv.jobs" class="lg:col-start-1 lg:col-span-3 lg:row-span-3">
      <h3 class="font-mono text-heading lg:text-lg-heading text-center">Formations et expériences professionelles :</h3>
    </CardList>

    <CardList :data="cv.langs" class="lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-1">
      <h3 class="font-mono text-heading lg:text-lg-heading text-center">Langues :</h3>
    </CardList>

    <CardList :data="cv.socials" class="lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-1"> 
      <h3 class="font-mono text-heading lg:text-lg-heading text-center">Contact : </h3>
    </CardList>
  </main>
  
  <footer>
    <p class="font-sans text-[1vw] text-center mb-[1vw]">

    <a href="https://github.com/IBM/plex">IBM Plex Mono et Sans par IBM</a> - sous licence <abbr title="Open Font License">OFL</abbr>.
    </p>
  </footer>
</template>
