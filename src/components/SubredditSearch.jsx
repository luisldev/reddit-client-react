import SumIcon from "./icons/SumIcon";
import CancelIcon from "./icons/CancelIcon";
import getSubreddit from "../helpers/getSubreddit";
import { useSearchStore } from "../store/useSearchStore";
import { useSubredditStore } from "../store/useSubredditStore";

function SubredditSearch() {
  const { inputSearch, addInputSearch } = useSearchStore();

  const { error, isOpen, setIsOpen, setError, isSearching } =
    useSubredditStore();

  function handleSubmit(event) {
    event.preventDefault();
    const subredditInput = new FormData(event.target).get("subredditInput");

    if (!subredditInput) return;

    if (inputSearch === subredditInput) {
      setError("Esto ya lo haz buscado la última vez. intenta algo nuevo");
      return;
    }
    addInputSearch(subredditInput);
    getSubreddit(subredditInput);
  }

  return (
    <section id='subredditSearch' className='dark:text-white/90'>
      <button
        aria-label='Add Subreddit lane'
        className='inline-flex flex-row items-center gap-x-1 py-1 px-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-100 ease-in'
        onClick={() => {
          setIsOpen(true);
          setError("");
        }}
      >
        <SumIcon />
        <span className='opacity-80 pr-2'>Agregar Subreddit</span>
      </button>

      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs'>
          <dialog
            open
            className='relative p-4 dark:bg-neutral-900 dark:text-white/90 shadow-lg rounded-xl'
          >
            <search>
              <form
                className='flex flex-col items-center'
                onSubmit={handleSubmit}
              >
                <div className='flex flex-row items-center justify-between w-full'>
                  <p className='font-semibold'>Buscar Subreddit</p>
                  <button
                    type='button'
                    className='p-1 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-100 ease-in'
                    onClick={() => setIsOpen(false)}
                  >
                    <CancelIcon />
                  </button>
                </div>

                <div className='flex flex-col items-center justify-start gap-y-2 w-full'>
                  <input
                    id='subredditInput'
                    name='subredditInput'
                    className={`outline-none p-2 mt-2 border-2 border-gray-300 bg-gray-200/50 dark:border-neutral-500 dark:bg-neutral-800 rounded-xl gap-x-2 hover:bg-gray-200/70 dark:hover:bg-neutral-700 focus:border-blue-500 
                    ${
                      error
                        ? "border-red-500 dark:border-red-400 focus:border-red-500"
                        : ""
                    }`}
                    type='text'
                    placeholder='AskReddit, IA, Trends...'
                    autoComplete='off'
                    required
                  />
                  {error && (
                    <p className='text-red-400 text-xs text-center text-balance max-w-52'>
                      {error}
                    </p>
                  )}
                  <button
                    className={
                      "font-semibold text-white/90 w-full  px-2 py-1 rounded-lg bg-blue-500 hover:bg-blue-400 transition-colors duration-100 ease-in"
                    }
                    type='submit'
                  >
                    {isSearching ? "Buscando..." : "Agregar Subreddit"}
                  </button>
                </div>
              </form>
            </search>
          </dialog>
        </div>
      )}
    </section>
  );
}

export default SubredditSearch;
