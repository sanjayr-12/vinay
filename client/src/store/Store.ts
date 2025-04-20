import { create } from "zustand";
import { FeedBackStore, Image, User } from "../types/store.types";
import type {
  FeedBackType,
  LoadingStore,
  userStore,
} from "../types/store.types";

export const useUserStore = create<userStore>()((set) => ({
  user: undefined,
  setUser: (u: User) =>
    set({
      user: { _id: u._id, name: u.name, imageUrl: u.imageUrl, roles: u.roles },
    }),
}));

export const useImageStore = create<Image>()((set) => ({
  images: [],
  render: 0,
  setImages: (imgs: Image[]) => set({ images: imgs }),
  reRender: () => set((state) => ({ render: state.render + 1 })),
}));

export const useLoadingStore = create<LoadingStore>()((set) => ({
  uploadLoading: false,
  setUploadLoading: (val: boolean) => set({ uploadLoading: val }),
}));

export const useFeedBackStore = create<FeedBackStore>()((set) => ({
  feedback: [],
  setFeedBack: (val: FeedBackType[]) => set({ feedback: val }),
}));
