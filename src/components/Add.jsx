import { IoClose } from "react-icons/io5";

const Add = ({ slug, columns, setOpen }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        // add new item
    }
  return (
    <div className="modal w-full h-full absolute top-0 left-0 text-white flex items-center justify-center">
        {/* modal */}
        <div className="p-[50px] rounded-[10px] bg-mainBg relative">
            <span><IoClose onClick={()=> setOpen(false)} className="text-[1.3rem] absolute top-[10px] right-[10px]"/></span>
            <h1 className="mb-[40px] text-[24px] text-softColor">Add new {slug}</h1>
            <form onSubmit={handleSubmit} className="flex max-w-[500px] justify-between flex-wrap">
                {columns.
                    filter(item=>item.field !== "id" && item.field !== "img")
                    .map((column) => (
                        <div key={column.headerName} className="flex flex-col gap-[10px] mb-5">
                            <label className="text-[14px]">{column.headerName}</label>
                            <input className="p-[10px] bg-transparent text-white outline-none border border-softColor rounded-[3px]" type={column.type} placeholder={column.field}/>
                        </div>
                    ))
                }
                <button className="w-[100%] p-[10px] cursor-pointer bg-white text-softBg">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Add