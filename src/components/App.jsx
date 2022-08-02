import { useState, useRef } from 'react'
import useFetcher from '../hooks/useFetcher'

import Loading from './Loading'
import Movies from './Movies'

function App () {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('naruto')
  const { dataState: movies, loading } = useFetcher(query)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(searchRef.current.value)
    // searchRef.current.value
    e.target.reset()
  }

  return (
    <section className='container'>
      <h4 className='py-4 text-center'>Buscador de peliculas</h4>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            ref={searchRef} type='search'
            className='form-control' placeholder='Nombre de la película'
            name='buscador' autoFocus
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
