import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layouts/Layout.tsx'
import Home from './pages/Home/Home.tsx'
import Main from './pages/Main/Main.tsx'
import Bye from './pages/Bye/Bye.tsx'

import './index.css'
import './styles/_reset.css'
// import App from './App.tsx'


const router = createBrowserRouter([{
  path: '/',
  element: <Layout></Layout>,
  children: [
    { index: true, element: <Home />},
    { path: 'Main', element: <Main />},
    { path: 'Bye', element: <Bye />},
    { path: '*', element: <div>404</div>}

  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
