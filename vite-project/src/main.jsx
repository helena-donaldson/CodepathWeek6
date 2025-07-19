import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './routes/Layout'
import BookView from './routes/BookView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} />
      <Route /> */}
      <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
      <Route path="/bookDetails/:cover_i" element={<BookView />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
