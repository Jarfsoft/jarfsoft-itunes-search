export const getContent = (search, sendData) => {
  const url = new URL("https://itunes.apple.com/search");
  const params = {
    term: search,
    media: "music",
    entity: "song",
    attribute: 'songTerm',
    limit: 6,
  };
  url.search = new URLSearchParams(params);
  sendData('Loading');
  fetch(url, { method: "POST" })
    .then((results) => results.json())
    .then((data) => {
      sendData(data.results);
    });
};

export const getAlbums = (artist, sendData) => {
  const url = new URL("https://itunes.apple.com/search");
  const params = {
    term: artist,
    media: "music",
    entity: "album",
  };
  url.search = new URLSearchParams(params);
  fetch(url, { method: "POST" })
    .then((results) => results.json())
    .then((data) => {
      sendData(data.results.filter((a) => a.trackCount > 1));
    });
};
