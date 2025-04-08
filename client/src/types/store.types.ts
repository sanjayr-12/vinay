export enum Roles {
  USER = "USER",
  ADMIN = "ADMIN",
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: any[];
  render: number;
  setImages: (i: Image[]) => void;
  reRender: () => void;
};

export type ImageType = {
  _id: string;
  url: string;
  uploadedBy: { _id: string; name: string };
  imageName: string;
};
