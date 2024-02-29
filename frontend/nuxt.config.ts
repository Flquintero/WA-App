// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            title: "Recipe Browser 3000",
            htmlAttrs: {
                lang: "en",
            },
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/main.scss" as *;',
                },
            },
        },
    },
    modules: [["@nuxtjs/google-fonts", { families: { Raleway: true } }]],
    components: [
        { path: "~/components/elements", prefix: "Base" },
        { path: "~/components/sections", prefix: "Section" },
        { path: "~/components/layout", prefix: "Layout" },

        // It's important that this comes last if you have overrides you wish to apply
        // to sub-directories of `~/components`.
        //
        // ~/components/Btn.vue => <Btn />
        // ~/components/base/Btn.vue => <BaseBtn />
        "~/components",
    ],
});
