<template>
    <div class="w-full max-w-lg overflow-hidden bg-white rounded-lg shadow-lg">
        <img :src="require(`../assets/images/${props.imageSrc}`)" alt="Mountain" class="object-cover w-full h-64">
        <div class="p-6">
            <h2 class="mb-2 text-2xl font-bold text-gray-800">{{ props.title }}</h2>
            <p class="mb-4 leading-tight text-gray-700">{{ props.description }}</p>
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <span class="font-semibold text-gray-800">{{ props.subDescription }}</span>
                </div>
                <span class="text-gray-600">{{ props.timeAgo }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    imageSrc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subDescription: {
        type: String,
        required: true
    },
    timeAgo: {
        type: String,
        required: true
    }
})
</script>