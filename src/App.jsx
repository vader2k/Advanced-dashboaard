import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Users from "./pages/Users"
import Products from "./pages/Products"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"
import Login from "./pages/Login"
import UserDetails from "./pages/UserDetails"
import ProductDetails from "./pages/ProductDetails"
const App = () => {

const Layout = () => {
  return (
    <div className="main bg-mainBg text-mainColor">
      <Navbar />
      <div className="flex">
        <div className="w-max lg:w-[250px] py-[5px] px-[20px] border-r-2 border-softBg">
          <SideBar />
        </div>
        <div className="px-[5px] py-[20px] w-[100%]">
          <Outlet />
        </div>
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
          path: '/users',
          element:<Users />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/user/:id',
          element: <UserDetails />
        },
        {
          path: '/product/:id',
          element: <ProductDetails />
        }
      ]
    },
    {
      path: '/login',
      element:<Login />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App