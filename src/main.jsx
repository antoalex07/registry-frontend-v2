import { StrictMode, Suspense } from 'react'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Suspense fallback={
        
        <div className="loader-div">
          <span className="loader">
            <span></span>
            <span></span>
          </span>
        </div>
      
      }>
        <Routes>
          <Route path='/*' element={<App/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
