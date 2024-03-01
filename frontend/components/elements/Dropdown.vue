<template>
    <div v-click-outside="closeMenu" class="dropdown-menu">
        <button @click="toggleMenuOpen" class="dropdown-menu__trigger">
            <slot>
                {{ triggerPlaceholder }}
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </slot>
        </button>
        <div v-if="isMenuOpen" class="dropdown-menu__options">
            <div
                class="dropdown-menu__options-item"
                v-for="option in menuOptions"
            >
                <span>{{ option.text }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
// Props
const props = defineProps({
    triggerPlaceholder: {
        type: String,
    },
    menuOptions: {
        type: Array, // add typing,
    },
});
const { triggerPlaceholder } = props;

// Data
const isMenuOpen = ref(false);

// Methods
const closeMenu = () => {
    isMenuOpen.value = false;
};
const toggleMenuOpen = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>
<style lang="scss" scoped>
.dropdown-menu {
    position: relative;
    &__trigger {
        background: $primary;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: pxToRem(10);
        color: $white;
        cursor: pointer;
    }
    &__options {
        position: absolute;
        top: pxToRem(50);
        left: pxToRem(10);
        background: $white;
        min-height: pxTorem(100);
        max-height: pxToRem(250);
        min-width: pxToRem(225);
        overflow-y: auto;
        $background: $white;
        border: 1px solid $border-color;
        box-shadow: $box-shadow-highlight;
        padding: pxToRem(20) 0;
        &-item {
            padding: pxToRem(5) pxToRem(10);
            margin: 0 pxToRem(5);
            font-size: pxToRem(15);
            cursor: pointer;
            &:hover {
                background: $hover-color;
                border-radius: $border-radius;
            }
        }
    }
}
</style>
