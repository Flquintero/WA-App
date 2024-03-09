<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

// Types

import type {
    IRecipeListLinks,
    IRecipe,
    IRecipeListResponse,
} from "~/types/recipes";

// Data

const recipesList: Ref<IRecipe[]> = ref([]);
const pagingLinks: Ref<IRecipeListLinks | null> = ref(null);
const currentPage = ref(1);
const filterParamsString = ref("");

// Methods

const formatRecipesList = (recipesResults: IRecipe[]) => {
    recipesResults.forEach((recipe: IRecipe) => recipesList.value.push(recipe));
};

// To do:research issue happening with useFetch, not sure if its how it interacts with api.
const getRecipes = async () => {
    try {
        const recipesListResponse: IRecipeListResponse = await $fetch(
            `${runtimeConfig.public.apiBase}/recipes?page=${currentPage.value}&limit=24${filterParamsString.value}`
        );
        const { links, data } = recipesListResponse;
        pagingLinks.value = links; //deconstruct
        formatRecipesList(data); //deconstruct
    } catch (error: any) {
        // To do: add error toast
        // would else use error reporting here: sentry, etc.
    }
};

const setNewFilterParams = (filterParams: string) => {
    recipesList.value = [];
    filterParamsString.value = filterParams;
    currentPage.value = 1;
    getRecipes();
};

const bindScrollEvent = () => {
    window.onscroll = () => {
        const bottomOfWindow =
            Math.max(
                window.pageYOffset,
                document.documentElement.scrollTop,
                document.body.scrollTop
            ) +
                window.innerHeight ===
            document.documentElement.offsetHeight;

        if (bottomOfWindow) {
            currentPage.value++;
            if (pagingLinks?.value?.next) {
                getRecipes();
            }
        }
    };
};

// Lifecycle

onMounted(() => {
    getRecipes();
    bindScrollEvent();
});
</script>

<template>
    <main class="recipes-view">
        <h3 class="recipes-view__title">
            We don't just give you great fish, but a fun way to eat it too.
            Check out or list of recipes. Let us know which one is your
            favorite.
        </h3>
        <div class="recipes-view__content">
            <div class="recipes-view__content-filters">
                <RecipesListFilters @filter-updated="setNewFilterParams" />
            </div>
            <div class="recipes-view__content-list">
                <!-- To do: add loader here -->
                <RecipesListItem
                    v-for="recipe in recipesList"
                    :key="recipe.id"
                    :recipe-item="recipe"
                />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.recipes-view {
    padding: $page-content-side-spacing;
    &__title {
        text-align: center;
        margin: pxToRem(30) 0;
    }
    &__content {
        &-filters,
        &-list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
    }
}
</style>
