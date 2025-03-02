import {useSubredditStore} from "../store/useSubredditStore"
import getSubredditItems from './getSubredditItems'

function getSubredditInfo(subreddit) {
    const {setIsSearching, setSubreddit, setError} = useSubredditStore.getState();
    setIsSearching(true);
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then((res) => {
            if(!res.ok) {
                throw new Error('Error al obtener el subreddit. Revise su conexión a Internet')
            }
            return res.json();
        })
        .then((response) => {
            const subredditInfo = getSubredditItems(response)
            setSubreddit(subredditInfo)
        })
        .catch(() => {
            setError('Error al obtener el subreddit. intente usar otro criterio de búsqueda')
        })
        .finally(() => {
            setIsSearching(false)
        });
    
}

export default getSubredditInfo;