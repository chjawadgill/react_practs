import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Check from './Check.jsx'
import Multi from './Mul.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Check/>
    <Multi/>
  </StrictMode>,
)
