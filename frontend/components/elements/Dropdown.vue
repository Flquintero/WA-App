<template>
    <div v-click-outside="closeMenu" class="dropdown-menu">
        <button @click="toggleMenuOpen" class="dropdown-menu__trigger">
            <slot>
                {{ displayTriggerText }}
                <span class="dropdown-menu__trigger-icon">
                    <font-awesome-icon
                        v-if="chosenOption"
                        :icon="['fas', 'circle-xmark']"
                        @click.stop="removeChosenOption"
                    />
                    <font-awesome-icon v-else :icon="['fas', 'chevron-down']" />
                </span>
            </slot>
        </button>
        <div v-if="isMenuOpen" class="dropdown-menu__options">
            <div
                class="dropdown-menu__options-item"
                v-for="option in menuOptions"
                :key="option.text"
                @click="setChosenOption(option)"
            >
                <span>{{ option.text }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const emit = defineEmits<{
    (e: "optionChosen", value: string): void;
    (e: "optionRemoved", value: string): void;
}>();
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
const chosenOption = ref(null);
const isMenuOpen = ref(false);

// Computed

const displayTriggerText = computed(
    () => chosenOption.value || triggerPlaceholder
);

// Methods
const closeMenu = () => {
    isMenuOpen.value = false;
};
const toggleMenuOpen = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
const setChosenOption = (chosenOptionObject: any) => {
    const { value, text } = chosenOptionObject;
    chosenOption.value = text;
    emit("optionChosen", value);
    toggleMenuOpen();
};
const removeChosenOption = () => {
    chosenOption.value = null;
    emit("optionRemoved");
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
        &-icon {
            margin: 0 pxToRem(10);
        }
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
