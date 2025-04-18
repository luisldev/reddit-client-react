import getSubredditItems from "../helpers/getSubredditItems";
import { useSubredditStore } from "../store/useSubredditStore";

export default function getSubreddit(subreddit, { refresh = false } = {}) {
  const {
    addSearchResult,
    updateSearchResult,
    setError,
    searchResults,
    setIsOpen,
  } = useSubredditStore.getState();

  setError("");

  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then((res) => {
      const contentType = res.headers.get("content-type");

      if (!res.ok || !contentType?.includes("application/json")) {
        throw new Error(
          "Subreddit no encontrado o respuesta no válida. Intenta con otro nombre."
        );
      }

      return res.json();
    })
    .then((response) => {
      if (
        !response.data ||
        !response.data.children ||
        response.data.children.length === 0
      ) {
        throw new Error(
          "Este subreddit no contiene publicaciones o no existe."
        );
      }

      const subredditItems = getSubredditItems(response);
      const exists = searchResults.some(
        (res) => res.query.toLowerCase() === subreddit.toLowerCase()
      );

      if (refresh && exists) {
        updateSearchResult(subreddit, subredditItems);
      } else {
        addSearchResult(subreddit, subredditItems);
      }

      setIsOpen(false);
    })
    .catch((err) => {
      setError(err.message || "Ocurrió un error desconocido.");
    });
}
