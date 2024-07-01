<template>
    <div class="h-full mt-20">
        <div class="p-8 text-4xl font-bold text-center text-lightning-yellow-400">
            <h1>Nossos projetos de energia solar</h1>

        </div>
        <div class="px-8 mx-auto text-4xl font-bold text-center md:w-1/2 text-lightning-yellow-400">
            <p class="text-base font-bold text-center text-gray-600">Uma empresa com mais de 200 projetos
                homologados
                na concessionária e com equipe desde 2017 atuando no mercado.
                Estamos prontos para atendê-los
                com o melhor que a experiência tem a proporcionar
            </p>
        </div>
        <div class="grid grid-cols-1 gap-8 p-16 md:grid-cols-2 lg:grid-cols-3">
            <CardComponent v-for="(project, index) in projects" :key="index" :imageSrc="project.imageSrc"
                :title="project.title" :description="project.description" :subDescription="project.subDescription"
                :timeAgo="project.timeAgo" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CardComponent from '@/components/CardComponent.vue';

const projects = ref([
    {
        imageSrc: 'PORTF+ôLIO - OTIMIZE 2024-imagens-11.jpg',
        title: 'Residencial',
        description: 'Instalações fotovoltaicas realizadas pela nossa empresa.',
        subDescription: 'Potência: 13,46 kWp',
        timeAgo: 'Painéis solares: 40'
    },
    {
        imageSrc: 'PORTF+ôLIO - OTIMIZE 2024-imagens-12.jpg',
        title: 'Comercial',
        description: 'Instalações fotovoltaicas comerciais.',
        subDescription: 'Potência: 20,5 kWp',
        timeAgo: 'Painéis solares: 60'
    },
    {
        imageSrc: 'PORTF+ôLIO - OTIMIZE 2024-imagens-13.jpg',
        title: 'Comercial',
        description: 'Instalações fotovoltaicas comerciais.',
        subDescription: 'Potência: 20,5 kWp',
        timeAgo: 'Painéis solares: 60'
    },
    {
        imageSrc: 'PORTF+ôLIO - OTIMIZE 2024-imagens-14.jpg',
        title: 'Comercial',
        description: 'Instalações fotovoltaicas comerciais.',
        subDescription: 'Potência: 20,5 kWp',
        timeAgo: 'Painéis solares: 60'
    },
    {
        imageSrc: 'PORTF+ôLIO - OTIMIZE 2024-imagens-15.jpg',
        title: 'Comercial',
        description: 'Instalações fotovoltaicas comerciais.',
        subDescription: 'Potência: 20,5 kWp',
        timeAgo: 'Painéis solares: 60'
    },
    {
        imageSrc: 'PORTF+ôLIO - OTIMIZE 2024-imagens-16.jpg',
        title: 'Comercial',
        description: 'Instalações fotovoltaicas comerciais.',
        subDescription: 'Potência: 20,5 kWp',
        timeAgo: 'Painéis solares: 60'
    },
    {
        imageSrc: 'PORTF+ôLIO - OTIMIZE 2024-imagens-17.jpg',
        title: 'Comercial',
        description: 'Instalações fotovoltaicas comerciais.',
        subDescription: 'Potência: 20,5 kWp',
        timeAgo: 'Painéis solares: 60'
    },
    {
        imageSrc: 'PORTF+ôLIO - OTIMIZE 2024-imagens-18.jpg',
        title: 'Comercial',
        description: 'Instalações fotovoltaicas comerciais.',
        subDescription: 'Potência: 20,5 kWp',
        timeAgo: 'Painéis solares: 60'
    },
    {
        imageSrc: 'PORTF+ôLIO - OTIMIZE 2024-imagens-19.jpg',
        title: 'Comercial',
        description: 'Instalações fotovoltaicas comerciais.',
        subDescription: 'Potência: 20,5 kWp',
        timeAgo: 'Painéis solares: 60'
    },
    {
        imageSrc: 'PORTF+ôLIO - OTIMIZE 2024-imagens-20.jpg',
        title: 'Comercial',
        description: 'Instalações fotovoltaicas comerciais.',
        subDescription: 'Potência: 20,5 kWp',
        timeAgo: 'Painéis solares: 60'
    },
    // Adicione mais projetos conforme necessário
]);
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>