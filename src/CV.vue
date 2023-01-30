<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import CardList from "./components/CardList.vue";
import cv from "./cv.json";

console.log(cv.techs);
</script>
<template>
  <Header/>
  <div>
  <!-- h1 and h2 are used in Header, so h3 is it -->
    <h3>Mes compétences :</h3>
    <CardList :data="cv.techs"/>
  </div>
  <div>
    <h3>Ce que j’apprend :</h3>
    <CardList :data="cv.learning"/>
  </div>

  <div>
    <h3>Mes expériences professionelles :</h3>
    <CardList :data="cv.jobs"/>
  </div>

  <div>
    <h3>Contact : </h3>
    <CardList :data="cv.socials"/>
  </div>
</template>
