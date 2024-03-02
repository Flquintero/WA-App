<template>
    <div class="tabs-menu">
        <div class="tabs-menu__options">
            <!-- TO DO: Abstract tab item so its easier to control states, i.e : active -->
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
<script setup lang="ts">
const emit = defineEmits<{
    (e: "tabChosen", value: string): void;
}>();

// Props
const props = defineProps({
    tabOptions: {
        type: Array, // add typing,
    },
});
const { tabOptions } = props;
// Data

const currentActiveTab = ref("");

// Methods
const isTabItemActive = (tabItem: string) => currentActiveTab.value === tabItem;
const setInitialTab = () => (currentActiveTab.value = tabOptions[0]);
const setCurrentActiveTab = (tabItem: string) => {
    currentActiveTab.value = tabItem;
    emit("tabChosen", tabItem);
};
// Lifecycle
onMounted(setInitialTab);
</script>
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
