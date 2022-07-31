import axios from 'axios'
import { useRef, useEffect, useState } from 'react'
import Loading from './Loading'
import Movies from './Movies'
const apiKey = 'ea92314d'

function App () {
  const searchRef = useRef(null)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getMovies = async (query = 'batman') => {
    return await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
  }

  const getData = async () => {
    const { data } = await getMovies()
    setMovies(data.Search)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await getMovies(searchRef.current.value)
    if (data.Error) {
      setError(data.Error)
      setMovies([])
    } else {
      setMovies(data.Search)
    }
  }

  return (
    <section className='container'>
      <h4 className='py-4 text-center'>Buscador de peliculas</h4>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            ref={searchRef} type='search'
            className='form-control' placeholder='Nombre de la película'
          />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
      <section className='py-4'>
        {loading ? <Loading /> : <Movies data={movies} />}
      </section>
    </section>
  )
}

export default App
