<template>
    <div class="single-recipe-steps">
        <ol>
            <li v-for="step in recipeSteps" :key="step">
                {{ step }}
            </li>
        </ol>
    </div>
</template>
<script setup lang="ts">
import type { IRecipe } from "~/types/recipes";

// Props
const props = defineProps({
    recipeSteps: {
        type: Array as PropType<IRecipe["steps"]>,
    },
});
const { recipeSteps } = props;
</script>
<style lang="scss">
.single-recipe-steps {
    max-width: pxToRem(400);
    margin: auto;
    ol {
        margin-top: pxToRem(30);
        li {
            margin-bottom: pxToRem(10);
        }
    }
}
</style>
