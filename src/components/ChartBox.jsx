import { FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const ChartBox = ({ title, number, link, percentage, varient, col, color, }) => {

    const data = [
        {
          name: 'Sun',
          users: 400,
        },
        {
          name: 'Mon',
          users: 600,
        },
        {
          name: 'Tue',
          users: 500,
        },
        {
          name: 'Wed',
          users: 700,
        },
        {
          name: 'Thu',
          users: 400,
        },
        {
          name: 'Fri',
          users: 500,
        },
        {
          name: 'Sat',
          users: 450
        },
      ];

  return (
    <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row h-[100%] w-full">
        {/* box info */}
        <div className="flex flex-col justify-between flex-[3] gap-3 sm:gap-0">
            <div className="flex items-center gap-3">
                <FaChartPie className={`${varient}`}/>
                <span className=" text-[1rem] md:text-[1.2rem] font-medium">{title}</span>
            </div>
            <p className="text-[1.3rem] md:text-[2rem] font-bold">{number}</p>
            <Link to={'/'} className="text-purple-400">
                {link}
            </Link>
        </div>
        {/* chart info */}
        <div className="flex flex-col justify-between items-end h-full flex-[2]">
            {/* responsive chart */}
            <div className="h-[50%] w-[100%]">
                <ResponsiveContainer width="99%" height="100%">
                    <LineChart data={data}>
                        <Tooltip
                            contentStyle={{ background: "transparent", border: "none"}}
                            labelStyle={{ display: "none"}}
                            position={{x: 10, y: 60}}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="users" 
                            stroke={color} 
                            strokeWidth={2} 
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