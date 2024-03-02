<template>
    <div v-if="recipeImages" class="image-gallery">
        <div
            class="image-gallery__featured"
            :style="{
                'background-image': `url(${currentFeaturedImageUrl})`,
            }"
        ></div>
        <div class="image-gallery__others">
            <template v-for="imageUrl in recipeImages" :key="imageUrl">
                <div
                    v-if="imageUrl !== currentFeaturedImageUrl"
                    class="image-gallery__others-item"
                    :style="{
                        'background-image': `url(${imageUrl})`,
                    }"
                    @click="setFeaturedImage(imageUrl)"
                ></div>
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
const currentFeaturedImageUrl = ref("");

// Methods

const setDefaultFeaturedImage = () => {
    currentFeaturedImageUrl.value = recipeImages
        ? (recipeImages[0] as string)
        : (placeholderImage as string);
};
const setFeaturedImage = (imageUrl: string) => {
    currentFeaturedImageUrl.value = imageUrl;
};

// Lifecycle

onMounted(() => {
    setDefaultFeaturedImage();
});
</script>
<style lang="scss" scoped>
.image-gallery {
    max-width: pxToRem(600);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__featured {
        width: pxToRem(300);
        height: pxToRem(300);
        background-size: cover;
        border-radius: $border-radius;
    }
    &__others {
        display: flex;
        justify-content: center;
        padding: pxToRem(20) 0;

        &-item {
            background-size: cover;
            max-width: pxToRem(50);
            height: pxToRem(50);
            margin: 0 pxToRem(5);
            flex-grow: 1;
            border-radius: $border-radius;
            cursor: pointer;
        }
    }
}
</style>
