import Header from "./components/Header";
import SubredditContainer from "./components/SubredditContainer";
import SubredditSearch from "./components/SubredditSearch";
import { useSubredditStore } from "./store/useSubredditStore";

function App() {
  const { subreddit } = useSubredditStore();
  const { data, subreddit_name, subreddit_subscribers } = subreddit || {};
  return (
    <main id='content' className='w-full min-h-screen p-2'>
      <Header />
      <section id='main' className='rounded-xl overflow-auto'>
        <header className='inline-flex flex-row items-center justify-start gap-x-2'>
          <SubredditSearch />
        </header>
        {data && (
          <main className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(400px,500px))] gap-6 my-4'>
            <SubredditContainer
              data={data}
              subreddit_name={subreddit_name}
              subreddit_subscribers={subreddit_subscribers}
            />
          </main>
        )}
      </section>
      <footer className='text-center' id='footer'>
        <p>
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
