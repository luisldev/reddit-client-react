import getSubredditItems from "../helpers/getSubredditItems"
import useSubredditStore from '../store/useSubredditStore';

function getSubreddit(subreddit) {
  const {
    setError,
    setIsOpen,
    setIsSearching,
    addSearchResult,
  } = useSubredditStore.getState();
  setError('')
  setIsSearching(true)
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
  .then((res) => {
    if (!res.ok) {
      if (res.status == 404) {
        throw new Error(
          "Subreddit no encontrado, use otras palabras e inténtelo de nuevo"
        );
      }
      throw new Error("Revise su conexió a Internet e inténtelo de nuevo");
    }
    return res.json();
  })
  .then((response) => {
    const subredditItems = getSubredditItems(response);
    addSearchResult(subreddit, subredditItems);
    setIsOpen(false);
  })
  .catch((err) => {
    setError(err.message);
  })
  .finally(() => {
    setIsSearching(false);
  });
}

export default getSubreddit;
