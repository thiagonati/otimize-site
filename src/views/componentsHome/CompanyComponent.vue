<template>
    <section class="py-24 bg-lightning-yellow-400">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
                class="flex flex-col items-center justify-center mb-10 lg:mb-16 gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                <div class="relative w-full text-center lg:text-left lg:w-2/4">
                    <h2
                        class="text-4xl font-bold text-catalina-blue-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                        Somos Especialistas em Condomínios</h2>
                </div>
                <div class="relative w-full text-center lg:text-left lg:w-2/4">
                    <p class="mb-5 text-lg font-normal text-catalina-blue-900">Trabalhamos com as melhores placas do
                        mercado. Atuamos em Pernambuco e nas regiões vizinhas. Cobrimos qualquer oferta (mediante
                        análise do orçamento a ser coberto). Com um time de especialistas, desenvolvemos soluções sob
                        medida para você!
                    </p>
                    <router-link :to="{ name: 'contact' }"
                        class="flex flex-row items-center justify-center gap-2 text-base font-semibold text-catalina-blue-900 lg:justify-start hover:text-catalina-blue-800 ">Otimize<svg
                            width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                                stroke="#120e59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </router-link>
                </div>
            </div>
            <div
                class="flex flex-wrap items-center justify-center gap-x-5 gap-y-8 lg:gap-y-0 md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                <div
                    class="relative w-full p-4 transition-all duration-500 bg-gray-100 group rounded-2xl max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-catalina-blue-900">
                    <div class="flex items-center justify-center mb-5 bg-white rounded-full w-14 h-14 ">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                                stroke="#120e59" stroke-width="2"></path>
                        </svg>

                    </div>
                    <h4
                        class="mb-3 text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-white">
                        Linha de Crédito</h4>
                    <p
                        class="text-sm font-normal leading-5 text-gray-500 transition-all duration-500 group-hover:text-white">
                        Financiamos a implementação de qualquer tipo de
                        reforma, portaria eletrônica, substituição de elevadores, energia solar, etc
                    </p>
                </div>
                <div
                    class="relative w-full p-4 transition-all duration-500 bg-gray-100 group rounded-2xl max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-catalina-blue-900">
                    <div class="flex items-center justify-center mb-5 bg-white rounded-full w-14 h-14 ">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
                                stroke="#120e59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>

                    </div>
                    <h4
                        class="mb-3 text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-white">
                        Transação Segura</h4>
                    <p
                        class="text-sm font-normal leading-5 text-gray-500 transition-all duration-500 group-hover:text-white">
                        Banco 100% digital com financiamento em troca do revestimento cerâmico por soluções em
                        iluminação.
                    </p>
                </div>
                <div
                    class="relative w-full p-4 transition-all duration-500 bg-gray-100 group rounded-2xl max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-catalina-blue-900">
                    <div class="flex items-center justify-center mb-5 bg-white rounded-full w-14 h-14 ">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                stroke="#120e59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>

                    </div>
                    <h4
                        class="mb-3 text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-white">
                        Melhores Condições para seu Serviço</h4>
                    <p
                        class="text-sm font-normal leading-5 text-gray-500 transition-all duration-500 group-hover:text-white">
                        Financiamento sem entrada e em até 120x, até 6 meses para começar a pagar.
                    </p>
                </div>
                <div
                    class="relative w-full p-4 transition-all duration-500 bg-gray-100 group rounded-2xl max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-catalina-blue-900">
                    <div class="flex items-center justify-center mb-5 bg-white rounded-full w-14 h-14 ">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                stroke="#120e59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>

                    </div>
                    <h4
                        class="mb-3 text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-white">
                        Garantia</h4>
                    <p
                        class="text-sm font-normal leading-5 text-gray-500 transition-all duration-500 group-hover:text-white">
                        Garantia de eficiência de até 25 anos.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>