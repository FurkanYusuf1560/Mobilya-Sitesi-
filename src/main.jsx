import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const kok = document.getElementById('root')

// Build'de HTML önceden üretilir (scripts/prerender.js); geliştirme sunucusunda #root boş gelir.
if (kok.hasChildNodes()) {
  hydrateRoot(kok, <App />)
} else {
  createRoot(kok).render(<App />)
}
