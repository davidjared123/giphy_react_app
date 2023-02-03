const API_KEY = "n3oMXxkE5Oip8PUQQBs9bVw44PlEYStl";

export default function getGifs({ keyword = "morty" }) {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { title, id } = image;
        const url = image.images.original.url;
        return { title, id, url };
      });
      return gifs;
    });
}
