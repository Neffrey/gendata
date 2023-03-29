// LIBRARIES
import { create } from "zustand";

export interface Prop {
  id: string;
  name: string;
}

export interface PropsStoreTypes {
  props: Prop | null | undefined;
  setProps: (props: Prop | null | undefined) => void;
}

export const usePropsStore = create<PropsStoreTypes>((set) => ({
  props: null,
  setProps: (props) => set({ props }),
}));
