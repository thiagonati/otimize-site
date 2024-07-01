<template>
  <div class="bg-center bg-no-repeat bg-cover bg-hero-pattern">
    <div class="relative px-6 isolate lg:px-8 backdrop-brightness-50">
      <div class="max-w-2xl py-56">
        <!-- <div class="hidden sm:mb-8 sm:flex">
          <div
            class="relative px-3 py-1 text-sm leading-6 text-white border rounded-full border-yellow ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding. <a href="#" class="font-semibold text-yellow-400"><span
                class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div> -->
        <div class="">
          <h1 class="text-4xl font-bold tracking-tight text-yellow-400 sm:text-6xl">Economize na conta de luz
          </h1>
          <p class="mt-6 text-lg leading-8 text-white">Descubra como transformar sua casa em uma fonte de energia limpa
            e economizar na conta de luz. Conecte-se ao futuro sustentável com nossa expertise em soluções solares.
          </p>
          <div class="flex items-center justify-start mt-10 gap-x-6">
            <a href="#"
              class="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-catalina-blue-950 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CalculatorComponent />
  <CompanyComponent />
  <FeatureComponent />
  <CarouselComponent />
  <ServiceComponent />
  <AccordionComponent />
</template>

<script setup>
import AccordionComponent from '@/views/componentsHome/AccordionComponent.vue'
import CalculatorComponent from '@/views/componentsHome/CalculatorComponent.vue'
import CarouselComponent from '@/views/componentsHome/CarouselComponent.vue'
import FeatureComponent from '@/views/componentsHome/FeatureComponent.vue'
import ServiceComponent from '@/views/componentsHome/ServiceComponent.vue'
import CompanyComponent from '@/views/componentsHome/CompanyComponent.vue'
</script>