<script setup lang="ts">
const alertsStore = useAlertsStore();
const { currentAlert } = alertsStore;
</script>
<template>
    <div class="default-layout-wrapper">
        <LayoutHeader />
        <slot />
        <BaseAlert v-if="currentAlert" />
    </div>
</template>
<style lang="scss">
.default-layout-wrapper {
    position: relative;
}
</style>
