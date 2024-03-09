<script setup lang="ts">
//Pinia

const alertsStore = useAlertsStore();
const { currentAlert } = alertsStore;

// Computed

const isDanger: Boolean = computed(
    () => currentAlert?.value?.variant === "danger"
);
const isSuccess: Boolean = computed(
    () => currentAlert?.value?.variant === "success"
);
</script>

<template>
    <div class="alert">
        <div
            class="alert__content"
            :class="{
                'alert__content--danger': isDanger,
                'alert__content--success': isSuccess,
            }"
        >
            <span>{{ currentAlert?.message }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.alert {
    position: absolute;
    top: 0;
    left: 0;
    height: pxToRem(75);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &__content {
        min-width: pxToRem(200);
        width: auto;
        max-width: pxToRem(250);
        padding: pxToRem(10);
        border: 1px solid $border-color;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: $box-shadow;
        &--danger {
            background: $danger;
            border: 1px solid $danger;
            color: $white;
        }
        &--success {
            background: $success;
            border: 1px solid $success;
            color: $white;
        }
    }
}
</style>
