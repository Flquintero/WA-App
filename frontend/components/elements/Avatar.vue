<script setup lang="ts">
// Type

import type { IUser } from "~/types/user";

// Props

const props = defineProps({
    user: {
        type: Object as PropType<Ref<IUser>>,
    },
});
const { user } = props;
</script>

<template>
    <div class="user-avatar">
        <NuxtImg
            class="user-avatar__image"
            :src="user?.profile_image"
            alt="User"
        />
    </div>
</template>

<style lang="scss" scoped>
.user-avatar {
    &__image {
        width: pxToRem(35);
        height: pxToRem(35);
        border-radius: 100%;
        margin: 0 pxToRem(10);
    }
}
</style>
