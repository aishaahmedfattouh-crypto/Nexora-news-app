function normalizeArticle(article) {
  return {
    id: article.id,
    title: article.title,
    description: article.description,
    url: article.url,
    author: article.author,
    image: article.image,
    publishedAt: article.published,
    category: article.category || [],
  };
}

export default normalizeArticle;