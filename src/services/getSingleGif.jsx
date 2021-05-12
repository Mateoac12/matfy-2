import { BASE_URL, API_URL } from './settings'

const GetSingleGif = ({ paramID }) => {
  const SEARCH_URL = `${BASE_URL}/gifs/${paramID}?api_key=${API_URL}`

  const getInfoOfGifs = (data) => {
    const { id, title } = data
    const img = data.images.downsized_medium.url
    const gifs = {
      id,
      title,
      img
    }
    return gifs
  }

  return fetch(SEARCH_URL)
    .then(data => data.json())
    .then(res => res.data)
    .then(getInfoOfGifs)
}

export default GetSingleGif