<template>
    <main class="single-recipe-view">
        <NuxtLink to="/">
            <ClientOnly
                ><font-awesome-icon :icon="['fas', 'chevron-left']"
            /></ClientOnly>
            All Recipes
        </NuxtLink>
        <!-- To do: add loader here -->
        <div v-if="currentRecipe" class="single-recipe-view__content">
            <BaseImageGallery :recipe-images="currentRecipe.images" />
            <SingleRecipeDetails :current-recipe="currentRecipe" />
            <BaseTabsMenu
                :tab-options="['ingredients', 'steps']"
                @tab-chosen="setCurrentActiveTab"
            >
                <!-- To do: Make it more dynamic maybe using <component/> -->
                <SingleRecipeIngredients
                    v-if="currentActiveTab === 'ingredients'"
                    :recipe-ingredients="currentRecipe.ingredients"
                />
                <SingleRecipeSteps
                    v-if="currentActiveTab === 'steps'"
                    :recipe-steps="currentRecipe.steps"
                />
            </BaseTabsMenu>
            <!-- To do: Abstract styling / functionality into button component to make it more flexible for more variants/states -->
            <button class="single-recipe-view__content-button">
                Add {{ featuredProteinIngredient?.name }} to Cart
            </button>
        </div>
    </main>
</template>
<script setup lang="ts">
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

// Types

import type {
    IRecipeSingleResponse,
    IRecipe,
    IIngredient,
} from "~/types/recipes";

// Data

const currentRecipe: Ref<IRecipe | null> = ref(null);
const currentActiveTab = ref("ingredients");

// Computed

const recipeImages: ComputedRef<string[] | undefined> = computed(
    () => currentRecipe?.value?.images
);
const featuredProteinIngredient = computed(() => {
    return currentRecipe.value?.ingredients.find(
        (ingredient: IIngredient) => ingredient.type === "protein"
    );
});

// Methods

// To do:research issue happening with useFetch, not sure if its how it interacts with api.
const getCurrentRecipe = async () => {
    try {
        const singleRecipeResponse: IRecipeSingleResponse = await $fetch(
            `${runtimeConfig.public.apiBase}/recipes/${route.params.slug}`
        );
        const { data } = singleRecipeResponse;
        currentRecipe.value = data;
    } catch (error: any) {
        // To do: add error toast
        // would else use error reporting here: sentry, etc.
    }
};
const setCurrentActiveTab = async (activeTab: string) => {
    currentActiveTab.value = activeTab;
};

// Lifecycle

onMounted(getCurrentRecipe);

// Metadata

useSeoMeta({
    title: () => currentRecipe?.value?.name as string,
    ogTitle: () => currentRecipe?.value?.name as string,
    description: () => currentRecipe?.value?.description as string,
    ogDescription: () => currentRecipe?.value?.description as string,
    ogImage: () => (currentRecipe?.value?.images[0] as string) || null,
});
</script>
<style lang="scss" scoped>
.single-recipe-view {
    height: 100%;
    padding: $page-content-side-spacing;
    &__content {
        display: flex;
        flex-direction: column;
        max-width: pxToRem(800);
        margin: pxToRem(30) auto;
        // To do: Abstract styling / functionality into button component to make it more flexible for more variants/states
        &-button {
            height: pxToRem(50);
            width: pxToRem(400);
            @include mobile {
                width: 100%;
            }
            margin: auto;
            background: $primary;
            border: 1px solid $primary;
            border-radius: $border-radius;
            color: $white;
            cursor: pointer;
        }
    }
}
</style>
