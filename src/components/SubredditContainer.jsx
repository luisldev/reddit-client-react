import ControlsIcon from "./icons/ControlsIcon";
import SubredditCard from "./SubredditCard";
import useSubredditStore from "../store/useSubredditStore";

function SubredditContainer({
  query,
  data,
  subreddit_name,
  subreddit_subscribers,
  id,
}) {
  const { isSearching } = useSubredditStore();

  return (
    <article
      className={`' rounded-lg px-4 py-2 bg-gray-100 dark:bg-neutral-900 dark:text-white/85 h-max ' ${
        isSearching ? "opacity-50" : ""
      }`}
    >
      <header className='flex flex-row items-center justify-between'>
        <div>
          <p className='text-lg'>
            <b>{subreddit_name}</b>
          </p>
          <p className='text-xs'>{subreddit_subscribers} suscriptores</p>
        </div>
        <div className='relative'>
          <ControlsIcon query={query} id={id} />
        </div>
      </header>
      <main className='px-1 mt-2 overflow-y-auto'>
        {data.data.map((item) => {
          return (
            <SubredditCard
              key={item.permalink}
              author={item.author}
              comments={item.comments}
              date={item.created}
              permalink={item.permalink}
              title={item.title}
              votes={item.votes}
            />
          );
        })}
      </main>
    </article>
  );
}
export default SubredditContainer;
