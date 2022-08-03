import Navbar from './components/Navbar'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import App from './components/App'
import Productos from './components/Productos'
import Product from './components/Product'

const Paths = () => {
  return (
    <section className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='/movies' element={<App />} />
        <Route path='/portfolio' element={<Outlet />}>
          <Route index element={<Productos />} />
          <Route path='/portfolio/:productId' element={<Product />} />
        </Route>
        <Route path='/contact' element={<p>Contact</p>} />
        <Route path='/404' element={<p>404</p>} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </section>
  )
}

export default Paths
