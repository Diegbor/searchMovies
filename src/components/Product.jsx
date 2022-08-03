import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data'

const Product = () => {
  const { productId } = useParams()
  const navigate = useNavigate()

  const uniqueProducts = products.find(item => item.id === Number(productId))

  useEffect(() => {
    !uniqueProducts && navigate('/404')
  }, [])

  return uniqueProducts && (
    <article className='text-dark'>
      <img height={300} src={uniqueProducts?.thumbnail} alt={uniqueProducts?.title} className='img-fluid' />
      <div className='mt-4'>
        <p>{uniqueProducts?.title}</p>
        <p>{uniqueProducts?.description}</p>
      </div>
    </article>
  )
}

export default Product
