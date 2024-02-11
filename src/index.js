
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
            path: '/profile',
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


export const UserRows = [
    {
     id:1,
     img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Hubbard",
     firstName: "Eula",
     email:"kewez@gmail.com",
     phone: "123 456 879",
     verified: true,
     createdAt: "01.02.2024"
    },
    {
     id:2,
     img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Manning",
     firstName: "Stella",
     email:"manningS@gmail.com",
     phone: "123 456 879",
     verified: true,
     createdAt: "01.02.2024"
    },
    {
     id:3,
     img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Greer",
     firstName: "Mary",
     email:"greer@gmail.com",
     phone: "123 456 879",
     verified: true,
     createdAt: "01.02.2024"
    },
    {
     id:4,
     img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Williamson",
     firstName: "Mildered",
     email:"williams@gmail.com",
     phone: "013 256 879",
     verified: true,
     createdAt: "01.02.20204"
    },
    {
     id:5,
     img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Gross",
     firstName: "Joe",
     email:"grossgeb@yahoo.com",
     phone: "123 456 879",
     createdAt: "01.02.2024",
     verified: false
    },
    {
     id:6,
     img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Sharp",
     firstName: "Stacy",
     email:"stacysSp@gmail.com",
     phone: "103 346 479",
     verified: true,
     createdAt: "02.02.2024"
    },
    {
     id:7,
     img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Gabriela",
     firstName: "sylvia",
     email:"gabriela@gmail.com",
     phone: "023 146 579",
     createdAt: "02.03.2024",
     verified: false
    },
    {
     id:8,
     img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Kim",
     firstName: "Marthas",
     email:"kimmathias@gmail.com",
     phone: "021 436 579",
     createdAt: "02.03.2024",
     verified: false
    },
    {
     id:9,
     img: "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Jack",
     firstName: "Fingham",
     email:"jackimgfig@yahoo.com",
     phone: "123 456 879",
     createdAt: "03.02.2024",
     verified: false
    },
    {
     id:10,
     img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Joseph",
     firstName: "Mark",
     email:"josephine@gmail.com",
     phone: "023 153 479",
     verified: true,
     createdAt: "03.02.20204"
    },
    {
     id:11,
     img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Rachel",
     firstName: "McBeth",
     email:"summarae@gmail.com",
     phone: "420 256 379",
     verified: true,
     createdAt: "02.04.2024"
    },
    {
     id:12,
     img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Tyler",
     firstName: "Nix",
     email:"tyleroriginal@hotmail.com",
     phone: "451 056 329",
     verified: true,
     createdAt: "05.03.2024"
    },
    {
     id:13,
     img: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Vera",
     firstName: "vivian",
     email:"veeve@gmail.com",
     phone: "021 256 479",
     createdAt: "05.04.2024",
     verified: false
    },
    {
     id:14,
     img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Tracy",
     firstName: "Edera",
     email:"Tracccee@gmail.com",
     phone: "223 046 579",
     verified: true,
     createdAt: "05.03.2024"
    },
    {
     id:15,
     img: "https://images.unsplash.com/photo-1596075780750-81249df16d19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     lastName: "Mark",
     firstName: "Forbes",
     email:"Mark@gmail.com",
     phone: "123 456 879",
     createdAt: "06.05.2024",
     verified: false
    },
   ];

export const ProductsRows = [
    {
        id: 1,
        img: "",
        title: "",
        color: "white",
        producer: "sony",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 2,
        img: "",
        color: "white",
        producer: "sony",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 3,
        img: "",
        color: "white",
        producer: "sony",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 4,
        img: "",
        color: "white",
        producer: "sony",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 5,
        img: "",
        color: "white",
        producer: "sony",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 6,
        img: "",
        color: "white",
        producer: "sony",
        createdAt: "01.02.2023",
        inStock: false,
    },
    {
        id: 7,
        img: "",
        title: "Rode Podcast Microphone",
        color: "gray",
        producer: "Rode",
        createdAt: "01.02.2023",
        inStock: false,
    },
    {
        id: 8,
        img: "",
        title: "Toshiba Split Ac 2",
        color: "white",
        producer: "Toshiba",
        createdAt: "01.02.2023",
        inStock: false,
    },
    {
        id: 9,
        img: "",
        title: "Sony Bravia KDL-47W805A/",
        color: "white",
        producer: "sony",
        createdAt: "01.02.2023",
        inStock: false,
    },
    {
        id: 10,
        img: "",
        title: "Acer Laptop 16 KL-4804",
        color: "Black",
        producer: "Acer",
        createdAt: "01.02.2023",
        inStock: true,
    },
]
