<template>
    <main class="recipes-view">
        <!-- To Do: add loader -->
        <h3 class="recipes-view__title">
            We don't just give you great fish, but a fun way to eat it too.
            Check out or list of recipes. Let us know which one is your
            favorite.
        </h3>
        <div class="recipes-view__list">
            <SectionRecipesListItem
                v-for="recipe in recipesList"
                :key="recipe.id"
                :recipe-item="recipe"
            />
        </div>
    </main>
</template>
<script setup lang="ts">
// Data

const recipesList: any = ref([]);
const pagingLinks: any = ref(null);
const currentPage = ref(1);

// Methods

const formatRecipesList = (recipesResults: any) => {
    recipesResults.forEach((recipe: any) => recipesList.value.push(recipe));
};

// To Do:research issue happening with useFetch, not sure if its how it interacts with api.
const getRecipes = async () => {
    try {
        const recipeListResponse = await $fetch(
            `http://localhost:8888/api/recipes?page=${currentPage.value}&limit=24`
        );
        console.log(recipeListResponse);
        pagingLinks.value = (recipeListResponse as any).links; //deconstruct
        formatRecipesList((recipeListResponse as any).data); //deconstruct
    } catch (error) {
        // To Do: add error toast
        // would else use error reporting here: sentry, etc.
    }
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
            if (pagingLinks.value.next) {
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
<style lang="scss" scoped>
.recipes-view {
    &__title {
        text-align: center;
        margin: pxToRem(30) 0;
    }
    &__list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
}
</style>
