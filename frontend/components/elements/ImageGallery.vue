<template>
    <div v-if="recipeImages" class="image-gallery">
        <div class="image-gallery__icon">
            <font-awesome-icon :icon="['fas', 'camera']" />
        </div>
        <div class="image-gallery__list">
            <template v-for="(imageUrl, index) in recipeImages" :key="imageUrl">
                <div
                    @click="setFeaturedImage(imageUrl)"
                    class="image-gallery__list-item"
                >
                    <NuxtImg
                        :src="`${imageUrl}`"
                        :placeholder="placeholderImage"
                        width="50"
                        height="50"
                        :alt="`Recipe Image ${index}`"
                    />
                </div>
            </template>
        </div>
        <BaseModal v-if="featuredImageUrl" @close="removeFeaturedImageUrl">
            <template #modal-header>
                <div class="image-gallery__modal-icon">
                    <font-awesome-icon :icon="['fas', 'camera']" />
                </div>
            </template>
            <template #modal-body>
                <div class="image-gallery__modal-image">
                    <NuxtImg
                        :src="`${featuredImageUrl}`"
                        :placeholder="placeholderImage"
                    />
                </div>
            </template>
        </BaseModal>
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

// Would ask design team to come up with an image not found placeholder maybe or something to cross promote
const placeholderImage =
    "https://res.cloudinary.com/wildasset/image/upload/v1591809481/logo/logo.svg";
const featuredImageUrl = ref("");

// Methods

const setFeaturedImage = (imageUrl: string) => {
    featuredImageUrl.value = imageUrl;
};
const removeFeaturedImageUrl = () => {
    featuredImageUrl.value = "";
};
</script>
<style lang="scss" scoped>
@mixin foto-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: pxToRem(10) auto pxToRem(5);
    background-color: $alt-background-color;
    border-radius: 50%;
    width: pxToRem(50);
    height: pxToRem(50);
}
.image-gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: pxToRem(30);
    &__icon {
        @include foto-icon();
    }
    &__list {
        display: flex;
        justify-content: center;
        padding: pxToRem(20) 0;
        &-item {
            margin: 0 pxToRem(5);
            flex-grow: 1;
            border-radius: $border-radius;
            cursor: pointer;
        }
    }

    &__modal {
        &-icon {
            @include foto-icon();
        }
        &-image {
            padding: pxToRem(30);
            img {
                border-radius: $border-radius;
            }
        }
    }
}
</style>
