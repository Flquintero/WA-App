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
const recipesList: any = ref([]);

// To Do:research issue happening with useFetch, not sure if its how it interacts with api.
const getRecipes = async () => {
    try {
        const recipeListResponse = await $fetch(
            "http://localhost:8888/api/recipes?page=1&limit=24"
        );
        console.log(recipeListResponse);
        recipesList.value = (recipeListResponse as any).data; //deconstruct
    } catch (error) {
        // To Do: add error toast
        // would else use error reporting here: sentry, etc.
    }
};

onMounted(getRecipes);
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
