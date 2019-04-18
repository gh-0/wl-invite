import fetch from 'isomorphic-fetch';

const preOpts = {
  headers: {
    Authorization: 'Bearer 004FD89B536DD4038DA497B994D6CE92',
    'Content-Type': 'application/json',
  },
  body: {},
};

export default async (url, opts = {}) => {
  if (process.env.NODE_ENV === 'development') url = '/2api' + url;
  const res = await fetch(url, {
    ...preOpts,
    ...opts,
    body: JSON.stringify({ ...preOpts.body, ...opts.body }),
  });
  const data = await res.json();
  return data;
};
