<template>
    <div class="single-recipe-details">
        <h1 class="single-recipe-details__name">
            {{ currentRecipe?.name }}
        </h1>
        <h4 class="single-recipe-details__email">
            <!-- To do: Include Icon -->
            {{ currentRecipe?.author_email }}
        </h4>
        <!-- To do: Finish Read more functionality, put it there for perfoamnce
        reasons, include full description in desktop but truncated mobile -->
        <p class="single-recipe-details__description">
            {{ currentRecipe?.description.substring(0, 50) }}...
            <span>Read More</span>
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
<style lang="scss">
.single-recipe-details {
    &__name {
        text-transform: capitalize;
        padding-bottom: pxToRem(10);
        border-bottom: 1px solid $border-color;
        @include mobile {
            font-size: pxToRem(24);
        }
    }
    &__email {
        margin-top: pxToRem(20);
        @include mobile {
            font-size: pxToRem(14);
        }
    }
    &__description {
        margin-top: pxToRem(20);
        background-color: $hover-color;
        padding: pxToRem(20);
        border-radius: $border-radius;
        @include mobile {
            font-size: pxToRem(14);
        }
        span {
            color: $primary;
        }
    }
}
</style>
