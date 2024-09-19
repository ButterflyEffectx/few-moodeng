import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StartPage from './Pages/StartPage.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([

  {
    path: '/',
    element: <StartPage />
  },
  {
    path: '/App',
    element: <App />
  },

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
