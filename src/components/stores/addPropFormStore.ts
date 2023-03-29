// LIBRARIES
import { create } from "zustand";

export interface AddPropFormStoreProps {
  nameInput: string;
  setNameInput: (input: string) => void;
  nameError: string | null;
  setNameError: (error: string) => void;
  allNames: string[];
  setAllNames: (names: string[]) => void;
  formError: string | null;
  setFormError: (error: string) => void;
}

export const useAddPropFormStore = create<AddPropFormStoreProps>((set) => ({
  nameInput: "",
  setNameInput: (input) => set({ nameInput: input }),
  nameError: null,
  setNameError: (error) => set({ nameError: error }),
  allNames: [],
  setAllNames: (names) => set({ allNames: names }),
  formError: null,
  setFormError: (error) => set({ formError: error }),
}));
