<script setup lang="ts">
// Events

const emit = defineEmits<{
    (e: "close"): void;
}>();
</script>

<template>
    <div class="modal">
        <div class="modal__content">
            <div @click="emit('close')" class="modal__content-dismiss">
                <font-awesome-icon :icon="['fas', 'xmark']" />
            </div>
            <div class="modal__content-header">
                <slot name="modal-header" />
            </div>
            <div class="modal__content-body">
                <slot name="modal-body" />
            </div>
            <div class="modal__content-footer">
                <slot name="modal-footer" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    background: $dark-overlay;
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    &__content {
        position: relative;
        height: auto;
        width: auto;
        padding: pxToRem(20);
        background: $white;
        border-radius: $border-radius;
        &-dismiss {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
        }
    }
}
</style>
