<script setup lang="ts"></script>

<template>
  <div class="categories">
    <p class="categories-name">Категории:</p>
    <ul class="categories-list">
      <CategoryItem v-for="n in 3" :key="n" />
    </ul>
  </div>
</template>
