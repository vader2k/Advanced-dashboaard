import { DataGrid, GridToolbar } from "@mui/x-data-grid"

  
const DataTable = ({ rows, columns }) => {

  return (
    <div>
        <DataGrid
            className="bg-white p-5"
            rows={rows}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 5,
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