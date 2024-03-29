import TopBox from "../components/TopBox"
import ChartBox from "../components/ChartBox"
import BarChartBox from "../components/BarChartBox"
import PieChartBox from "../components/PieChartBox"
import BigChartBox from "../components/BigChartBox"


const Home = () => {
  return (
    <section className="grid gap-5 xxl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:px-5 px-3 grid-flow-dense">
      <div className="border border-softBg p-5 rounded-xl min-h-[180px] h-auto row-span-3">
        <TopBox />
      </div>

      <div className="border border-softBg p-5 rounded-xl min-h-[120px] sm:min-h-[180px] h-auto">
        <ChartBox
          title={"Total Users"} 
          number={11.238}
          link={"View all"}
          percentage={"45%"}
          varient={"text-gray-500 text-[2rem]"}
          col={"text-green-500"}
          color={'gray'}
        />
      </div>

      <div className="border border-softBg p-5 rounded-xl min-h-[120px] sm:min-h-[180px]h-auto">
        <ChartBox 
          title={"Total Products"}
          number={238}
          link={"View all"}
          percentage={"21%"}
          varient={"text-blue-200 text-[2rem]"}
          col={"text-green-500"}
          color={'skyblue'}
        />
      </div>

      <div className="border border-softBg p-5 rounded-xl mmin-h-[120px] sm:min-h-[180px] h-auto row-span-3">
        <PieChartBox />
      </div>

      <div className="border border-softBg p-5 rounded-xl min-h-[120px] sm:min-h-[180px] h-auto">
        <ChartBox
         title={"Total Revenue"}
         number={"$56.432"}
         link={"View all"}
         percentage={"-12%"}
         varient={"text-teal-200 text-[2rem]"}
         col={"text-red-500"}
         color={'teal'}
        />
      </div>
      
      <div className="border border-softBg p-5 rounded-xl min-h-[120px] sm:min-h-[180px] h-auto">
        <ChartBox 
          title={"Total Ratio"}
          number={2.6}
          link={"View all"}
          percentage={"12%"}
          varient={"text-yellow-200 text-[2rem]"}
          col={"text-green-500"}
          color={'gold'}
        />
      </div>

      <div className="border border-softBg p-5 rounded-xl min-h-[120px] sm:min-h-[180px] h-auto row-span-2 col-span-2 hidden md:block">
        <BigChartBox />
      </div>

      <div className="border border-softBg p-5 rounded-xl min-h-[120px] sm:min-h-[180px] h-auto">
        <BarChartBox
          title={"Total Visit"}
          color={'#8884d8'} 
          keys={"view"}
        />
      </div>

      <div className="border border-softBg p-5 rounded-xl min-h-[120px] sm:min-h-[180px] h-auto">
        <BarChartBox
          title={"Profit Earned"} 
          color={"#FF8042"}
          keys={"profit"}
        />
      </div>
    </section>
  )
}
export default Home
