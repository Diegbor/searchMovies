// Estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// Librerías
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Componentes
// import App from './components/App'
import Paths from './Paths'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </>
)
