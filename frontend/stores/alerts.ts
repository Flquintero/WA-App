import { defineStore } from "pinia";

import type { IAlert } from "~/types/alerts";

// To do: make it be more flexible and maybe even handle multiple and dismiss
export const useAlertsStore = defineStore("alerts", () => {
    const alert: Ref<IAlert | null> = ref(null);
    const currentAlert: ComputedRef<Ref<IAlert | null>> = computed(() => alert);
    function setAlert(newAlert: IAlert) {
        alert.value = newAlert;
        setTimeout(() => {
            alert.value = null;
        }, 2000);
    }
    return { currentAlert, setAlert };
});
