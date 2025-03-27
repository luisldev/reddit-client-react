import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useSubredditStore = create()(
  persist(
    (set, get) => ({
      searchResults: [],
      error: "",
      isSearching: false,
      isOpen: false,

      setError: (state) =>
        set(() => ({
          error: state,
        })),

      setIsSearching: (state) =>
        set(() => ({
          isSearching: state,
        })),

      setIsOpen: (state) =>
        set(() => ({
          isOpen: state,
        })),

      addSearchResult: (query, resultData) => {
        const lowerCaseQuery = query.toLowerCase();

        const existingResult = get().searchResults.find(
          (res) => res.query.toLowerCase() === lowerCaseQuery
        );

        if (existingResult) return;

        const newResult = {
          id: crypto.randomUUID(),
          query,
          data: resultData,
        };

        set((state) => ({
          searchResults: [...state.searchResults, newResult],
        }));
      },

      removeSearchResult: (id) => {
        set((state) => ({
          searchResults: state.searchResults.filter((res) => res.id !== id),
        }));
      },

      clearAllResults: () => {
        set({ searchResults: [] });
      },
    }),
    {
      name: "subreddit-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useSubredditStore;
