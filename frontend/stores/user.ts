import { defineStore } from "pinia";

import type { IUser } from "~/types/user";

export const useUserStore = defineStore("user", () => {
    // Im assuming im getting  a full user object everytime, if we will update the object without replacing all then must make it reactive
    const user: Ref<IUser> = ref({
        profile_image: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    });
    const currentUser: ComputedRef<Ref<IUser>> = computed(() => user);
    return { currentUser };
});
