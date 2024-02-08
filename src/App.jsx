import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Users from "./pages/Users"
import Products from "./pages/Products"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"
const App = () => {

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element:<Home />
        },
        {
          path: '/user',
          element:<Users />
        },
        {
          path: '/products',
          element: <Products />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App