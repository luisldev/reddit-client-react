import ControlsIcon from "./icons/ControlsIcon";
import SubredditCard from "./SubredditCard";
/**
 * Generar un ID único para guardar en LocalStorage los datos obtenidos de cada búsqueda válida de Subreddit y posteriormente cargarlos en cualquier momento
 *
 * Usar Array.prototype.unshift() para renderizar primero la última búsqueda realizada
 *
 */
function SubredditContainer({ data, subreddit_name, subreddit_subscribers }) {
  return (
    <article className='border p-2 rounded-lg'>
      <header className='flex flex-row items-center justify-between'>
        <div>
          <p className='text-lg'>
            <b>{subreddit_name}</b>
          </p>
          <p className='text-xs'>{subreddit_subscribers} suscriptores</p>
        </div>
        <div className='relative'>
          <ControlsIcon />
        </div>
      </header>
      <main className='px-1 mt-2 overflow-y-auto'>
        {data.map((post, index) => (
          <SubredditCard
            key={index}
            author={post.author}
            comments={post.comments}
            date={post.created}
            permalink={post.permalink}
            title={post.title}
            votes={post.votes}
          />
        ))}
      </main>
    </article>
  );
}
export default SubredditContainer;
