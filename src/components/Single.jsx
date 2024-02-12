import { Legend, Tooltip, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"



const Single = (props) => {
  return (
    <div className="flex px-3 sm:p-5 flex-col gap-[50px] xl:flex-row">
      {/* information */}
      <div className="flex-1">
        <div className="info">
          <div className="flex flex-col sm:flex-row items-center gap-[10px] sm:gap-[20px]">
            { props.img && <img className=" sm:w-[100px] sm:h-[100px] rounded-[20px] object-cover" src={props.img} alt="" />}
            <h1 className="font-medium sm:text-[1.3rem]">{props.title}</h1>
            <button className="text-[0.9rem] border bg-white rounded-xl px-2 text-black">Update</button>
          </div>

          <div className="text-[18px]">
            {
              Object.entries(props.info).map((item) => (
                <div className="my-[30px]" key={item[0]}>
                  <span className="font-semibold mr-[10px] capitalize">{item[0]}</span>
                  <span > {item[1]}</span>
              </div>
              ))
            }
          </div>
        </div>
        <hr className="w-[90%] my-[20px] mx-auto h-[0px] border-[0.5px] border-gray-600 "/>
        <div className="mt-[50px] w-[80%] h-[400px]">
          { props.chart && <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={props.chart.data}
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
              {props.chart.datakeys.map((datakey, index) => (
                <Line key={index} type="monotone" dataKey={datakey.name} stroke={datakey.color}/>
              ))}
            </LineChart>
        </ResponsiveContainer>}
        </div>
      </div>

      {/* activities */}
      <div className="flex- w-full1">
        <h2 className="mb-[20px]">Latest Activities</h2>
       { props.activities && <ul>
          { props.activities.map((activity) => (
            <li key={activity.text} className="items relative w-[1px] pt-[50px] bg-orange-500">
            <div className="w-full min-w-[300px] sm:min-w-[480px] p-4 bg-[#f45b6810]">
              <p className="mb-[5px] text-[0.85rem] sm:text-[1rem]">{activity.text}</p>
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