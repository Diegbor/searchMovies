import { useEffect, useState } from 'react'
import getMovies from '../Utils/getMovies'

const useFetcher = (query = 'batman') => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getData = async () => {
    const { data } = await getMovies()
    if (data.Error) {
      setError(data.Error)
      setData([])
    } else {
      setData(data.Search)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [query])

  return { data, loading, error }
}

export default useFetcher
