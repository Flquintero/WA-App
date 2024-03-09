<script setup lang="ts">
import { placeholderImage } from "~/data/placeholders";
const img = useImage();

// Types

import type { IRecipe, IIngredient } from "~/types/recipes";

// Props

const props = defineProps({
    recipeItem: {
        type: Object as PropType<IRecipe>,
    },
});
const { recipeItem } = props;

// Computed

const featuredProteinIngredient: ComputedRef<IIngredient | undefined> =
    computed(() =>
        recipeItem?.ingredients.find(
            (ingredient: IIngredient) => ingredient.type === "protein"
        )
    );
const backgroundStyles = computed(() => {
    const imgUrl = img(recipeItem?.images[0] as string);
    return { backgroundImage: `url('${imgUrl}'), url('${placeholderImage}')` };
});
</script>

<template>
    <NuxtLink :to="`/recipes/${recipeItem?.slug}`">
        <div class="recipes-list-item">
            <div class="recipes-list-item__image" :style="backgroundStyles" />
            <div class="recipes-list-item__info">
                <div>
                    <div class="recipes-list-item__info-protein">
                        <h3>{{ featuredProteinIngredient?.name }}</h3>
                    </div>
                    <div class="recipes-list-item__info-name">
                        <h4>{{ recipeItem?.name }}</h4>
                    </div>
                    <div class="recipes-list-item__info-author">
                        <h4>{{ recipeItem?.author_email }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
.recipes-list-item {
    display: flex;
    border: 1px solid $border-color;
    margin: pxToRem(20);
    width: pxToRem(400);
    @include mobile {
        width: pxToRem(300);
        font-size: pxToRem(12);
    }
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    &:hover {
        background-color: $hover-color;
    }
    &__image {
        min-width: pxToRem(100);
        width: pxToRem(100);
        height: pxToRem(100);
        border-right: 1px solid $border-color;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: $border-radius 0 0 $border-radius;
    }
    &__info {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        &-author {
            @include mobile {
                font-size: pxToRem(11);
            }
        }
    }
}
</style>
