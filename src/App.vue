<template>
  <div class="flex flex-col">
    <HeaderComponent />
    <main class="flex-grow bg-gray-50">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
