<template>
    <div
        class="z-40 flex flex-col items-center bg-white md:w-[500px] md:h-auto top-24 right-20 md:absolute md:rounded-xl">
        <h1 class="mt-10 text-2xl font-bold">Calculadora solar</h1>
        <span class="text-base">Simule seu gerador de Energia Solar</span>
        <div class="grid grid-cols-3 gap-4 p-2">
            <div class="space-y-1">
                <h1 class="text-xs font-bold text-lightning-yellow-200">SIMULAÇÃO</h1>
                <div class="p-1 rounded-lg bg-lightning-yellow-200">
                    <!-- Conteúdo da simulação aqui -->
                </div>
            </div>
            <div class="space-y-1">
                <h1 class="text-xs font-bold text-lightning-yellow-200">RESUMO</h1>
                <div class="p-1 rounded-lg bg-lightning-yellow-200">
                    <!-- Conteúdo do resumo aqui -->
                </div>
            </div>
            <div class="space-y-1">
                <h1 class="text-xs font-bold text-lightning-yellow-400">SIMULAÇÃO</h1>
                <div class="p-1 rounded-lg bg-lightning-yellow-400">
                    <!-- Conteúdo da segunda simulação aqui -->
                </div>
            </div>
        </div>
        <p v-if="message" class="text-base font-bold text-center" :class="error ? 'text-red-600' : 'text-green-600'">{{
            message }}</p>
        <!-- CPF/CNPJ -->
        <div class="w-full px-8 mb-4">
            <label for="cpf_cnpj" class="text-sm font-medium leading-6 text-gray-900 lock">CPF/CNPJ</label>
            <input id="cpf_cnpj" v-model="form.cpfCnpj" type="text" placeholder="Digite o CPF ou CNPJ"
                class="block w-full focus:outline-none rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightning-yellow-400 sm:text-sm sm:leading-6">
        </div>

        <!-- Nome Completo -->
        <div class="w-full px-8 mb-4">
            <label for="nome_completo" class="text-sm font-medium leading-6 text-gray-900 lock">Nome Completo</label>
            <input id="nome_completo" v-model="form.nomeCompleto" type="text" placeholder="Digite seu nome completo"
                class="block w-full focus:outline-none rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightning-yellow-400 sm:text-sm sm:leading-6">
        </div>

        <div class="grid w-full grid-cols-2 gap-4 px-8 mb-4">
            <!-- Endereço -->
            <div class="mb-4">
                <label for="endereco" class="text-sm font-medium leading-6 text-gray-900 lock">Endereço</label>
                <input id="endereco" v-model="form.endereco" type="text" placeholder="Digite seu endereço"
                    class="block w-full focus:outline-none rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightning-yellow-400 sm:text-sm sm:leading-6">
            </div>

            <div>
                <label for="numero" class="text-sm font-medium leading-6 text-gray-900 lock">Nº</label>
                <input id="numero" v-model="form.numero" type="text" placeholder="Número"
                    class="block w-full focus:outline-none rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightning-yellow-400 sm:text-sm sm:leading-6">
            </div>
        </div>

        <div class="grid w-full grid-cols-2 gap-4 px-8 mb-4">
            <!-- Telefone -->
            <div>
                <label for="telefone" class="text-sm font-medium leading-6 text-gray-900 lock">Telefone</label>
                <input id="telefone" v-model="form.telefone" type="text" placeholder="(00) 00000-0000"
                    class="block w-full focus:outline-none rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightning-yellow-400 sm:text-sm sm:leading-6">
            </div>
            <div>
                <label for="complemento" class="text-sm font-medium leading-6 text-gray-900 lock">Complemento</label>
                <input id="complemento" v-model="form.complemento" type="text" placeholder="Complemento"
                    class="block w-full focus:outline-none rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightning-yellow-400 sm:text-sm sm:leading-6">
            </div>
        </div>

        <!-- Email -->
        <div class="w-full px-8 mb-4">
            <label for="email" class="text-sm font-medium leading-6 text-gray-900 lock">Email</label>
            <input id="email" v-model="form.email" type="email" placeholder="Digite seu email"
                class="block w-full focus:outline-none rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightning-yellow-400 sm:text-sm sm:leading-6">
        </div>

        <!-- Botão de Submit -->
        <div class="flex w-full px-8 mb-4 space-x-6">
            <button @click="reset"
                class="w-full px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lightning-yellow-400 hover:bg-lightning-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightning-yellow-400">Refazer
                Simulação</button>
            <button @click="submitForm"
                class="w-full px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lightning-yellow-400 hover:bg-lightning-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightning-yellow-400">
                <span v-if="!loading">Enviar</span>
                <span v-else>Enviando...</span>
            </button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: "BudgetComponent",
    props: {
        data: {
            type: Object,
            required: true,
            default: () => ({})
        }
    },
    setup(props, { emit }) {
        const form = ref({
            cpfCnpj: '',
            nomeCompleto: '',
            endereco: '', // Deixe vazio aqui, será preenchido com props.data
            numero: '',
            telefone: '',
            complemento: '', // Deixe vazio aqui, será preenchido com props.data
            email: ''
        });

        const message = ref('');
        const error = ref(false);
        const loading = ref(false);
        // Preenchendo campos do formulário com dados de props.data
        onMounted(() => {
            form.value.endereco = props.data.logradouro;
            form.value.complemento = props.data.complemento;
        });

        const reset = () => {
            emit('reset');
        }

        const submitForm = () => {
            loading.value = true;
            message.value = '';
            error.value = false
            const formData = {
                ...form.value,
                ...props.data
            }
            axios.post('http://localhost/otimize/enviar_email.php', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => {
                    message.value = response.data.message;
                })
                .catch(errorData => {
                    message.value = errorData.response.data.message;
                    error.value = true;
                }).finally(() => (loading.value = false));
        };

        return {
            form,
            submitForm,
            error,
            message,
            reset,
            loading
        };
    }
};
</script>

<style scoped>
/* Estilos específicos do componente */
</style>