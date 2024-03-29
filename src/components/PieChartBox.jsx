import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
    { name: "Mobile", value:400, color: "#0088FE" },
    { name: "Desktop", value:300, color: "#00C49F" },
    { name: "Laptop", value:300, color: "#FFBB28" },
    { name: "Tablet", value:200, color: "#FF8042" },
]
const PieChartBox = () => {
  return (
    <div className="h-full flex flex-col justify-between">
        <h1 className="text-[1.4rem] sm:text-[2rem] pb-5 font-bold">Leads by Source</h1>
        <div className="flex justify-center items-center w-full h-full">
            <ResponsiveContainer width="99%" height={300}>
                <PieChart >
                    <Tooltip 
                        contentStyle={{ background:"white", borderRadius:"5px" }}
                    />
                    <Pie
                    data={data}
                    innerRadius={"70%"}
                    outerRadius={"90%"}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((item) => (
                        <Cell 
                            key={item.name} 
                            fill={item.color} 
                        />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="flex justify-between gap-[10px] text-[14px] flex-wrap">
            {data.map(item => (
                <div key={item.name} className="flex flex-col gap-5 items-center">
                    <div className="flex gap-3 items-center">
                        <div className="w-[10px] h-[10px] rounded-[50%]" style={{ background: `${item.color}`}}/>
                        <span>{item.name}</span>
                    </div>
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PieChartBox