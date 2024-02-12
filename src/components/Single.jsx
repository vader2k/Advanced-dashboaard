import { Legend, Tooltip, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"



const Single = ({ id, img, title, info, chart, name, activities, }) => {
  return (
    <div className="flex p-5">
      {/* information */}
      <div className="flex-1">
        <div className="info">
          <div className="flex items-center gap-[20px]">
            { img && <img className="w-[100px] h-[100px] rounded-[20px] object-cover" src={img} alt="" />}
            <h1 className="font-medium">{title}</h1>
            <button>Update</button>
          </div>

          <div className="text-[18px]">
            {
              info.map((item) => (
                <div className="my-[30px]" key={item[0]}>
                  <span className="font-semibold mr-[10px] capitalize">{item[0]}</span>
                  <span> {item[1]}</span>
              </div>
              ))
            }
          </div>
        </div>
        <hr className="w-[90%] my-[20px] mx-auto h-[0px] border-[0.5px] border-gray-600 "/>
        <div className="mt-[50px] w-[80%] h-[400px]">
          { chart && <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {chart.keys.map((datakey, index) => (
                <Line key={index} type="monotone" dataKey={datakey.name} stroke={datakey.color}/>
              ))}
            </LineChart>
        </ResponsiveContainer>}
        </div>
      </div>

      {/* activities */}
      <div className="flex-1">
        <h2 className="mb-[20px]">Latest Activities</h2>
       { activities && <ul>
          { activities.map((activity) => (
            <li key={activity.text} className="items relative w-[1px] pt-[50px] bg-orange-500">
            <div className="min-w-[480px] p-4 bg-[#f45b6810]">
              <p className="mb-[5px] ">{activity.text}</p>
              <time className="text-[12px]">{activity.time}</time>
            </div>
          </li>
          ))}
        </ul>}
      </div>
    </div>
  )
}

export default Single