import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/pages/Home'
import Headers from './components/common/Header'
import Footer from './components/common/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Headers/>
   <Home/>
   <Footer/>
  </StrictMode>,
)
