
const Dashboard = () => {
    return (
        <div className="flex flex-col gap-8 bg-black opacity-70 p-8 border-2 border-fourth-color rounded-2xl">
            <div className="flex items-center justify-between">
                <h1 className="text-xl lg:text-3xl text-fourth-color text-center my-3 font-bold">Dashboard</h1>
                <select name='' id='' className="border-none bg-main-color p-1.5 lg:p-2.5 font-semibold rounded-md text-white text-sm">
                    {["day","week","month"].map((item, index) => (
                        <option key={index} value="" className="bg-second-color text-white">1 {item}</option>

                    ))}

                </select>
            </div>
        </div>
    )
}

export default Dashboard
