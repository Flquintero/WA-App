<template>
    <main class="recipes-list">
        <SectionRecipesListItem
            v-for="recipe in recipesList"
            :key="recipe.id"
            :recipe-item="recipe"
        />
    </main>
</template>
<script setup lang="ts">
const recipesList: any = ref([]);

// To do:research issue happening with useFetch, not sure if its how it interacts with api.
const getRecipes = async () => {
    try {
        const recipeListResponse = await $fetch(
            "http://localhost:8888/api/recipes"
        );
        console.log(recipeListResponse);
        recipesList.value = (recipeListResponse as any).data; //deconstruct
    } catch (error) {
        // to do: if time add error toast
        // handle errors
    }
};

onMounted(getRecipes);
</script>
<style lang="scss" scoped>
.recipes-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
