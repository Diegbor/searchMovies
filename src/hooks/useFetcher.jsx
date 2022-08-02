import { useEffect, useState } from 'react'
import { getMovies } from '../Utils/getMovies'

const useFetcher = (query) => {
  const [dataState, setDataState] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = await getMovies(query)
    if (data.Response !== 'False') {
      setDataState(data.Search)
    } else {
      setDataState([])
    }
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [query])

  return { dataState, loading }
}

export default useFetcher
