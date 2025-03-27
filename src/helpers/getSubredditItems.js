function getSubredditItems(response) {

    if (!response?.data?.children || response.data.children.length === 0) {
        return { data: [], subreddit_name: "Desconocido", subreddit_subscribers: 0 };
    }

    const data = response.data.children.map((item) => ({
        votes: item.data.ups ?? 0,
        title: item.data.title ?? "Sin título",
        author: item.data.author ?? "Anónimo",
        created: item.data.created_utc
            ? new Date(item.data.created_utc * 1000).toLocaleString()
            : "Fecha no disponible",
        comments: item.data.num_comments ?? 0,
        permalink: `https://www.reddit.com${item.data.permalink}`
    }));

    const subreddit_name =
      response.data.children[0]?.data?.subreddit_name_prefixed || "Desconocido";
    const subreddit_subscribers =
      response.data.children[0]?.data?.subreddit_subscribers || 0;
    return { data, subreddit_name, subreddit_subscribers };
}

export default getSubredditItems;
