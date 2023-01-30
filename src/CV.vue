<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import CardList from "./components/CardList.vue";
import cv from "./cv.json";

</script>
<template>
  <Header/>
  <main>
    <section>
    <!-- h1 and h2 are used in Header, so h3 is it -->
      <h3>Mes technologies :</h3>
      <CardList :data="cv.techs"/>
    </section>

    <section>
      <h3>Ce que j’apprends :</h3>
      <CardList :data="cv.learning"/>
    </section>

    <section>
      <h3>Formations et expériences professionelles :</h3>
      <CardList :data="cv.jobs"/>
    </section>

    <section>
      <h3>Langues :</h3>
      <CardList :data="cv.langs"/>
    </section>
    <section>
      <h3>Contact : </h3>
      <CardList :data="cv.socials"/>
    </section>
  </main>
</template>
