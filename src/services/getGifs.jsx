import { API_URL, BASE_URL } from './settings'

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

const getGifs = ({ keyword, newPage = 0 } = { keyword: null, newPage: 0 }) => {
  const SEARCH_URL = `${BASE_URL}/gifs/search?api_key=${API_URL}&q=${keyword}&limit=10&offset=${newPage * 10}&rating=g&lang=en`

  return fetch(SEARCH_URL)
    .then(res => res.json())
    .then(res => res.data)
    .then(getInfoOfGifs)
}

export default getGifs