import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Timer from './Timer.jsx'

const router  = createBrowserRouter([
    {path: '/', element:<App/>  },
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
