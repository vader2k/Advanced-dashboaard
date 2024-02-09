import { FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const ChartBox = ({ title, number, link, percentage, varient, col, datas, dataKey, color, }) => {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

  return (
    <div className="flex h-[100%] w-full">
        {/* box info */}
        <div className="flex flex-col justify-between flex-[3]">
            <div className="flex items-center gap-3">
                <FaChartPie className={`${varient}`}/>
                <span className="text-[1.2rem] font-medium">{title}</span>
            </div>
            <p className="text-[2rem] font-bold">{number}</p>
            <Link to={'/'} className="text-purple-400">
                {link}
            </Link>
        </div>
        {/* chart info */}
        <div className="flex flex-col justify-between items-end h-full flex-[2]">
            {/* responsive chart */}
            <div className="h-[50%] w-[100%]">
                <ResponsiveContainer width="99%" height="100%">
                    <LineChart data={datas}>
                        <Tooltip
                            contentStyle={{ background: "transparent", border: "none"}}
                            labelStyle={{ display: "none"}}
                            position={{x: 10, y: 60}}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="pv" 
                            stroke="#8884d8" 
                            strokeWidth={2} 
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="text-right">
                <p className={`font-bold text-[20px] ${col}`}>{percentage}</p>
                <span className="text-[14px]">this month</span>
            </div>
        </div>
    </div>
  )
}

export default ChartBox