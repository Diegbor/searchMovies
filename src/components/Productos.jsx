import { products } from '../data'
import { Link } from 'react-router-dom'

const Productos = () => {
  return (
    <ul className='row gy-3'>
      {
        products.map(item =>
          <li className='col-lg-3' key={item.id}>
            <Link to={`/portfolio/${item.id}`}>
              <article className='card text-dark'>
                <img height={300} src={item.thumbnail} alt={item.title} className='card-img-top' />
                <div className='card-body'>
                  <p className='card-title'>{item.title}</p>
                </div>
              </article>
            </Link>
          </li>)
      }

    </ul>
  )
}

export default Productos
