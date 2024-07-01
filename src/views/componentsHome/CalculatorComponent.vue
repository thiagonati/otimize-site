<template>
    <div class="flex flex-col items-center">
        <CalculatorComponent @submit="handleResult" v-if="!result" />
        <ResultComponent :data="result" v-if="result && !budget" @back="result = null" @next="budget = !budget" />
        <BudgetComponent :data="result" v-if="budget" @reset="result = null" />
    </div>
</template>

<script>
import { ref } from 'vue';
import CalculatorComponent from '@/components/FormCalculatorComponent.vue';
import ResultComponent from '@/components/ResultComponent.vue';
import BudgetComponent from '@/components/BudgetComponent.vue';

export default {
    name: "ParentComponent",
    components: {
        CalculatorComponent,
        ResultComponent,
        BudgetComponent,
    },
    setup() {
        const result = ref(null);
        const budget = ref(false);
        const handleResult = (calculatedResult) => {
            result.value = calculatedResult;
        };

        return {
            result,
            handleResult,
            budget,
        };
    }
};
</script>
