const getContent = (search, sendData) => {
  const url = new URL('https://itunes.apple.com/search');
  const params = { term: search, media: 'music' };
  url.search = new URLSearchParams(params);
  fetch(url, { method: 'POST' })
    .then(results => results.json())
    .then(data => {
      sendData(data.results);
    }) ;
};

export default getContent;