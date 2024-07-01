<template>
    <div
        class="z-40 flex flex-col items-center bg-white md:w-[500px] md:h-auto top-24 right-20 md:absolute md:rounded-xl">
        <h1 class="mt-10 text-2xl text-bold">Calculadora solar</h1>
        <span class="text-base">Simule seu gerador de Energia Solar</span>
        <div class="grid grid-cols-3 gap-2 p-2 text-center">
            <div class="space-y-1">
                <h1 class="text-xs font-bold text-lightning-yellow-400">SIMULAÇÃO</h1>
                <div class="p-1 rounded-lg bg-lightning-yellow-400">

                </div>
            </div>
            <div class="space-y-1">
                <h1 class="text-xs font-bold text-gray-300">RESUMO</h1>
                <div class="p-1 bg-gray-500 rounded-lg">

                </div>
            </div>
            <div class="space-y-1">
                <h1 class="text-xs font-bold text-gray-300">ORÇAMENTO</h1>
                <div class="p-1 bg-gray-500 rounded-lg">

                </div>
            </div>
        </div>
        <form @submit.prevent="calculateSolar" class="w-full p-4 space-y-6">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="zipcode" class="block text-sm font-medium leading-6 text-gray-900">Cep</label>
                    <div class="mt-2">
                        <input type="text" v-model="zipcode" id="zipcode"
                            class="block w-full focus:outline-none rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightning-yellow-400 sm:text-sm sm:leading-6"
                            @blur="fetchState">
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="state" class="block text-sm font-medium leading-6 text-gray-900">Uf</label>
                    <div class="mt-2">
                        <input type="text" v-model="state" id="state"
                            class="block w-full focus:outline-none rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightning-yellow-400 sm:text-sm sm:leading-6"
                            readonly>
                    </div>
                </div>
            </div>
            <div class="sm:col-span-4">
                <label for="electricityBill" class="block text-sm font-medium leading-6 text-gray-900">Valor da Conta
                    (R$)</label>
                <div class="mt-2">
                    <input id="electricityBill" v-model="electricityBill" type="number"
                        class="block w-full focus:outline-none rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightning-yellow-400 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-4">
                <label for="installationType" class="block text-sm font-medium leading-6 text-gray-900">Padrão de
                    Instalação</label>
                <div class="mt-2">
                    <select id="installationType" v-model="installationType"
                        class="block w-full px-4 py-2 text-gray-900 border-0 rounded shadow-sm focus:outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightning-yellow-400 sm:text-sm sm:leading-6">
                        <option value="" disabled>Selecione</option>
                        <option value="monofasico">Monofásico - R$22,50</option>
                        <option value="bifasico">Bifásico - R$37,50</option>
                        <option value="trifasico">Trifásico - R$75,00</option>
                    </select>
                </div>
            </div>
            <div class="sm:col-span-4">
                <label for="utilityCompany"
                    class="block text-sm font-medium leading-6 text-gray-900">Concessionária</label>
                <div class="mt-2">
                    <select id="utilityCompany" v-model="utilityCompany"
                        class="block w-full px-4 py-2 text-gray-900 border-0 rounded shadow-sm focus:outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightning-yellow-400 sm:text-sm sm:leading-6">
                        <option value="" disabled>Selecione</option>
                        <option v-for="(distribuidora, index) in filtereddistributors" :key="index"
                            :value="distribuidora.Distribuidora">
                            {{ distribuidora.Distribuidora }} - {{ distribuidora.UF }}
                        </option>
                    </select>
                </div>
            </div>
            <button type="submit"
                class="w-full px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lightning-yellow-400 hover:bg-lightning-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightning-yellow-400">Calcular</button>
        </form>

        <span class="px-8 py-4 text-base text-center text-red-500">Obs: O valor pode variar de acordo com uma análise
            mais detalhada realizada pelos nossos técnicos.</span>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import distributorsData from '../test.json';

export default {
    name: "CalculatorComponent",
    emits: ['submit'],
    setup(_, { emit }) {
        const zipcode = ref('');
        const state = ref('');
        const electricityBill = ref('');
        const utilityCompany = ref('');
        const installationType = ref('');
        const result = ref(null);
        const distributors = ref([]);
        const filtereddistributors = ref([]);
        const address = ref(null);

        const installationRates = {
            monofasico: 22.5,
            bifasico: 37.5,
            trifasico: 75.0
        };

        // Carrega os dados das distributors do arquivo JSON na inicialização do componente
        onMounted(() => {
            distributors.value = distributorsData;
        });

        const fetchState = () => {
            if (zipcode.value) {
                axios.get(`https://viacep.com.br/ws/${zipcode.value}/json/`)
                    .then(response => {
                        state.value = response.data.uf;
                        address.value = response.data;
                        filterdistributorsByState(state.value);
                    })
                    .catch(error => {
                        console.error('Erro ao buscar o estado pelo CEP:', error);
                    });
            }
        };

        const filterdistributorsByState = (uf) => {
            filtereddistributors.value = distributors.value.filter(distribuidora => distribuidora.UF === uf);
        };

        const calculateSolar = () => {
            const electricityBillNum = parseFloat(electricityBill.value);
            const selectedDistribuidora = distributors.value.find(d => d.Distribuidora === utilityCompany.value);
            const tariffNum = selectedDistribuidora ? selectedDistribuidora['Tarifa Convencional'] : null;
            const installationRate = installationRates[installationType.value];

            if (!isNaN(electricityBillNum) && !isNaN(tariffNum) && installationRate) {
                const adjustedBill = electricityBillNum - installationRate;
                const averageMonthlyGeneration = (adjustedBill / tariffNum).toFixed(2);
                const totalPower = (averageMonthlyGeneration / 130).toFixed(2); // Exemplo, 130 kWh/mês por kWp
                const modulePower = 550; // Wp, exemplo de um módulo de 550 Wp
                const moduleCount = Math.ceil(totalPower * 1000 / modulePower);
                const annualSavings = (adjustedBill * 12).toFixed(2);

                result.value = {
                    annualSavings: annualSavings,
                    totalPower: totalPower,
                    modulePower: modulePower,
                    moduleCount: moduleCount,
                    averageMonthlyGeneration: averageMonthlyGeneration,
                    distributors: selectedDistribuidora,
                    address: address.value,
                    installationType: installationType.value
                };
            }
            emit('submit', result.value);
        };

        return {
            zipcode,
            state,
            electricityBill,
            utilityCompany,
            installationType,
            distributors,
            filtereddistributors,
            fetchState,
            calculateSolar
        };
    }
};

</script>

<style scoped>
/* Adicione estilos personalizados se necessário */
</style>
