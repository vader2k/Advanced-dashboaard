import logo from '../assets/logo.png'
import jane from '../assets/jane.jpg'
import { CiSearch } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaExpandSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center p-5">
      {/* logo and name */}
      <div className='flex items-center gap-1'>
        <img src={logo} alt="logo" className='w-[35px] h-[35px]'/>
        <h1 className='text-[1.5rem]'>ADMIN</h1>
      </div>

    {/* icons, pictures and notification */}
      <div className='flex items-center gap-10'>
        {/* icons */}
        <div className='flex items-center gap-5 text-[1.5rem]'>
          <CiSearch />
          <RxDashboard />
          <LiaExpandSolid />
          <div className='relative'>
            <IoIosNotificationsOutline />
            <span className='absolute w-[20px] h-[20px] bg-red-500 flex items-center justify-center rounded-full top-[-13px] right-[-10px] text-[0.8rem]'>1</span>
          </div>
        </div>

        {/* profile pic */}
        <div className='flex items-center gap-3'>
          <img src={jane} alt="jane" className='w-[30px] h-[30px] object-cover rounded-full'/>
          <h1 className='font-bold'>Jane</h1>
        </div>

        {/* settings */}
        <div className='text-[1.5rem]'>
          <IoSettingsOutline />
        </div>
      </div>
    </nav>
  )
}

export default Navbar