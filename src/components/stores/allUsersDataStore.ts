// LIBRARIES
import { create } from "zustand";
import { User } from "@prisma/client";

export interface AllUsersDataStoreTypes {
  allUsers: User[] | null;
  setAllUsers: (usersData: User[] | null) => void;
}

export const useAllUsersDataStore = create<AllUsersDataStoreTypes>((set) => ({
  allUsers: null,
  setAllUsers: (usersData) => set({ allUsers: usersData }),
}));
