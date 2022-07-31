import { useRef } from 'react'
import useFetcher from '../hooks/useFetcher'
import getMovies from '../Utils/getMovies'
import Loading from './Loading'
import Movies from './Movies'

function App () {
  const searchRef = useRef(null)
  const { data: movies, loading, error } = useFetcher()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const { data } = await getMovies(searchRef.current.value)
    // if (data.Error) {
    //   setError(data.Error)
    //   setMovies([])
    // } else {
    //   setMovies(data.Search)
    // }
    const { data } = await getMovies(searchRef.current.value)
    console.log(data)
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
