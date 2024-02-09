import { topDealUsers } from ".."

const TopBox = () => {
  return (
    <div>
        <h1 className="text-[2rem] font-bold pb-3">Top Deals</h1>
        <div className="w-full flex flex-col gap-5 py-5">
            {
                topDealUsers.map(user => (
                    <div
                         key={user.id}
                         >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <img src={user.img} alt={user.name} className="w-[45px] h-[45px] object-cover rounded-full"/>
                                    <div className="flex flex-col gap-1">
                                        <h1 className="text-[0.9rem]">{user.name}</h1>
                                        <span className="text-[0.8rem]">{user.email}</span>
                                    </div>
                                </div>
                                <div>
                                    <span>${user.amount}</span>
                                </div>
                            </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TopBox