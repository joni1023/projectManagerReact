import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import { Edit } from './Pages/Edit.jsx'
import { Create } from './Pages/Create.jsx'

const router = createBrowserRouter([
  {path:'/',
    element: <Home/>,
    errorElement: <h1>error</h1>
  },
  {path:'/home',
    element: <Home/>,
  },
  {path:'/Create',
    element: <Create/>
  },
  {path:'/edit',
    element: <Edit/>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
