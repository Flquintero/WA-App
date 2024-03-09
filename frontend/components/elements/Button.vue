<script setup lang="ts">
// Props

const props = defineProps({
    displayText: {
        type: String,
    },
});
const { displayText } = props;
</script>
<template>
    <button class="button">
        <slot>
            <span>{{ displayText }}</span>
        </slot>
    </button>
</template>
<style lang="scss" scoped>
.button {
    width: 100%;
    height: pxToRem(50);
    @include mobile {
        width: 100%;
    }
    margin: auto;
    background: $primary;
    border: 1px solid $primary;
    border-radius: $border-radius;
    color: $white;
    cursor: pointer;
}
</style>
