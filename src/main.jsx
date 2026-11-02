import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const kok = document.getElementById('root')
// "/gardirop", "/gardirop/" ve "/gardirop.html" aynı sayfayı açar.
const yol = window.location.pathname.replace(/(\.html)?\/*$/, '') || '/'

// Build'de HTML önceden üretilir (scripts/prerender.js); geliştirme sunucusunda #root boş gelir.
if (kok.hasChildNodes()) {
  hydrateRoot(kok, <App yol={yol} />)
} else {
  createRoot(kok).render(<App yol={yol} />)
}
