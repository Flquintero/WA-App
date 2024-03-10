<script setup lang="ts">
import { companyLogoImage } from "~/data/placeholders";

// Pinia
// Use it here because we would probably need it in other components like cart, favorites and pass it down
// Plus BaseAvatar is a display only component and want to keep it agnostic
const userStore = useUserStore();
</script>

<template>
    <div class="default-header">
        <NuxtLink to="/">
            <NuxtImg
                class="default-header__logo"
                :src="companyLogoImage"
                alt="Wild Alaskan"
            />
        </NuxtLink>
        <BaseAvatar :user="userStore.currentUser" />
    </div>
</template>

<style lang="scss" scoped>
.default-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: pxToRem(20);
    &__logo {
        width: pxToRem(120);
        height: pxToRem(40);
    }
}
</style>
