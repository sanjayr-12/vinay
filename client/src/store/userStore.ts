import { create } from "zustand";
import { User } from "../types/store.types";
import type { userStore } from "../types/store.types";

export const useUserStore = create<userStore>()((set) => ({
  user: undefined,
  setUser: (u: User) =>
    set({
      user: { name: u.name, imageUrl: u.imageUrl, roles: u.roles },
    }),
}));
