<script setup lang="ts">
// Types

import type { IIngredient } from "~/types/recipes";

// Props

const props = defineProps({
    recipeIngredients: {
        type: Array as PropType<IIngredient[]>,
    },
});
const { recipeIngredients } = props;
</script>

<template>
    <div class="single-recipe-ingredients">
        <ul>
            <li v-for="ingredient in recipeIngredients" :key="ingredient.id">
                <p>
                    {{ ingredient.name }}, {{ ingredient.qty }}
                    {{ ingredient.unit }}
                    <BaseButton
                        v-if="ingredient.type === 'protein'"
                        class="single-recipe-ingredients__button"
                    >
                        <span>
                            <font-awesome-icon
                                :icon="['fas', 'cart-shopping']"
                            />
                            Add to cart
                        </span>
                    </BaseButton>
                </p>
            </li>
        </ul>
    </div>
</template>

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
    // To do: make button component have a small variant maybe
    &__button {
        width: auto;
        height: pxToRem(25);
        padding: 0 pxToRem(10);
        font-size: pxToRem(10);
        margin: 0 pxToRem(5);
    }
}
</style>
