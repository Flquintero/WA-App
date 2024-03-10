<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
import { placeholderImage } from "~/data/placeholders";

//Pinia

const alertsStore = useAlertsStore();
const { setAlert } = alertsStore;

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

// To do: research useFetch to leverage
const getRecipes = async () => {
    try {
        const { links, data }: IRecipeListResponse = await $fetch(
            `${runtimeConfig.public.apiBase}/recipes?page=${currentPage.value}&limit=24${filterParamsString.value}`
        );
        pagingLinks.value = links;
        formatRecipesList(data);
    } catch (error: any) {
        setAlert({
            message: `An Error has occured getting recipes. Please try again or contact support`,
            variant: "danger",
        });
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

// Init

useLazyAsyncData("listQuery", (): Promise<void> => {
    return getRecipes();
});

// Lifecycle

onMounted(() => {
    bindScrollEvent();
});

// SEO

useSeoMeta({
    title: () => "Wild Alaskan Company | Recipe Browser 3000" as string,
    ogTitle: () => "Wild Alaskan Company | Recipe Browser 3000" as string,
    description: () =>
        "Recipe Browser 3000 offers great quality recipes made with the best fish sold right here in Wild Alaskan Company" as string,
    ogDescription: () =>
        "Recipe Browser 3000 offers great quality recipes made with the best fish sold right here in Wild Alaskan Company" as string,
    ogImage: () => (placeholderImage as string) || null,
});
</script>

<template>
    <main class="recipes-view">
        <h3 class="recipes-view__title">
            We don't just offer you great fish, but a fun way to eat it too.
            Check out our recipes.
        </h3>
        <div class="recipes-view__content">
            <div class="recipes-view__content-filters">
                <RecipesListFilters @filter-updated="setNewFilterParams" />
            </div>
            <div class="recipes-view__content-list">
                <BaseLoader
                    v-if="!recipesList.length"
                    loadingText="Loading Goodness!"
                />
                <template v-else>
                    <RecipesListItem
                        v-for="recipe in recipesList"
                        :key="recipe.id"
                        :recipe-item="recipe"
                    />
                </template>
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
