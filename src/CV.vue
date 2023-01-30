<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import CardList from "./components/CardList.vue";

</script>
<template>
  <Header/>
  <div>
  <!-- h1 and h2 are used in Header, so h3 is it -->
    <h3>Mes compétences :</h3>
    <CardList :data="{'text': 'pouet'}"/>
  </div>
  <div>
    <h3>Ce que j’apprend :</h3>
    <CardList :data="{'text': 'pouet'}"/>
  </div>

  <div>
    <h3>Mes expériences professionelles :</h3>
    <CardList :data="{'text': 'pouet'}"/>
  </div>

  <div>
    <h3>Contact : </h3>
    <CardList :data="{'text': 'pouet'}"/>
  </div>
</template>
