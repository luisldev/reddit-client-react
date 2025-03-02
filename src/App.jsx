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
          <main className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 my-4'>
            <SubredditContainer
              data={data}
              subreddit_name={subreddit_name}
              subreddit_subscribers={subreddit_subscribers}
            />
          </main>
        )}
      </section>
      <footer className='' id='footer'>
        Footer
      </footer>
    </main>
  );
}

export default App;
