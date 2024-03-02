<template>
    <main class="single-recipe-view">
        <NuxtLink to="/">
            <ClientOnly
                ><font-awesome-icon :icon="['fas', 'chevron-left']"
            /></ClientOnly>
            All Recipes
        </NuxtLink>
        <div v-if="currentRecipe" class="single-recipe-view__content">
            <BaseImageGallery :recipe-images="currentRecipe.images" />
            <SingleRecipeDetails :current-recipe="currentRecipe" />
            <BaseTabsMenu
                :tab-options="['ingredients', 'steps']"
                @tab-chosen="setCurrentActiveTab"
            >
                <!-- TO DO: Make it more dynamic maybe using <component/> -->
                <SingleRecipeIngredients
                    v-if="currentActiveTab === 'ingredients'"
                    :recipe-ingredients="currentRecipe.ingredients"
                />
                <SingleRecipeSteps
                    v-if="currentActiveTab === 'steps'"
                    :recipe-steps="currentRecipe.steps"
                />
            </BaseTabsMenu>
        </div>
    </main>
</template>
<script setup lang="ts">
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

// Data

const currentRecipe = ref(null);
const currentActiveTab = ref("ingredients");

// Computed

const recipeImages = computed(() => currentRecipe.images);

// Methods

// To Do:research issue happening with useFetch, not sure if its how it interacts with api.
const getCurrentRecipe = async () => {
    try {
        const { data } = await $fetch(
            `${runtimeConfig.public.apiBase}/recipes/${route.params.slug}`
        );
        console.log("recipe", data);
        currentRecipe.value = data;
    } catch (error: any) {
        // To Do: add error toast
        // would else use error reporting here: sentry, etc.
    }
};
const setCurrentActiveTab = async (activeTab: string) => {
    currentActiveTab.value = activeTab;
};

// Lifecycle

onMounted(getCurrentRecipe);
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
    }
}
</style>
