import { useState } from "react";
import SumIcon from "./icons/SumIcon";
import CancelIcon from "./icons/CancelIcon";
import { useSubredditStore } from "../store/useSubredditStore";
import getSubredditInfo from "../helpers/getSubrreditInfo";

function SubredditSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSearching } = useSubredditStore();

  function handleSubmit(event) {
    event.preventDefault();
    const subredditInput = new FormData(event.target).get("subredditInput");
    if (!subredditInput) return;
    getSubredditInfo(subredditInput);
    console.log(isSearching);
  }

  return (
    <section id='subredditSearch'>
      <button
        aria-label='Add Subreddit lane'
        className='inline-flex flex-row items-center gap-x-2 py-1 px-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors duration-100 ease-in'
        onClick={() => setIsOpen(true)}
      >
        <SumIcon />
        <span className='opacity-80 pr-2'>Add new Subreddit</span>
      </button>

      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs'>
          <dialog open className='relative p-4 bg-white shadow-lg rounded-xl'>
            <form
              className='flex flex-col items-center'
              onSubmit={handleSubmit}
            >
              <div className='flex flex-row items-center justify-between w-full'>
                <p className='font-semibold'>Search Subreddit</p>
                <button
                  type='button'
                  className='p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors duration-100 ease-in'
                  onClick={() => setIsOpen(false)}
                >
                  <CancelIcon />
                </button>
              </div>

              <div className='flex flex-col items-center justify-start gap-y-2 w-full'>
                <input
                  id='subredditInput'
                  name='subredditInput'
                  className='outline-none p-2 mt-2 border-2 border-gray-100 bg-gray-200/50 rounded-xl gap-x-2 hover:bg-gray-200/70 focus:border-blue-500'
                  type='text'
                  placeholder='AskReddit, IA, Trends...'
                  autoComplete='off'
                  required
                />
                <button
                  className={
                    "font-semibold text-white/90 w-full  px-2 py-1 rounded-lg bg-blue-500 hover:bg-blue-400 transition-colors duration-100 ease-in" +
                    (isSearching ? "opacity-50" : " ")
                  }
                  type='submit'
                >
                  Agregar Subreddit
                </button>
              </div>
            </form>
          </dialog>
        </div>
      )}
    </section>
  );
}

export default SubredditSearch;
