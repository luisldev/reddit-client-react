import { create } from 'zustand';

export const useSubredditStore = create((set) => ({
    isSearching: false,
    subreddit: {},
    error: '',

    setIsSearching: (isSearching) => set(() => ({ isSearching })),
    setSubreddit: (subreddit) => set(() => ({ subreddit })),
    setError: (error) => set(() => ({ error }))
}));

export default useSubredditStore;