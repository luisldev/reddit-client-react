import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import { useSubredditStore } from "../store/useSubredditStore";
import getSubreddit from "../helpers/getSubreddit";
import SubredditCard from "./SubredditCard";

function SubredditContainer({
  query,
  data,
  subreddit_name,
  subreddit_subscribers,
  id,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const { removeSearchResult } = useSubredditStore();

  async function refreshSubreddit(query) {
    setIsLoading(true);
    await getSubreddit(query, { refresh: true, loadingKey: id });
    setIsLoading(false);
  }

  return (
    <article
      className={`rounded-lg p-2 transition-opacity duration-300 bg-gray-100 dark:bg-neutral-900 dark:text-white/85 w-full h-max ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <header className='flex flex-row items-center justify-between'>
        <div>
          <p className='text-lg'>
            <b>{subreddit_name}</b>
          </p>
          <p className='text-xs opacity-70'>
            {subreddit_subscribers} suscriptores
          </p>
        </div>
        <div className='relative'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full cursor-pointer p-2'
          >
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div
              className='absolute right-0 w-24 rounded-md shadow-lg bg-white dark:bg-neutral-800 z-10'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              <div className='py-1' role='none'>
                <button
                  onClick={() => {
                    refreshSubreddit(query);
                    setIsMenuOpen(false);
                  }}
                  className='w-full px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:text-gray-900
              dark:hover:text-gray-400'
                  role='menuitem'
                >
                  Refrescar
                </button>
                <button
                  onClick={() => {
                    setIsDelete(true);
                    setIsMenuOpen(false);
                  }}
                  className='w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:text-red-900
              dark:hover:text-red-400'
                  role='menuitem'
                >
                  Eliminar
                </button>
              </div>
            </div>
          )}
          {isDelete && (
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs px-2'>
              <div className='bg-white dark:bg-neutral-900 p-4 rounded-xl'>
                <p className='font-semibold mb-4'>
                  ¿Estas seguro de eliminar este Subreddit?
                </p>
                <div className='flex flex-row items-center justify-end gap-x-2 text-sm'>
                  <button
                    className=' px-2 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800'
                    onClick={() => {
                      removeSearchResult(id);
                    }}
                  >
                    Aceptar
                  </button>
                  <button
                    className=' px-2 py-1 rounded-lg bg-blue-500 dark:bg-blue-600 font-semibold text-white'
                    onClick={() => setIsDelete(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <main className='mt-2 overflow-y-auto'>
        {data.data.map((item) => (
          <SubredditCard
            key={item.permalink}
            author={item.author}
            comments={item.comments}
            date={item.created}
            permalink={item.permalink}
            title={item.title}
            votes={item.votes}
          />
        ))}
      </main>
    </article>
  );
}

export default SubredditContainer;
