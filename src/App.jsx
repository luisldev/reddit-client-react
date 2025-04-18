import Header from "./components/Header";
import SubredditContainer from "./components/SubredditContainer";
import SubredditSearch from "./components/SubredditSearch";
import { useSubredditStore } from "./store/useSubredditStore";

function App() {
  const { searchResults } = useSubredditStore();
  return (
    <main
      id='content'
      className='w-full min-h-screen p-2 dark dark:bg-neutral-950'
    >
      <Header />
      <section id='main' className='rounded-xl overflow-auto'>
        <header className='inline-flex flex-row items-center justify-start gap-x-2'>
          <SubredditSearch />
        </header>
        {searchResults.length > 0 && (
          <main className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-2 my-4'>
            {searchResults.map((result) => {
              return (
                <SubredditContainer
                  query={result.query}
                  key={result.id}
                  id={result.id}
                  data={result.data}
                  subreddit_name={result.data.subreddit_name}
                  subreddit_subscribers={result.data.subreddit_subscribers}
                />
              );
            })}
          </main>
        )}
      </section>
      <footer className='text-center dark:text-white/80' id='footer'>
        <p className='text-xs'>
          Creado con ♥️ por{" "}
          <a
            className='hover:opacity-70 transition duration-100'
            href='https://github.com/luisldev'
            target='_blank'
          >
            Luis López
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
