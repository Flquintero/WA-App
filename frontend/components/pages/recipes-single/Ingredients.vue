<template>
    <div class="single-recipe-ingredients">
        <ul>
            <li v-for="ingredient in recipeIngredients" :key="ingredient.id">
                <p>
                    {{ ingredient.name }}, {{ ingredient.qty }}
                    {{ ingredient.unit }}
                </p>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
// Types

import type { IIngredient } from "~/types/recipes";

// Props
const props = defineProps({
    recipeIngredients: {
        type: Array as PropType<IIngredient[]>, // add typing,
    },
});
const { recipeIngredients } = props;

// Computed
</script>
<style lang="scss" scoped>
.single-recipe-ingredients {
    display: flex;
    justify-content: center;
    ul {
        margin-top: pxToRem(30);
        li {
            margin-bottom: pxToRem(5);
        }
    }
}
</style>
