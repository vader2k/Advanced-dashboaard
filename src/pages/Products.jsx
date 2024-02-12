import { useState } from "react";
import Add from "../components/Add"
import DataTable from "../components/DataTable"
import { ProductsRows } from "..";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field: 'img',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => {
          return (
              <img className="w-[32px] h-[32px] object-cover rounded-full" src={params.row.img} alt={params.row.title}/>
              )
          }
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 250,
    type: "string"
  },
  {
    field: 'color',
    headerName: 'Color',
    width: 150,
    type: "string"
  },
  {
      field: 'price',
      headerName: 'Price',
      width: 200,
      type: "number"
  },
  {
      field: 'producer',
      headerName: "Producer",
      width: 200,
      type: "string"
  },
  {
      field: 'createdAt',
      headerName: "Created At",
      width: 200,
      type: "string"
  },
  {
      field: 'inStock',
      headerName: "In Stock",
      width: 150,
      type: "boolean"
  }
];

const Products = () => {
  
  const [ open, setOpen ] = useState(false)

  return (
    <section className="p-5 w-full flex flex-col gap-5">
      <div className="flex w-full items-center gap-5 mb-5">
        <h1 className="text-white text-[2rem] font-medium">Products</h1>
        <button onClick={()=> setOpen(true)} className="bg-white text-[0.8rem] border rounded-xl text-black px-3 py-1">Add New Products</button>
      </div>
      {/* data grid */}
      <div>
        <DataTable slug="product" rows={ProductsRows} columns={columns}/>
      </div>
      {
        open && <Add setOpen={setOpen} slug="product" columns={columns}/>
      }
    </section>
  )
}

export default Products