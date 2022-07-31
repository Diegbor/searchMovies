import axios from 'axios'

const apiKey = 'ea92314d'

const getMovies = async (query) => {
  return await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
}

export default getMovies
