import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useSearchStore = create()(
  persist(
    (set, get) => ({
      inputSearch: "",

      addInputSearch: (newValue) => {
        if (get().inputSearch !== newValue) {
          set({ inputSearch: newValue });
        }
      },
    }),
    {
      name: "inputSearch",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useSearchStore
