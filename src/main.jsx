import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

window.addEventListener('error', e => {
  document.body.innerHTML += `<div style="color:red;z-index:9999;position:fixed;top:0;left:0;background:black;padding:20px;">${e.message}<br/>${e.filename}:${e.lineno}</div>`;
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
