<script setup lang="ts">
// Props

const props = defineProps({
    loadingText: {
        type: String,
    },
});
const { loadingText } = props;
</script>

<template>
    <div class="loader">
        <div class="loader__content">
            <div class="loader__content-icon">❤️</div>
            <div>
                <h2 class="loader__content-text">{{ loadingText }}</h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    height: 100vh;
    display: flex;
    justify-content: center;
    &__content {
        height: pxToRem(250);
        padding: pxToRem(20);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: pxToRem(100);
        border-radius: $border-radius;
        &-icon {
            font-size: pxToRem(100);
        }
        &-text {
            text-align: center;
        }
    }
}
</style>
