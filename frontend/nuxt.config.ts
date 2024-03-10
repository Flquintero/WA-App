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
    css: ["@fortawesome/fontawesome-svg-core/styles.css"],
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
    image: {
        cloudinary: {
            baseURL: "https://res.cloudinary.com/pumiller/image/fetch/", // To do: add as env variable, but to avoid issues with test review left here
        },
    },
    modules: [
        ["@nuxtjs/google-fonts", { families: { Raleway: true } }],
        "@nuxtjs/robots",
        "@nuxt/image",
        "@pinia/nuxt",
    ],
    nitro: {
        compressPublicAssets: true,
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
});
