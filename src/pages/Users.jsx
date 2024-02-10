import DataTable from "../components/DataTable"
import { UserRows } from '..'


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field: 'avatar',
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
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
      field: 'email',
      headerName: 'Email',
      width: 200,
  },
  {
      field: 'phone',
      headerName: "Phone",
      width: 200,
  },
  {
      field: 'createdAt',
      headerName: "Created At",
      width: 200,
  },
  {
      field: 'verified',
      headerName: "Verified",
      width: 150,
  }
];

const Users = () => {

  return (
    <section className="p-5 w-full flex flex-col gap-5">
      <div className="flex w-full items-center gap-5">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      {/* data grid */}
      <div>
        <DataTable rows={UserRows} columns={columns}/>
      </div>
    </section>
  )
}

export default Users