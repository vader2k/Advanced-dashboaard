import logo from '../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center p-3">
      {/* logo and name */}
      <div className='flex items-center gap-1'>
        <img src={logo} alt="logo" className='w-[40px] h-[40px]'/>
        <h1 className='font-bold text-[1.5rem]'>V</h1>
      </div>

    {/* icons, pictures and notification */}
      <div>

      </div>
    </nav>
  )
}

export default Navbar