<script setup lang="ts">
//Type

import type { IRecipe } from "~/types/recipes";

// Props

const props = defineProps({
    currentRecipe: {
        type: Object as PropType<IRecipe>,
    },
});
const { currentRecipe } = props;

// Data

const isShowMore = ref(false);

// Methods

const toggleShowMore = () => {
    isShowMore.value = !isShowMore.value;
}

// Computed

const descriptionDisplayText: ComputedRef<string | undefined> = computed(() => {
    return isShowMore.value ? currentRecipe?.description : `${currentRecipe?.description.substring(0, 50)}...`
})
</script>

<template>
    <div class="single-recipe-details">
        <h1 class="single-recipe-details__name">
            {{ currentRecipe?.name }}
        </h1>
        <h2 class="single-recipe-details__email">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            {{ currentRecipe?.author_email }}
        </h2>
        <p class="single-recipe-details__description">
            {{ descriptionDisplayText }}
            <div @click="toggleShowMore">
                <span v-if="isShowMore">Read Less</span>
                <span v-else>Read More</span>
            </div>
        </p>
    </div>
</template>

<style lang="scss" scoped>
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
        font-size: pxToRem(16);
        @include mobile {
            font-size: pxToRem(14);
        }
        svg {
            color: $icon-color;
        }
    }
    &__description {
        margin-top: pxToRem(20);
        background-color: $alt-background-color;
        padding: pxToRem(20);
        border-radius: $border-radius;
        height: auto;
        max-height: pxToRem(500);
        line-height: 1.5;
        @include mobile {
            font-size: pxToRem(14);
        }
        div {
            display: inline-block;
            color: $primary;
            cursor: pointer;
        }
    }
}
</style>
