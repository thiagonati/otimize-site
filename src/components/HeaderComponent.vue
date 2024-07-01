<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Home', to: 'home' },
    { name: 'Projetos', to: 'projects' },
    { name: 'Sobre Nós', to: 'about' },
    { name: 'Contato', to: 'contact' },
]
const mobileMenuOpen = ref(false)


</script>
<template>
    <header class="fixed inset-x-0 top-0 z-50 bg-catalina-blue-900">
        <nav class="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="w-auto h-8" src="../assets/images/logomarca_otimize_amarela.svg" alt="" />
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="w-6 h-6 text-lightning-yellow-400" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <router-link v-for="item in navigation" :key="item.name"
                    class="text-sm font-semibold leading-6 text-lightning-yellow-400" :to="{ name: item.to }">{{
                        item.name
                    }}</router-link>
            </div>
        </nav>
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-catalina-blue-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="" />
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-lightning-yellow-400"
                        @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="w-6 h-6 text-lightning-yellow-400" aria-hidden="true" />
                    </button>
                </div>
                <div class="flow-root mt-6">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="py-6 space-y-2">
                            <router-link v-for="item in navigation" :key="item.name" :to="{ name: item.to }"
                                class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-lightning-yellow-400 hover:bg-catalina-blue-800">{{
                                    item.name }}</router-link>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>