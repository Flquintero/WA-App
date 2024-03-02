<template>
    <div class="list-filters">
        <h3 class="list-filters__label">Filter By:</h3>
        <div class="list-filters__items">
            <BaseDropdown
                trigger-placeholder="Choose Ingredient"
                :menu-options="ingredients"
                @option-chosen="setFilterParam('ingredients', $event)"
            />
            <BaseDropdown
                trigger-placeholder="Choose Author"
                :menu-options="authors"
                @option-chosen="setFilterParam('author_email', $event)"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { authors } from "~/data/authors";
import { ingredients } from "~/data/ingredients";

const emit = defineEmits<{
    (e: "filter-updated", value: string): void;
}>();

// Sata

const filterParams: { [k: string]: string | undefined | null } = reactive({
    ingredients: null,
    author_email: null,
});

// Methods

const setFilterParam = (filterType: string, filterValue?: string | null) => {
    filterParams[filterType as string] = filterValue;
    let stringFilterParams = "";
    // Maybe not the best scalable option below, but because we only have two options this works
    // the dynamic option I didnt like because the shape of the ingredients param was different
    const ingredientsValue = filterParams["ingredients"];
    const authorEmailValue = filterParams["author_email"];
    if (ingredientsValue)
        stringFilterParams += `&search[ingredients][0]=${ingredientsValue}`;
    if (authorEmailValue)
        stringFilterParams += `&search[author_email]=${authorEmailValue}`;
    emit("filter-updated", stringFilterParams);
};
</script>
<style lang="scss">
.list-filters {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__label {
        font-size: pxToRem(16);
    }
    &__items {
        display: flex;
        @include mobile {
            flex-direction: column;
        }
        margin: pxToRem(20);
        .dropdown-menu {
            margin: pxToRem(10);
            width: auto;
        }
    }
}
</style>
