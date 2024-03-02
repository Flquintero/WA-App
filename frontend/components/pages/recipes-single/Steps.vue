<template>
    <div class="single-recipe-steps">
        <ol>
            <li v-for="step in recipeSteps" :key="step">
                {{ step }}
            </li>
        </ol>
    </div>
</template>
<script setup lang="ts">
// Props
const props = defineProps({
    recipeSteps: {
        type: Array, // add typing,
    },
});
const { recipeSteps } = props;
</script>
<style lang="scss" scoped>
.single-recipe-steps {
    max-width: pxToRem(400);
    margin: auto;
    ol {
        margin-top: pxToRem(30);
        li {
            margin-bottom: pxToRem(10);
        }
    }
}
</style>
