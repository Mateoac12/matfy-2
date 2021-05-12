import { BASE_URL, API_URL } from './settings'

export const getTrendingTerms = () => {
  return fetch(`${BASE_URL}/trending/searches?api_key=${API_URL}`)
    .then(res => res.json())
    .then(({ data }) => data)
}