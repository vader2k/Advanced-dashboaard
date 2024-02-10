import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { Link } from "react-router-dom"

import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";

  
const DataTable = ({ rows, columns, slug }) => {

    const handleDelete = (id) => {
        console.log(id+ "has been deleted")
    }

    const actionColumn = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="flex gap-5 items-center text-[1.3rem]">
                    <Link to={`/${slug}/${params.row.id}`}>
                        <LiaEditSolid className="text-green-500"/>
                    </Link>
                    <MdDeleteOutline className="text-red-500" onClick={()=> handleDelete(params.row.id)}/>
                </div>
            )
        }
    }

  return (
    <div>
        <DataGrid
            className="bg-white p-5"
            rows={rows}
            columns={[...columns, actionColumn]}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 10,
                },
            },
            }}
            slots={{toolbar:GridToolbar}}
            slotProps={{
                toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                }
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            disableDensitySelector
            disableColumnSelector
        />
    </div>
  )
}

export default DataTable