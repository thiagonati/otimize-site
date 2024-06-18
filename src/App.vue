<template>
  <div class="flex flex-col h-screen">
    <HeaderComponent />
    <main class="flex-grow bg-gray-100">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
