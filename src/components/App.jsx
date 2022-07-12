import { useState, useRef } from 'react'

const apiKey = 'ea92314d'

function App () {
  const [text, setText] = useState('')

  const searchRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchRef.current.value)
    setText('desde un evento')
  }

  console.log(text)

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
    </section>
  )
}

export default App
