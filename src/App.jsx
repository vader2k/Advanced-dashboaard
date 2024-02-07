import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"
import Users from "./pages/Users"
import Products from "./pages/Products"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'users',
      element: <Users />
    },
    {
      path: '/products',
      element: <Products />
    },
  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App