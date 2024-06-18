<template>
  <div class="bg-center bg-no-repeat bg-cover bg-hero-pattern">
    <div class="relative px-6 isolate lg:px-8 backdrop-brightness-50">
      <div class="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="relative px-3 py-1 text-sm leading-6 text-white border rounded-full border-yellow ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding. <a href="#" class="font-semibold text-yellow-400"><span
                class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-yellow-400 sm:text-6xl">Economize na conta de luz
          </h1>
          <p class="mt-6 text-lg leading-8 text-white">Oferecemos soluções personalizadas em energia solar, desde
            consultoria até instalação e manutenção de sistemas fotovoltaicos. Com foco no cliente, garantimos uma
            transição suave para a energia solar, com suporte contínuo e orientação em eficiência energética. 🌞🔌</p>
          <div class="flex items-center justify-center mt-10 gap-x-6">
            <a href="#"
              class="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
              started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span
                aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FeatureComponent />
  <CarouselComponent />
  <AccordionComponent />
</template>

<script setup>
import AccordionComponent from '@/components/AccordionComponent.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import FeatureComponent from '@/components/FeatureComponent.vue'
</script>