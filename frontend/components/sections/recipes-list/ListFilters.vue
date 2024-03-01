<template>
    <div class="list-filters">
        <h3 class="list-filters__label">Filter By:</h3>
        <div class="list-filters__items">
            <BaseDropdown
                trigger-placeholder="Choose Ingredient"
                :menu-options="ingredients"
                @option-chosen="setFilterParam('ingredients', $event)"
                @option-removed="removeFilterParam('ingredients', $event)"
            />
            <BaseDropdown
                trigger-placeholder="Choose Author"
                :menu-options="authors"
                @option-chosen="setFilterParam('author_email', $event)"
                @option-removed="removeFilterParam('author_email', $event)"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { authors } from "~/data/authors";
import { ingredients } from "~/data/ingredients";

// Methods
const setFilterParam = (filterType: any, filterValue: any) => {
    const filterParams = `search[${filterType}]=${filterValue}&search[${filterType}]=${filterValue}`;
};
const removeFilterParam = (filterType: any, filterValue: any) => {
    const filterParams = `search[${filterType}]=${filterValue}&search[${filterType}]=${filterValue}`;
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
        margin: pxToRem(20) 0;
        button {
            margin: 0 pxToRem(10);
            min-width: pxToRem(200);
        }
    }
}
</style>
