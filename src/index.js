
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