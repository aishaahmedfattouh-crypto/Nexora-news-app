import { useState } from "react";
import NewsGrid from "../../components/NewsGrid/NewsGrid";
import { getSavedStories } from "../../utils/savedStories";

import "./SavedStories.css";

function SavedStories() {
  const [savedStories] = useState(() => getSavedStories());

  return (
    <main className="saved-stories">
      <div className="saved-stories__header">
        <span>Your collection</span>

        <h1>Saved Stories</h1>

        <p>
          Stories you saved to read later.
        </p>
      </div>

      <NewsGrid articles={savedStories} />
    </main>
  );
}

export default SavedStories;