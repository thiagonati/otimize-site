<script setup>
const data = [
    { title: 'Como escolher o local ideal para a instalação dos painéis solares?', content: 'O local deve receber luz solar direta durante a maior parte do dia, sem sombreamento significativo. Evite áreas com obstruções, como árvores ou prédios altos.' },
    { title: 'Qual é a inclinação e orientação correta dos painéis solares?', content: 'A inclinação ideal depende da latitude da sua localização. Em geral, ângulos próximos à latitude são recomendados. A orientação deve ser voltada para o norte no hemisfério sul e para o sul no hemisfério norte.' },
    { title: 'Como dimensionar o sistema fotovoltaico?', content: 'Calcule a demanda de energia da sua casa ou empresa. Considere fatores como consumo médio mensal, horário de uso e eficiência dos painéis.' },
    { title: 'Quais são os passos básicos da instalação?', content: '1. Fixe os suportes dos painéis no telhado ou estrutura. 2. Conecte os painéis em série ou paralelo. 3. Instale o inversor e conecte-o aos painéis e à rede elétrica.' },
    { title: 'É necessário um eletricista para a instalação?', content: 'Sim, a instalação elétrica deve ser feita por um profissional qualificado. Isso garante a segurança e conformidade com as normas.' }
];

</script>
<template>
    <div class="px-4 space-y-4 lg:m-12 lg:px-32">
        <details class="p-4 border border-gray-200 rounded group" v-for="(item, index) in data" :key="index">
            <summary class="flex items-center justify-between cursor-pointer">
                <h5 class="text-lg font-medium text-catalina-blue-900">
                    {{ item.title }}
                </h5>

                <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 opacity-100 size-8 text-lightning-yellow-400 group-open:opacity-0"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 opacity-0 size-8 text-lightning-yellow-400 group-open:opacity-100"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
            </summary>

            <p class="mt-4 leading-relaxed text-gray-700">
                {{ item.content }}
            </p>
        </details>
    </div>
</template>