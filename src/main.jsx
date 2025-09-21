import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import Profile from './components/Profile'

const router = createBrowserRouter([
  {
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
  ]
  }
  

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
