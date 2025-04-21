/* eslint-disable @typescript-eslint/no-explicit-any */
export enum Roles {
  USER = "USER",
  ADMIN = "ADMIN",
  ROOT = "ROOT",
}

export enum ImageCategoryEnum {
  DESIGN = "DESIGN",
  ANALYTICS = "ANALYTICS",
  UPDATES = "UPDATES",
  INTERIOR = "INTERIOR",
}

export type User = {
  _id: string | undefined;
  name: string | undefined;
  imageUrl: string | undefined;
  roles: Roles[];
};

export type userStore = {
  user: User | undefined;
  setUser: (u: User) => void;
};

export type Image = {
  images: any[];
  render: number;
  setImages: (i: Image[]) => void;
  reRender: () => void;
};

export type ImageType = {
  _id: string;
  url: string;
  public_id: string;
  uploadedBy: { _id: string; name: string };
  imageName: string;
  category: ImageCategoryEnum;
};

export type LoadingStore = {
  uploadLoading: boolean;
  setUploadLoading: (val: boolean) => void;
};

export type FeedBackType = {
  _id: string;
  content: string;
  user: { _id: string; name: string };
  isAddressed: boolean;
  addressedBy: { _id: string; name: string } | undefined;
};

export type FeedBackStore = {
  feedback: any[];
  setFeedBack: (val: FeedBackType[]) => void;
};

export type ImageCategoryStore = {
  category: ImageCategoryEnum;
  setImageCategory: (val: ImageCategoryEnum) => void;
};
