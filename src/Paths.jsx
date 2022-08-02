import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import App from './components/App'
import Productos from './components/Productos'
import Product from './components/Product'

const Paths = () => {
  return (
    <section className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<p>Home</p>} />
        <Route path='/about' element={<App />} />
        <Route path='/portfolio' element={<Productos />} />
        <Route path='/portfolio/:productId' element={<Product />} />
        <Route path='/contact' element={<p>Contact</p>} />
      </Routes>
    </section>
  )
}

export default Paths
