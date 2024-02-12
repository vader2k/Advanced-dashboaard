
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
            path: '/user/1',
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
        img: "https://images.unsplash.com/photo-1531525797753-909788106ccb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Game boy Advacnce",
        color: "Blue",
        producer: "Gameboy",
        createdAt: "01.02.2023",
        price: "$40.25",
        inStock: true,
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Xbox series X",
        color: "white",
        producer: "Microsoft",
        createdAt: "01.02.2023",
        price: "$500.99",
        inStock: false,
    },
    {
        id: 3,
        img: "https://media.istockphoto.com/id/1480815059/photo/3d-minimal-portable-game-controller-video-game-entertainment-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=x_HycFCnMOTFmfSEkCFu1FGgMhb-34aMVoo6FngA_us=",
        title: "Nitendo Switch",
        color: "white",
        producer: "Nitendo",
        createdAt: "01.02.2023",
        price: "#60.99",
        inStock: true,
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Play Station 5",
        color: "white",
        producer: "sony",
        createdAt: "01.02.2023",
        price: "$400",
        inStock: true,
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1600897425543-5369a38bd193?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Phillips Hue Play Gradient",
        color: "rainbow",
        producer: "philips",
        createdAt: "01.02.2023",
        price: "$39.99",
        inStock: true,
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1654087071458-c9b3f4c43f3f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Logitech Mx Master 3",
        color: "black",
        producer: "Logitech",
        createdAt: "01.02.2023",
        price: "$59.49",
        inStock: true,
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1531651008558-ed1740375b39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Rode Podcast Microphone",
        color: "gray",
        producer: "Rode",
        createdAt: "01.02.2023",
        price: "$899.99",
        inStock: false,
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1617861648989-76a572012089?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Toshiba Split Ac 2",
        color: "white",
        producer: "Toshiba",
        createdAt: "01.02.2023",
        price: "$119.49",
        inStock: false,
    },
    {
        id: 9,
        img: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Sony Bravia KDL-47W805A/",
        color: "white",
        producer: "sony",
        createdAt: "01.02.2023",
        price: "$120.01",
        inStock: false,
    },
    {
        id: 10,
        img: "https://images.unsplash.com/photo-1693206578613-144dd540b892?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Acer Laptop 16 KL-4804",
        color: "Black",
        producer: "Acer",
        createdAt: "01.02.2023",
        price: "$130.33",
        inStock: true,
    },
]


export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info: {
        productId: "Ps55DF113343d",
        color: "white",
        price: "$250.99",
        producer: "Sony",
        export : "japan",
    },
    chart: {
        datakeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "orders", color: "#888d48" }
        ],
        data: [
            {
                name: "Sun",
                visits: 4000,
                orders: 2400,
            },
            {
                name: "Mon",
                visits: 3000,
                orders: 1298,
            },
            {
                name: "Tue",
                visits: 2000,
                orders: 3800,
            },
            {
                name: "Wed",
                visits: 2700,
                orders: 3890,
            },
            {
                name: "Thu",
                visits: 1890,
                orders: 4800,
            },
            {
                name: "Fri",
                visits: 2390,
                orders: 3800,
            },
            {
                name: "Sat",
                visits: 3490,
                orders: 4300,
            },
        ],
    },
    activities: [
        {
            text: "John Doe Purchased Playstation 5 Digital Edition",
            time: "3 days ago"
        },
        {
            text: "John Doe added Playstation 5 into their wishlist",
            time: "1 week ago"
        },
        {
            text: "Mike Doe Purchased Playstation 5 Digital Edition",
            time: "2 weeks ago"
        },
        {
            text: "Anna Doe reviewed the product",
            time: "1 month ago"
        },
        {
            text: "Michael Doe added Purchased Playstation 5 Digital Edition into their wishlist",
            time: "1 month ago"
        },
        {
            text: "Helen Doe reviewed the product",
            time: "2 months ago"
        },
    ]
}

export const singleUser = {
    id: 1,
    title: "John Doe",
    img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
      username: "Johndoe99",
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      phone: "123 456 789",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "John Doe added 3 items into their wishlist",
        time: "1 week ago",
      },
      {
        text: "John Doe purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "1 month ago",
      },
      {
        text: "John Doe added 1 items into their wishlist",
        time: "1 month ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "2 months ago",
      },
    ],
  };