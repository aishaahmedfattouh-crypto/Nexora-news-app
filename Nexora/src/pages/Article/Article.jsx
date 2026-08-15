import { useParams, Link } from "react-router-dom";
import "./Article.css";

function Article() {
  const { id } = useParams();

  return (
    <main className="article-page">

      <div className="container">

        <Link to="/" className="article-back">
          ← Back to news
        </Link>

        <article className="article">

          <div className="article__category">
            Technology
          </div>

          <h1 className="article__title">
            Article {id}
          </h1>

          <div className="article__meta">
            <span>Nexora</span>
            <span>•</span>
            <span>August 14, 2026</span>
          </div>

          <div className="article__image">
            <img
              src="/images/news-placeholder.jpg"
              alt="Article"
            />
          </div>

          <div className="article__content">
            <p>
              This is the full article content.
              More detailed information about the
              story will appear here.
            </p>
          </div>

        </article>

      </div>

    </main>
  );
}

export default Article;