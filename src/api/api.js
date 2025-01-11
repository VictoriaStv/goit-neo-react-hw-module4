import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const searchImages = async (filter, page) => {
  const { data } = await axios("/search/photos", {
    params: {
      query: filter,
      page: page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID BFhs0kAKqyFxrdMfKNkPVItfZZahFw37sSBnRLYH34I`,
      "Accept-Version": "v1",
    },
  });
  return data;
};
