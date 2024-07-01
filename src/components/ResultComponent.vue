<template>
    <div
        class="z-40 w-4/5 grid-rows-3 gap-4 px-4 py-2 md:grid md:grid-flow-col md:absolute top-20 right-20 rounded-3xl bg-gray-50 ">
        <div class="items-center col-span-2 row-span-3 space-y-4 text-center">
            <img src="../assets/images/Sun energy-pana.svg" class="h-auto m-auto w-60" alt="">
            <h1 class="text-xl font-bold text-catalina-blue-900 font-manrope">ECONOMIA ANUAL ESTIMADA:</h1>
            <h1 class="text-5xl font-bold text-gray-600 font-manrope">R$ {{ result.annualSavings }}</h1>
            <div class="flex justify-center mt-10 space-x-4">
                <div class="py-4 space-y-1 border shadow px-14 text-start rounded-xl">
                    <h1 class="font-xs text-md">
                        Potência do kit (kWp)
                    </h1>
                    <p class="text-3xl font-bold text-gray-600">
                        {{ result.totalPower }}
                    </p>
                </div>
                <div class="py-4 space-y-1 border shadow px-14 text-start rounded-xl">
                    <h1 class="font-xs text-md">
                        Quantidade de Módulos
                    </h1>
                    <p class="text-3xl font-bold text-gray-600">
                        {{ result.moduleCount }}
                    </p>
                </div>
            </div>
            <div class="flex justify-center mt-10 space-x-4">
                <div class="py-4 space-y-1 border shadow px-14 text-start rounded-xl">
                    <h1 class="font-xs text-md">
                        Potência do Módulo (Wp)
                    </h1>
                    <p class="text-3xl font-bold text-gray-600">
                        {{ result.modulePower }}
                    </p>
                </div>
            </div>
        </div>
        <div class="col-span-1 row-span-1 p-4 text-center">
            <h1 class="mt-10 text-2xl text-bold">Calculadora solar</h1>
            <span class="text-base">Simule seu gerador de Energia Solar</span>
            <div class="grid grid-cols-3 gap-2 p-2">
                <div class="space-y-1">
                    <h1 class="text-xs font-bold text-lightning-yellow-200">SIMULAÇÃO</h1>
                    <div class="p-1 rounded-lg bg-lightning-yellow-200">

                    </div>
                </div>
                <div class="space-y-1">
                    <h1 class="text-xs font-bold">RESUMO</h1>
                    <div class="p-1 rounded-lg bg-lightning-yellow-400">

                    </div>
                </div>
                <div class="space-y-1">
                    <h1 class="text-xs font-bold text-gray-300">SIMULAÇÃO</h1>
                    <div class="p-1 bg-gray-500 rounded-lg">

                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-1 row-span-2 text-center rounded-lg">
            <h1 class="text-2xl font-bold text-catalina-blue-900 font-manrope">Geração média
                mensal:</h1>

            <h1 class="text-5xl font-bold text-gray-600 font-manrope mt-28">{{ result.averageMonthlyGeneration
                }}<span class="text-sm">kWh/mês</span>
            </h1>
            <span class="mt-2 text-base">simulação com base em módulos de 555W</span>
            <div class="flex justify-center mt-10 space-x-4">
                <button type="submit" @click="back"
                    class="w-full px-3 py-2 mt-8 text-sm font-semibold text-white rounded-md shadow-sm bg-lightning-yellow-400 hover:bg-lightning-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightning-yellow-400">Refazer
                    Simulação</button>
                <button type="submit" @click="next"
                    class="w-full px-3 py-2 mt-8 text-sm font-semibold text-white rounded-md shadow-sm bg-lightning-yellow-400 hover:bg-lightning-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightning-yellow-400">Orçamento</button>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: "ResultComponent",
    props: {
        data: {
            type: Object,
            required: false,
            default: () => ({})
        },
    },
    emits: ['next', 'back'],
    setup(props, { emit }) {
        console.log(props.data);
        const result = computed(() => {
            return props.data;
        });
        const next = () => {
            emit('next');
        };
        const back = () => {
            emit('back');
        };
        return {
            result,
            next,
            back
        };
    }
}
</script>
