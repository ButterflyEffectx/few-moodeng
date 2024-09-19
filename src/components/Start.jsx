import { Link } from "react-router-dom"
function Start() {
  return (
    <>
        <div className="w-screen h-screen bg-[url('/src/images/bg.jpg')] bg-center bg-slate-400 bg-blend-multiply">
            <div className="container mx-auto">
                <div className="py-16 flex flex-col justify-center items-center">
                    <div className="text-center bg-white p-3 rounded-lg text-2xl font-bold shadow-lg">
                        <h1>MoodengGame</h1>
                    </div>
                    <div className="py-[16rem] ">
                        <Link to='/App'><button className="bg-red-600 py-2 px-4 text-2xl text-white font-bold rounded-xl shadow-2xl hover:bg-yellow-300 hover:text-black">Start!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Start