// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    typescript: {
        typeCheck: false,
    },
    app: {
        head: {
            title: "Wild Alaskan Company | Recipe Browser 3000",
            htmlAttrs: {
                lang: "en",
            },
        },
    },
    runtimeConfig: {
        public: {
            apiBase: "http://localhost:8888/api",
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
    css: ["@fortawesome/fontawesome-svg-core/styles.css"],
    modules: [
        ["@nuxtjs/google-fonts", { families: { Raleway: true } }],
        "@nuxtjs/robots",
        "@nuxt/image",
        "@pinia/nuxt",
    ],
    components: [
        { path: "~/components/elements", prefix: "Base" },
        { path: "~/components/pages/recipes-index", prefix: "Recipes" },
        { path: "~/components/pages/recipes-single", prefix: "SingleRecipe" },
        { path: "~/components/layout", prefix: "Layout" },

        // It's important that this comes last if you have overrides you wish to apply
        // to sub-directories of `~/components`.
        //
        // ~/components/Btn.vue => <Btn />
        // ~/components/base/Btn.vue => <BaseBtn />
        "~/components",
    ],
});
