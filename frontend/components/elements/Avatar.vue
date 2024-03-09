<template>
    <div class="user-avatar">
        <img
            class="user-avatar__image"
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
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
