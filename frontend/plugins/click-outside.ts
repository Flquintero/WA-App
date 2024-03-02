// @ts-nocheck
import vClickOutside from "click-outside-vue3"; // To Do: Add the file where you can declare type for this or see if there is a ts library, or build own
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(vClickOutside);
});
