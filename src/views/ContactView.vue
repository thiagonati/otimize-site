<template>
    <h1 class="text-4xl font-bold text-center mt-28 text-lightning-yellow-400">Entre em Contato</h1>
    <div class="grid grid-cols-1 p-8 px-40 bg-gray-50 md:grid-cols-2">
        <ul class="p-8 space-y-4">
            <li class="block p-4 text-xl font-bold border rounded shadow text-catalina-blue-900">
                Serviço de Atendimento ao Consumidor
                <p class="mt-2 text-base text-gray-500">
                    representacaootimize@gmail.com
                </p>
            </li>
            <li class="block p-4 text-xl font-bold border rounded shadow text-catalina-blue-900">
                Solicite um Orçamento
                <p class="mt-2 text-base text-gray-500">
                    representacaootimize@gmail.com
                </p>
            </li>
            <li class="block p-4 text-xl font-bold border rounded shadow text-catalina-blue-900">
                Contato
                <p class="mt-2 text-base text-gray-500">
                    F:(81) 99136-6737 - whatsapp: (81) 99136-6737
                </p>
            </li>
        </ul>

        <div class="flex flex-col justify-end">
            <form @submit.prevent="submitForm" class="p-8 mt-8 space-y-8 border rounded">
                <p v-if="message" class="text-base font-bold text-center"
                    :class="error ? 'text-red-600' : 'text-green-600'">{{
                        message }}</p>
                <div>
                    <label for="email"
                        class="block mb-2 text-sm font-medium text-catalina-blue-900 dark:text-gray-300">Seu
                        email</label>
                    <input type="email" id="email" v-model="form.email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-catalina-blue-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="nome@exemplo.com" required>
                </div>
                <div>
                    <label for="subject"
                        class="block mb-2 text-sm font-medium text-catalina-blue-900 dark:text-gray-300">Assunto</label>
                    <input type="text" id="subject" v-model="form.subject"
                        class="block w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm text-catalina-blue-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Deixe-nos saber como podemos ajudá-lo" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message"
                        class="block mb-2 text-sm font-medium text-catalina-blue-900 dark:text-gray-400">Sua
                        Mensagem</label>
                    <textarea id="message" v-model="form.message" rows="6"
                        class="block p-2.5 w-full text-sm text-catalina-blue-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Deixe um comentário..."></textarea>
                </div>
                <button type="submit"
                    class="w-full border border-catalina-blue-900 bg-catalina-blue-900 text-white rounded-lg px-5 py-2.5 text-center">
                    <span v-if="!loading">Enviar</span>
                    <span v-else>Enviando...</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    name: "ContactView",
    setup() {
        const form = ref({
            email: '',
            subject: '',
            message: ''
        });

        const message = ref('');
        const error = ref(false);
        const loading = ref(false);
        const submitForm = async () => {
            loading.value = true;
            axios.post('http://localhost/otimize/enviar_email_contato.php', form.value, {
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
        }
        return {
            form,
            submitForm,
            error,
            message,
            loading
        };
    }
}
</script>

<style scoped>
/* Adicione aqui seus estilos personalizados, se necessário */
</style>
