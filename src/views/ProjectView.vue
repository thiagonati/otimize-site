<template>
    <div class="h-full">
        <section class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:px-8">
            <div
                class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div
                class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div class="max-w-2xl mx-auto lg:max-w-4xl">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Nossos projetos de energia solar
                </h1>
                <figure class="mt-8">
                    <blockquote
                        class="text-xl font-semibold leading-8 text-center text-gray-900 sm:text-2xl sm:leading-9">
                        <p>Instaladores altamente qualificados, que executam os mais diversos tipos de projetos de
                            energia solar em todos os estados do Brasil. Conheças algumas das instalações fotovoltaicas
                            realizadas pela nossa empresa:</p>
                    </blockquote>
                </figure>
            </div>
        </section>
        <div class="grid grid-cols-1 gap-4 p-8 md:grid-cols-2 lg:grid-cols-3">
            <CardComponent imageSrc="29982.jpg" title="Residencial"
                description="instalações fotovoltaicas realizadas pela nossa empresa."
                subDescription="Potência: 13,46 kWp" timeAgo="Painéis solares: 40" v-for="index in 6" :key="index" />
        </div>
    </div>
</template>
<script setup>
import CardComponent from '@/components/CardComponent.vue'
</script>