<template>
    <main class="single-recipe-view">
        <NuxtLink to="/">
            <ClientOnly
                ><font-awesome-icon :icon="['fas', 'chevron-left']"
            /></ClientOnly>
            All Recipes
        </NuxtLink>
    </main>
</template>
<script setup lang="ts">
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

// Data

const currentRecipe = ref(null);

// Methods

// To Do:research issue happening with useFetch, not sure if its how it interacts with api.
const getCurrentRecipe = async () => {
    try {
        const { data } = await $fetch(
            `${runtimeConfig.public.apiBase}/recipes/${route.params.slug}`
        );
        console.log("recipe", data);
    } catch (error: any) {
        // To Do: add error toast
        // would else use error reporting here: sentry, etc.
    }
};

// Lifecycle

onMounted(() => {
    getCurrentRecipe();
});
</script>
<style lang="scss" scoped>
.single-recipe-view {
    padding: $page-content-side-spacing;
}
</style>
