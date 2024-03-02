<template>
    <div class="single-recipe-details">
        <h1 class="single-recipe-details__name">
            {{ currentRecipe.name }}
        </h1>
        <h4 class="single-recipe-details__email">
            <ClientOnly
                ><font-awesome-icon :icon="['fas', 'envelope']"
            /></ClientOnly>
            {{ currentRecipe.author_email }}
        </h4>
        <p class="single-recipe-details__description">
            {{ currentRecipe.description }}
        </p>
    </div>
</template>
<script setup lang="ts">
// Props
const props = defineProps({
    currentRecipe: {
        type: Object, // add typing,
    },
});
const { currentRecipe } = props;
</script>
<style lang="scss" scoped>
.single-recipe-details {
    &__name {
        text-transform: capitalize;
        padding-bottom: pxToRem(10);
        border-bottom: 1px solid $border-color;
    }
    &__email {
        margin-top: pxToRem(20);
        svg {
            color: $primary;
        }
    }
    &__description {
        margin-top: pxToRem(20);
        background-color: $hover-color;
        padding: pxToRem(20);
        border-radius: $border-radius;
    }
}
</style>
