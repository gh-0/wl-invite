import fetch from 'isomorphic-fetch';

const getPreOpts = () => {
  const search = new URLSearchParams(window.location.search);
  const token = search.get('token') || '004FD89B536DD4038DA497B994D6CE92';
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: {},
  };
};

export default async (url, opts = {}) => {
  const preOpts = getPreOpts();
  if (process.env.NODE_ENV === 'development') url = '/2api' + url;
  else url = 'https://api.wenliaokeji.com/cors-api' + url;
  const res = await fetch(url, {
    ...preOpts,
    ...opts,
    body: JSON.stringify({ ...preOpts.body, ...opts.body }),
  });
  const data = await res.json();
  return data;
};
