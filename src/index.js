
// main
import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
// list
import { FiUsers } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { IoReceiptOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
// general
import { SiElementary } from "react-icons/si";
import { CiStickyNote } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
// maintenance
import { IoSettingsOutline } from "react-icons/io5";
import { LuDatabaseBackup } from "react-icons/lu";
// analytics
import { IoBarChartOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";

export const sidebarItems = [
    {
      id: 1,
      title: "MAIN",
      content: [
        {
            id: 1,
            title: "Homepage",
            path: '/',
            icon: IoHomeOutline
        },
        {
            id: 2,
            title: "profile",
            path: '/users/1',
            icon: GoPerson 
        },

      ]

    },
    {
        id:2,
        title: "LISTS",
        content: [
            {
                id:1,
                title: "Users",
                path: '/users',
                icon: FiUsers
            },
            {
                id:2,
                title: "Products",
                path: '/products',
                icon: BsCart3
            },
            {
                id:3,
                title: "Orders",
                path: '/',
                icon: IoReceiptOutline
            },
            {
                id:4,
                title: "Posts",
                path: '/',
                icon: GoBook
            },
        ]
    },
    {
        id:3,
        title: "GENERAL",
        content: [
            {
                id:1,
                title: "Elements",
                path: '/',
                icon: SiElementary
            },
            {
                id:2,
                title: "Notes",
                path: '/',
                icon: CiStickyNote
            },
            {
                id:3,
                title: "Forms",
                path: '/',
                icon: FaWpforms
            },
            {
                id:4,
                title: "Calender",
                path: '/',
                icon: SlCalender
            },
        ]
    },
    {
        id: 4,
        title: "MAINTENANCE",
        content: [
          {
              id: 1,
              title: "Settings",
              path: '/',
              icon: IoSettingsOutline
          },
          {
              id: 2,
              title: "Backup",
              path: '/',
              icon: LuDatabaseBackup
          },
  
        ]
  
      },
      {
        id: 5,
        title: "ANALYTICS",
        content: [
          {
              id: 1,
              title: "Charts",
              path: '/',
              icon: IoBarChartOutline 
          },
          {
              id: 2,
              title: "Logs",
              path: '/',
              icon: HiOutlineDocumentReport
          },
  
        ]
  
      },
]

export const topDealUsers = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Elva McDonald",
        email: "elva@gmail.com",
        amount: "3.668"
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Linnie Nelson",
        email: "linnie@gmail.com",
        amount: "3.258"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Brent Reeves",
        email: "brent@gmail.com",
        amount: "2.958"
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Adeline Watson",
        email: "adeline@gmail.com",
        amount: "2.508"
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Juan Harrison",
        email: "juan@gmail.com",
        amount: "2.323"
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Augusta McGee",
        email: "augusta@gmail.com",
        amount: "2.008"
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Angel Thomas",
        email: "angel@gmail.com",
        amount: "1.008"
    },
]