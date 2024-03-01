<template>
    <div class="default-header">
        <NuxtLink to="/">
            <img
                class="default-header__logo"
                src="https://res.cloudinary.com/wildasset/image/upload/v1591809481/logo/logo.svg"
            />
        </NuxtLink>
        <div class="default-header__icon">🐟</div>
        <BaseAvatar include-name />
    </div>
</template>
<style lang="scss" scoped>
.default-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: pxToRem(20);
    &__logo {
        width: pxtoRem(120);
        height: pxToRem(40);
    }
    &__icon {
        font-size: pxToRem(36);
    }
}
</style>
