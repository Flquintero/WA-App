<template>
    <div v-if="recipeImages" class="image-gallery">
        <div class="image-gallery__list">
            <template v-for="imageUrl in recipeImages" :key="imageUrl">
                <div class="image-gallery__list-item">
                    <NuxtImg :src="`${imageUrl || placeholderImage}`" />
                </div>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
// Types

import type { IRecipe } from "~/types/recipes";

// Props

const props = defineProps({
    recipeImages: {
        type: Array as PropType<IRecipe["images"]>,
    },
});
const { recipeImages } = props;

// Data

const placeholderImage = "https://placekitten.com/400/500";
</script>
<style lang="scss">
.image-gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: pxToRem(50);
    &__list {
        display: flex;
        justify-content: center;
        padding: pxToRem(20) 0;

        &-item {
            width: pxToRem(50);
            height: pxToRem(50);
            margin: 0 pxToRem(5);
            flex-grow: 1;
            border-radius: $border-radius;
            cursor: pointer;
            img {
                height: 100%;
                width: 100%;
            }
        }
    }
}
</style>
