<script setup>
import data from "/data.json";
</script>

<template>
  <div>
    <h1>お魚のページ</h1>
    <div v-for="value in data">
      <NuxtLink :to="'/fishdata/' + value.id">{{ value.name }}</NuxtLink>
    </div>
  </div>
</template>
