<template>
    <div class="default-header">
        <NuxtLink to="/">
            <img
                class="default-header__logo"
                src="https://res.cloudinary.com/wildasset/image/upload/v1591809481/logo/logo.svg"
                alt="Wild Alaskan"
            />
        </NuxtLink>
        <BaseAvatar />
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
}
</style>
