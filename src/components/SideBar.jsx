import { Link } from "react-router-dom"
import { sidebarItems } from '..'

const SideBar = () => {
  return (
    <aside className="flex flex-col gap-6">
      { sidebarItems.map((item) => (
        <div 
          key={item.id}
          className="flex flex-col gap-2">
          <span className="text-[0.7rem] text-softColor">{item.title}</span>
          {
           item.content.map((content) => (
            <Link 
              key={content.id}
              to={`${content.path}`}
              className="flex items-center gap-2 hover:bg-softBg p-2 rounded-md">
                {<content.icon />}
                <span>{content.title}</span>
            </Link>
           )) 
          }
      </div>
      ))}
    </aside>
  )
}

export default SideBar