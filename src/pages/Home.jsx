import TopBox from "../components/TopBox"
import ChartBox from "../components/ChartBox"

const Home = () => {
  return (
    <section className="grid gap-5 grid-cols-4 px-5">
      <div className="border border-softBg p-5 rounded-xl min-h-[180px] h-auto row-span-3">
        <TopBox />
      </div>
      <div className="border border-softBg p-5 rounded-xl min-h-[180px] h-auto">
        <ChartBox
          title={"Total Users"} 
          number={11.238}
          link={"View all"}
          percentage={"45%"}
          varient={"text-blue-500 text-[2rem]"}
          col={"text-green-500"}
        />
      </div>
      <div className="border border-softBg p-5 rounded-xl min-h-[180px] h-auto">
        <ChartBox />
      </div>
      <div className="border border-softBg p-5 rounded-xl min-h-[180px] h-auto row-span-3">
        box4
      </div>
      <div className="border border-softBg p-5 rounded-xl min-h-[180px] h-auto">
        <ChartBox />
      </div>
      <div className="border border-softBg p-5 rounded-xl min-h-[180px] h-auto">
        <ChartBox />
      </div>
      <div className="border border-softBg p-5 rounded-xl min-h-[180px] h-auto row-span-2 col-span-2">
        box7
      </div>
      <div className="border border-softBg p-5 rounded-xl min-h-[180px] h-auto">
        box8
      </div>
      <div className="border border-softBg p-5 rounded-xl min-h-[180px] h-auto">
        box9
      </div>
    </section>
  )
}
export default Home
