const STORAGE_KEY = "nexora_saved_stories";

export function getSavedStories() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return [];
  }

  return JSON.parse(saved);
}

export function isStorySaved(articleId) {
  const stories = getSavedStories();

  return stories.some((story) => story.id === articleId);
}

export function toggleSavedStory(article) {
  const stories = getSavedStories();

  const exists = stories.some((story) => story.id === article.id);

  let updatedStories;

  if (exists) {
    updatedStories = stories.filter(
      (story) => story.id !== article.id
    );
  } else {
    updatedStories = [...stories, article];
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedStories)
  );

  return updatedStories;
}