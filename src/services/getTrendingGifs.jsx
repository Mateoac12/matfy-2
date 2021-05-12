import { BASE_URL, API_URL } from './settings'

const getInfoOfGifs = (data) => {
  return data.map(({ id, title, images }) => {
    const img = images.downsized_medium.url
    const gifs = {
      id,
      title,
      img
    }
    return gifs
  })
}

export const getTrendingGifs = () => {
  return fetch(`${BASE_URL}/gifs/trending?api_key=${API_URL}&limit=10`)
    .then(res => res.json())
    .then(({ data }) => data)
    .then(getInfoOfGifs)
}