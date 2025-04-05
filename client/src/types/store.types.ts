export enum Roles {
    USER = "USER",
    ADMIN = "ADMIN"
}
export type User = {
  name: string | undefined;
  imageUrl: string | undefined;
  roles: Roles[];
};

export type userStore = {
  user:User|undefined;
  setUser: (u: User) => void;
};
