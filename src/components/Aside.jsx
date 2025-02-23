import { useState } from "react";
import SumIcon from "./icons/SumIcon";
import SearchIcon from "./icons/SearchIcon";
import CancelIcon from "./icons/CancelIcon";
import SubredditCard from "./SubredditCard";

function Aside() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className="flex flex-col h-full p-2 bg-neutral-200 rounded-xl min-w-64 gap-y-2"
      id="sidebar"
    >
      <header className="self-start">
        <button
          aria-label="Add Subreddit lane"
          className="p-1 rounded-full bg-neutral-300 hover:opacity-85"
          onClick={() => setIsOpen(true)}
        >
          <SumIcon />
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
            <dialog open className="relative p-4 bg-white shadow-lg rounded-xl">
              <form
                className="flex flex-col items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                }}
              >
                <div className="flex flex-row items-center justify-between w-full">
                  <p>Search Subreddit</p>
                  <button
                    type="button"
                    className="p-2 rounded-full bg-neutral-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <CancelIcon />
                  </button>
                </div>

                <div className="flex items-center p-2 mt-4 border-2 border-gray-100 bg-gray-200/50 rounded-xl gap-x-2 hover:bg-gray-200/70 focus-within:border-blue-500">
                  <input
                    className="bg-transparent border-none outline-none"
                    type="text"
                    placeholder="AskReddit, IA, Trends..."
                    autoComplete="off"
                  />
                  <button className="opacity-50" type="submit">
                    <SearchIcon />
                  </button>
                </div>
              </form>
            </dialog>
          </div>
        )}
      </header>

      <section className="flex flex-col items-center gap-y-2">
        <SubredditCard />
        <SubredditCard />
        <SubredditCard />
        <SubredditCard />
        <SubredditCard />
        <SubredditCard />
        <SubredditCard />
      </section>
    </aside>
  );
}

export default Aside;
