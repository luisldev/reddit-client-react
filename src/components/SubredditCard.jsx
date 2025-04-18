import MenuIcon from "./icons/MenuIcon";
import { useState } from "react";

function SubredditCard({ author, date, title, votes, comments, permalink }) {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  return (
    <>
      <hr className='border-[0.5px] border-neutral-200 dark:border-neutral-700' />
      <section className='my-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl'>
        <header>
          <h3 className='text-xs'>
            <a href={`https://www.reddit.com/user/${author}`} target='_blank'>
              {author}
            </a>{" "}
            • {date}
          </h3>
        </header>
        <section>
          <a
            href={permalink}
            target='_blank'
            className='font-bold text-sm hover:opacity-80'
          >
            {title}
          </a>
        </section>
        <footer className='flex flex-row items-center justify-between sm:justify-start text-xs my-2'>
          <div className='inline-flex items-center justify-start gap-x-1'>
            <a
              href={permalink}
              target='_blank'
              className='rounded-full px-2 py-2 opacity-70 font-semibold bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors duration-100 inline-flex flex-row items-center justify-center gap-x-1'
            >
              <span>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  className='size-4 hover:fill-red-600 dark:hover:fill-red-400'
                >
                  <path d='M10 19c-.072 0-.145 0-.218-.006A4.1 4.1 0 0 1 6 14.816V11H2.862a1.751 1.751 0 0 1-1.234-2.993L9.41.28a.836.836 0 0 1 1.18 0l7.782 7.727A1.751 1.751 0 0 1 17.139 11H14v3.882a4.134 4.134 0 0 1-.854 2.592A3.99 3.99 0 0 1 10 19Zm0-17.193L2.685 9.071a.251.251 0 0 0 .177.429H7.5v5.316A2.63 2.63 0 0 0 9.864 17.5a2.441 2.441 0 0 0 1.856-.682A2.478 2.478 0 0 0 12.5 15V9.5h4.639a.25.25 0 0 0 .176-.429L10 1.807Z'></path>{" "}
                </svg>
              </span>
              {votes}
              <span>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  className='size-4 hover:fill-blue-600 dark:hover:fill-blue-400'
                >
                  <path d='M10 1c.072 0 .145 0 .218.006A4.1 4.1 0 0 1 14 5.184V9h3.138a1.751 1.751 0 0 1 1.234 2.993L10.59 19.72a.836.836 0 0 1-1.18 0l-7.782-7.727A1.751 1.751 0 0 1 2.861 9H6V5.118a4.134 4.134 0 0 1 .854-2.592A3.99 3.99 0 0 1 10 1Zm0 17.193 7.315-7.264a.251.251 0 0 0-.177-.429H12.5V5.184A2.631 2.631 0 0 0 10.136 2.5a2.441 2.441 0 0 0-1.856.682A2.478 2.478 0 0 0 7.5 5v5.5H2.861a.251.251 0 0 0-.176.429L10 18.193Z'></path>
                </svg>
              </span>
            </a>
            <a
              href={permalink}
              target='_blank'
              className='rounded-full px-4 py-2 opacity-70 font-semibold hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:opacity-90 transition-colors duration-100'
            >
              {comments} comentarios
            </a>
          </div>
          <div className='sm:hidden relative'>
            <button
              onClick={() => SetIsMenuOpen(!isMenuOpen)}
              className='p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-100 ease-in'
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
                <div
                  className='py-1 text-center inline-flex flex-col'
                  role='none'
                >
                  <a
                    href={permalink}
                    target='_blank'
                    className='rounded-full px-4 py-2 opacity-70 font-semibold hover:opacity-90 transition-colors duration-100'
                  >
                    Premiar
                  </a>
                  <a
                    href={permalink}
                    target='_blank'
                    className='rounded-full px-4 py-2 opacity-70 font-semibold hover:opacity-90 transition-colors duration-100'
                  >
                    Compartir
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className='hidden flex-row sm:inline-flex'>
            <a
              href={permalink}
              target='_blank'
              className='rounded-full px-4 py-2 opacity-70 font-semibold hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:opacity-90 transition-colors duration-100'
            >
              Premiar
            </a>
            <a
              href={permalink}
              target='_blank'
              className='rounded-full px-4 py-2 opacity-70 font-semibold hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:opacity-90 transition-colors duration-100'
            >
              Compartir
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}
export default SubredditCard;
