<script setup lang="ts">
// Events

const emit = defineEmits<{
    (e: "tabChosen", value: string): void;
}>();

// Props

const props = defineProps({
    tabOptions: {
        type: Array as PropType<string[]>,
    },
});
const { tabOptions } = props;

// Data

const currentActiveTab = ref("");

// Methods

const isTabItemActive = (tabItem: string) => currentActiveTab.value === tabItem;
const setInitialTab = () =>
    (currentActiveTab.value = (tabOptions as string[])[0]);
const setCurrentActiveTab = (tabItem: string) => {
    currentActiveTab.value = tabItem;
    emit("tabChosen", tabItem);
};

// Lifecycle

onMounted(setInitialTab);
</script>

<template>
    <div class="tabs-menu">
        <div class="tabs-menu__options">
            <!-- To do: Abstract tab item so its easier to control states, i.e : active -->
            <div
                class="tabs-menu__options-item"
                v-for="tabItem in tabOptions"
                :key="tabItem"
                @click="setCurrentActiveTab(tabItem)"
            >
                <span
                    :class="{
                        'tabs-menu__options-item--active':
                            isTabItemActive(tabItem),
                    }"
                    >{{ tabItem }}</span
                >
            </div>
        </div>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.tabs-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: pxToRem(20) 0;
    &__options {
        display: flex;
        width: 100%;
        border-top: 1px solid $border-color;
        border-bottom: 1px solid $border-color;
        padding: pxToRem(15) 0;
        &-item {
            display: flex;
            justify-content: center;
            flex-grow: 1;
            text-transform: capitalize;
            cursor: pointer;
            &--active {
                color: $primary;
            }
        }
    }
}
</style>
