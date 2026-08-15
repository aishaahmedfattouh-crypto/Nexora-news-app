import { useEffect, useState } from "react";

import { searchNews } from "../services/newsApi";
import normalizeArticle from "../utils/normalizeArticle";

function useNews(query = "technology") {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadNews() {
      try {
        setStatus("loading");
        setError(null);

        const data = await searchNews({
          query,
          pageSize: 12,
        });

        if (ignore) return;

        const normalizedArticles = (data.news || []).map(
          normalizeArticle
        );

        setArticles(normalizedArticles);
        setStatus("success");
      } catch (error) {
        if (ignore) return;

        setError(error.message);
        setStatus("error");
      }
    }

    loadNews();

    return () => {
      ignore = true;
    };
  }, [query]);

  return {
    articles,
    status,
    error,
  };
}

export default useNews;