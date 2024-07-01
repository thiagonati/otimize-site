<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const images = [
    'PORTF+ôLIO - OTIMIZE 2024-imagens-1.jpg',
    'PORTF+ôLIO - OTIMIZE 2024-imagens-2.jpg',
    'PORTF+ôLIO - OTIMIZE 2024-imagens-3.jpg',
    'PORTF+ôLIO - OTIMIZE 2024-imagens-4.jpg',
    'PORTF+ôLIO - OTIMIZE 2024-imagens-5.jpg',
    'PORTF+ôLIO - OTIMIZE 2024-imagens-6.jpg',
    'PORTF+ôLIO - OTIMIZE 2024-imagens-7.jpg',
    'PORTF+ôLIO - OTIMIZE 2024-imagens-8.jpg',
    'PORTF+ôLIO - OTIMIZE 2024-imagens-9.jpg',
    'PORTF+ôLIO - OTIMIZE 2024-imagens-10.jpg',
    'PORTF+ôLIO - OTIMIZE 2024-imagens-11.jpg',
];

const currentIndex = ref(0);
const imagesToShow = ref(5);

const updateImagesToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
        imagesToShow.value = 2.4;
    } else {
        imagesToShow.value = 6.2;
    }
};

const nextImage = () => {
    if (currentIndex.value === (images.length - 1) - 5) {
        currentIndex.value = 0;
    }
    currentIndex.value = (currentIndex.value + 1) % images.length;
};

onMounted(() => {
    updateImagesToShow();
    window.addEventListener('resize', updateImagesToShow);
    setInterval(nextImage, 3000);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateImagesToShow);
});
</script>

<template>
    <div class="flex flex-col h-auto p-4 bg-catalina-blue-900 sm:p-8 md:p-16">
        <div class="mx-auto md:px-6 md:w-4xl lg:px-8">
            <div class="w-full text-2xl tracking-tight text-lightning-yellow-400 sm:text-4xl">
                <p class="flex items-center justify-center w-full font-bold">
                    <span class="text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="4" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </span>
                    200 Projetos Realizados
                </p>
                <p class="text-base font-bold text-center text-white">ECONOMIZE ATÉ 95% NA SUA CONTA DE ENERGIA</p>
                <p class="text-base text-center text-white">Onde tem sol brilhando tem oportunidade para <span
                        class="text-lightning-yellow-400">otimizar!</span></p>
            </div>
        </div>
        <div class="flex items-center justify-center mt-8 space-x-4 sm:space-x-8">
            <div class="relative overflow-hidden">
                <div class="flex items-center w-full space-x-4 transition-transform duration-500 sm:space-x-8"
                    :style="{ transform: `translateX(-${(currentIndex * 100) / imagesToShow}%)` }">
                    <div v-for="(image, index) in images" :key="index" class="relative flex-none"
                        :class="{ 'large-image': index === (currentIndex + 2) % images.length, 'small-image': index !== (currentIndex + 2) % images.length }">
                        <img :src="require(`@/assets/images/projects/${image}`)" :alt="`Image ${index + 1}`"
                            class="object-cover max-w-[200px] lg:max-w-[400px] transition-transform duration-1000 rounded">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.small-image img {
    @apply rounded-[10px] border-white w-[100px] h-[100px] md:w-[205px] md:h-[200px];
}

.large-image img {
    @apply border-[10px] rounded-[20px] border-white w-[150px] h-[150px] md:w-[400px] md:h-[300px];
}
</style>
