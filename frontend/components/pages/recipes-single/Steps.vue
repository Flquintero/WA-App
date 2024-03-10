<script setup lang="ts">
// Types

import type { IRecipe } from "~/types/recipes";

// Props

const props = defineProps({
    recipeSteps: {
        type: Array as PropType<IRecipe["steps"]>,
    },
});
const { recipeSteps } = props;
</script>

<template>
    <div class="single-recipe-steps">
        <ol>
            <li v-for="step in recipeSteps" :key="step">
                {{ step }}
            </li>
        </ol>
    </div>
</template>

<style lang="scss" scoped>
.single-recipe-steps {
    max-width: pxToRem(400);
    margin: auto;
    ol {
        margin-top: pxToRem(30);
        li {
            margin-bottom: pxToRem(10);
            line-height: 1.5;
        }
    }
}
</style>
