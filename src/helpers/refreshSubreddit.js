import getSubredditItems from './getSubredditItems';
import useSubredditStore from '../store/useSubredditStore';


export default function refreshSubreddit(subreddit){
    const {
        setIsSearching, addSearchResult,setError
    } = useSubredditStore.getState()
    setIsSearching(true)
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then((res) => res.json())
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