import NewsCard from "../NewsCards/NewsCard";

import "./NewsGrid.css";

function NewsGrid({ articles = [], onSaveChange }) {
  if (!articles.length) {
    return (
      <p className="news-grid__empty">
        No stories found.
      </p>
    );
  }

  return (
    <div className="news-grid">
      {articles.map((article) => (
        <NewsCard
          key={article.id}
          article={article}
          onSaveChange={onSaveChange}
        />
      ))}
    </div>
  );
}

export default NewsGrid;