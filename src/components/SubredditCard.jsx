function SubredditCard({ author, date, title, votes, comments, permalink }) {
  return (
    <>
      <hr className='border-[0.5px] border-neutral-200 dark:border-neutral-700' />
      <section className='my-0.5 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl'>
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
        <footer className='flex flex-row items-center justify-start gap-x-2 text-xs my-2 *:dark:bg-gray-600/70 *:dark:hover:bg-gray-600'>
          <a
            href={permalink}
            target='_blank'
            className='rounded-full p-2 font-semibold bg-neutral-300 transition-colors duration-100 inline-flex flex-row items-center justify-center gap-x-1'
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
            className='inline-flex gap-x-1 rounded-full px-4 py-2 font-semibold transition-colors duration-100'
          >
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='size-4'
                viewBox='0 0 16 16'
              >
                <path d='M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105' />
              </svg>
            </span>
            {comments}
          </a>
          <a
            href={permalink}
            target='_blank'
            className='rounded-full px-4 py-2 font-semibold transition-colors duration-100'
          >
            <span>
              <svg
                className='size-4'
                aria-hidden='true'
                fill='currentColor'
                icon-name='award-outline'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m18.66 15.36-2.593-3.885A6.997 6.997 0 1 0 3 8c0 1.22.322 2.42.932 3.476l-2.582 3.87a.961.961 0 0 0-.05 1.017c.168.315.525.51.88.483l2.177-.087.741 1.993c.108.333.41.59.756.64a.994.994 0 0 0 .947-.422l2.67-3.997c.35.026.708.026 1.059 0l2.678 4.01a.98.98 0 0 0 .794.418c.388 0 .761-.255.889-.621l.75-2.022 2.155.086a.976.976 0 0 0 .903-.481.955.955 0 0 0-.039-1.003ZM6.143 17.256c-.208-.557-.343-1.488-.871-1.85-.543-.37-1.485-.126-2.092-.101l1.7-2.547a7.009 7.009 0 0 0 2.992 1.909l-1.73 2.589ZM4.5 8a5.5 5.5 0 1 1 5.5 5.5A5.507 5.507 0 0 1 4.5 8Zm10.241 7.393c-.54.354-.675 1.302-.883 1.863l-1.73-2.59a7.007 7.007 0 0 0 2.992-1.908l1.7 2.547c-.601-.024-1.537-.268-2.079.088Z'></path>
              </svg>
            </span>
          </a>
          <a
            href={permalink}
            target='_blank'
            className='inline-flex gap-x-1 rounded-full px-4 py-2 font-semibold transition-colors duration-100'
          >
            <span>
              <svg
                className='size-4'
                aria-hidden='true'
                fill='currentColor'
                icon-name='share-new-outline'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2.239 18.723A1.235 1.235 0 0 1 1 17.488C1 11.5 4.821 6.91 10 6.505V3.616a1.646 1.646 0 0 1 2.812-1.16l6.9 6.952a.841.841 0 0 1 0 1.186l-6.9 6.852A1.645 1.645 0 0 1 10 16.284v-2.76c-2.573.243-3.961 1.738-5.547 3.445-.437.47-.881.949-1.356 1.407-.23.223-.538.348-.858.347ZM10.75 7.976c-4.509 0-7.954 3.762-8.228 8.855.285-.292.559-.59.832-.883C5.16 14 7.028 11.99 10.75 11.99h.75v4.294a.132.132 0 0 0 .09.134.136.136 0 0 0 .158-.032L18.186 10l-6.438-6.486a.135.135 0 0 0-.158-.032.134.134 0 0 0-.09.134v4.36h-.75Z'></path>
              </svg>
            </span>
            Compartir
          </a>
        </footer>
      </section>
    </>
  );
}
export default SubredditCard;
