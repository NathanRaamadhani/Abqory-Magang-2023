import fetch from 'isomorphic-unfetch';

export async function fetchAPI(endpoint) {
  const apiUrl = 'http://localhost:1337/api/to-dos'; // Ganti dengan URL API Strapi Anda
  const res = await fetch(`${apiUrl}${endpoint}`);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
}
