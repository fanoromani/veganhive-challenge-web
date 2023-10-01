import { create } from "zustand";
import { User } from "./types";

interface UserState {
  user?: User;
  setUser: (user: User) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: undefined,
  isLoggedIn: !!localStorage.getItem("User-Token"),
  setUser: (user: User) => set(() => ({ user: user })),
  setIsLoggedIn: (isLoggedIn: boolean) => set(() => ({ isLoggedIn })),
}));
