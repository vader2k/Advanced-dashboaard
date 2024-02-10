import DataTable from "../components/DataTable"
import { UserRows } from '..'
import { useState } from "react";
import Add from "../components/Add";


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field: 'img',
      headerName: 'Avatar',
      width: 100,
      renderCell: (params) => {
          return (
              <img className="w-[32px] h-[32px] object-cover rounded-full" src={params.row.img || "/noavatar.png"} alt={`${params.row.firstName}`} />
              )
          }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    type: "string"
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    type: "string"
  },
  {
      field: 'email',
      headerName: 'Email',
      width: 200,
      type: "email"
  },
  {
      field: 'phone',
      headerName: "Phone",
      width: 200,
      type: "number"
  },
  {
      field: 'createdAt',
      headerName: "Created At",
      width: 200,
      type: "string"
  },
  {
      field: 'verified',
      headerName: "Verified",
      width: 150,
      type: "boolean"
  }
];

const Users = () => {

  const [ open, setOpen ] = useState(false)

  return (
    <section className="p-5 w-full flex flex-col gap-5">
      <div className="flex w-full items-center gap-5 mb-5">
        <h1 className="text-white text-[2rem] font-medium">Users</h1>
        <button onClick={()=> setOpen(true)} className="bg-white text-[0.8rem] border rounded-xl text-black px-3 py-1">Add New User</button>
      </div>
      {/* data grid */}
      <div>
        <DataTable slug="users" rows={UserRows} columns={columns}/>
      </div>
      {
        open && <Add setOpen={setOpen} slug="user" columns={columns}/>
      }
    </section>
  )
}

export default Users