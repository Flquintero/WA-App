<template>
    <NuxtLink :to="`recipe/${recipeItem?.slug}`">
        <div class="recipes-list-item">
            <div
                :style="{
                    'background-image': `url(${
                        recipeItem?.images[0] || placeholderImage
                    })`,
                }"
                class="recipes-list-item__image"
            />
            <div class="recipes-list-item__info">
                <div class="recipes-list-item__info-protein">
                    <h3>{{ featuredProteinIngredient.name }}</h3>
                </div>
                <div class="recipes-list-item__info-name">
                    <h4>{{ recipeItem?.name }}</h4>
                </div>
                <div class="recipes-list-item__info-author">
                    <h4>{{ recipeItem?.author_email }}</h4>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
// Props
const props = defineProps({
    recipeItem: {
        type: Object, // add typing,
    },
});
const { recipeItem } = props;

// Data
const placeholderImage = ref("https://placekitten.com/300/100");

// Computed
const featuredProteinIngredient = computed(() =>
    recipeItem?.ingredients.find((item: any) => item.type === "protein")
);
</script>
<style lang="scss" scoped>
.recipes-list-item {
    display: flex;
    border: 1px solid $border-color;
    margin: pxToRem(20);
    min-width: pxToRem(400);
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    &:hover {
        background-color: $hover-color;
    }
    &__image {
        width: pxToRem(100);
        height: pxToRem(100);
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: $border-radius 0 0 $border-radius;
    }
    &__info {
        padding: pxToRem(20);
    }
}
</style>
