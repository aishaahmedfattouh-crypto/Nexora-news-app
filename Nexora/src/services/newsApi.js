const API_BASE_URL = "https://api.currentsapi.services/v1";

const API_KEY = import.meta.env.VITE_CURRENTS_API_KEY;

async function request(endpoint, params = {}) {
  const searchParams = new URLSearchParams(params);

  const response = await fetch(
    `${API_BASE_URL}${endpoint}?${searchParams.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `News API request failed: ${response.status}`
    );
  }

  const data = await response.json();

  if (data.status !== "ok") {
    throw new Error(
      data.message || "Unable to fetch news."
    );
  }

  return data;
}

export async function searchNews({
  query,
  language = "en",
  pageNumber = 1,
  pageSize = 12,
} = {}) {
  return request("/search", {
    keywords: query,
    language,
    page_number: pageNumber,
    page_size: pageSize,
  });
}