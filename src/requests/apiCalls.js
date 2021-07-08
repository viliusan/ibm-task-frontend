import axios from "axios";

const apiKey = "d6ec65a52238e8d2bdb0e22179e2327c";

export const fetchApi = async (query) => {
  if (query) {
    const searchResults = await axios.get(
      `https://gnews.io/api/v4/search?q=${query}&max=9&token=${apiKey}`
    );
    return searchResults;
  }

  const res = await axios.get(
    `https://gnews.io/api/v4/top-headlines?&max=9&token=${apiKey}`
  );

  return res;
};

export const fetchApiByTopic = async (id) => {
  const results = await axios.get(
    `https://gnews.io/api/v4/top-headlines?=topic=${id}&max=9&token=${apiKey}`
  );
  return results;
};
