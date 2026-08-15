import { useState } from "react";
import {
  isStorySaved,
  toggleSavedStory,
} from "../../utils/savedStories";

import "./NewsCard.css";

function NewsCard({ article, onSaveChange  }) {
  const [saved, setSaved] = useState(
    isStorySaved(article.id)
  );

  const handleOpenArticle = () => {
    if (!article.url) {
      console.log("No article URL available");
      return;
    }

    window.open(
      article.url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSave = (event) => {
    event.stopPropagation();

    setSaved((previous) => !previous);

    const updatedStories = toggleSavedStory(article);

    if (onSaveChange) {
    onSaveChange(updatedStories);
    }
  };

  return (
    <article
      className="news-card"
      onClick={handleOpenArticle}
      role="link"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          handleOpenArticle();
        }
      }}
    >
      <div className="news-card__image-wrapper">
        <img
          src={article.image || "/images/images.jpg"}
          alt={article.title}
          className="news-card__image"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src =
              "/images/images.jpg";
          }}
        />

        <button
          className={`news-card__save ${
            saved ? "saved" : ""
          }`}
          onClick={handleSave}
          aria-label={
            saved ? "Remove from saved stories" : "Save story"
          }
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>

      <div className="news-card__body">
        <span className="news-card__category">
          {article.category || "GENERAL"}
        </span>

        <h3 className="news-card__title">
          {article.title}
        </h3>

        <p className="news-card__description">
          {article.description || "No description available."}
        </p>

        <div className="news-card__footer">
          <span>
            {article.author || "Nexora"}
          </span>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;