<template>
    <div class="default-header">
        <NuxtLink to="/"><h2>Recipe Browser 3000</h2></NuxtLink>
        <BaseAvatar include-name />
    </div>
</template>
<style lang="scss">
.default-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: pxToRem(20);
}
</style>
