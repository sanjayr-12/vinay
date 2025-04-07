import { create } from "zustand";
import { Image, User } from "../types/store.types";
import type { userStore } from "../types/store.types";

export const useUserStore = create<userStore>()((set) => ({
  user: undefined,
  setUser: (u: User) =>
    set({
      user: { name: u.name, imageUrl: u.imageUrl, roles: u.roles },
    }),
}));

export const useImageStore = create<Image>()((set) => ({
  images: [],
  render: 0,
  setImages: (imgs: Image[]) => set({ images: imgs }),
  reRender:()=>set((state)=>({render:state.render+1}))
}));
