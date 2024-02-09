import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"


const data = [
    {
      name: 'Sun',
      view: 4000,
      profit: 4000,
    },
    {
      name: 'Mon',
      view: 3000,
      profit: 3000,
    },
    {
      name: 'Tue',
      view: 2000,
      profit: 2000,
    },
    {
      name: 'Wed',
      view: 2780,
      profit: 2780,
    },
    {
      name: 'Thu',
      view: 1890,
      profit: 1890,
    },
    {
      name: 'Fri',
      view: 2390,
      profit: 2390,
    },
    {
      name: 'Sat',
      view: 3490,
      profit: 3490,
    },
  ];

const BarChartBox = ({ title, color, keys }) => {
  return (
    <div className="w-full h-full">
        <h1 className="text-[20px] pb-5">{title}</h1>
        <div className="w-full h-full">
            <ResponsiveContainer width="100%" height={150}>
                <BarChart width={150} height={40} data={data}>
                <Tooltip
                    contentStyle={{ background:"#2a3447", borderRadius:"5px"}}
                    labelStyle={{display:"none"}}
                    cursor={{fill: "none"}}
                />
                <Bar dataKey={keys} fill={color} />
                </BarChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox