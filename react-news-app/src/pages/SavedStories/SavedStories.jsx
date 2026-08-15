import { useEffect, useState } from "react";

import NewsGrid from "../../components/NewsGrid/NewsGrid";
import { getSavedStories } from "../../utils/savedStories";

import "./SavedStories.css";

function SavedStories() {
  const [savedStories, setSavedStories] = useState([]);

  useEffect(() => {
    const stories = getSavedStories();

    setSavedStories(stories);
  }, []);

  return (
    <main className="saved-stories">
      <div className="container">

        <header className="saved-stories__header">
          <span className="saved-stories__eyebrow">
            Your collection
          </span>

          <h1>Saved Stories</h1>

          <p>
            Stories you saved to read later.
          </p>
        </header>

        {savedStories.length > 0 ? (
         <NewsGrid
            articles={savedStories}
            onSaveChange={setSavedStories}
        />
        ) : (
          <div className="saved-stories__empty">
            <div className="saved-stories__empty-icon">
              ♡
            </div>

            <h2>No saved stories yet</h2>

            <p>
              Save articles from the news feed and
              they will appear here.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}

export default SavedStories;