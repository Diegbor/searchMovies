import { useParams } from 'react-router-dom'
import { products } from '../data'

const Product = () => {
  const { productId } = useParams()

  const uniqueProducts = products.find(item => item.id === Number(productId))

  return (
    <article className='text-dark'>
      <img height={300} src={uniqueProducts.thumbnail} alt={uniqueProducts.title} className='img-fluid' />
      <div className='mt-4'>
        <p>{uniqueProducts.title}</p>
        <p>{uniqueProducts.description}</p>
      </div>
    </article>
  )
}

export default Product
