import moodeng from "./images/moodeng.jpg";
import strawberry from "./images/strawberry.png";
import potato from "./images/potato.png";
import apple from "./images/apple.png";
import few from "./images/few.jpg";

import { useEffect, useState } from "react";
export default function App() {
  const [size, setSize] = useState(150);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let img = document.getElementById("img");
    if (count >= 100) {
      img.src = few;
      setSize(500);
    }
  }, [count]);

  return (
    <>
      <div className="w-screen h-screen bg-[url('/src/images/bg.jpg')] bg-center bg-slate-400 bg-blend-multiply">
        <div className="container mx-auto">
          <div className="pt-24 flex flex-col justify-center items-center">
            <div className=" w-screen h-56 flex justify-center items-center overflow-hidden">
              <div className="rounded-lg drop-shadow-xl border">
                <img
                  id="img"
                  src={moodeng}
                  alt="moodeng"
                  style={{
                    width: `${size}px`,
                    transition: "width 0.3s ease-in-out",
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-1/3 space-y-10 py-16 md:flex md:w-1/6  md:justify-center md:items-center md:space-y-0 md:gap-5">
                <img
                  src={strawberry}
                  alt="strawberry"
                  className="rounded-full cursor-pointer"
                  onClick={() => {
                    setCount(count + 5);
                    setSize(size + 10);
                  }}
                />
                <img
                  src={potato}
                  alt="potato"
                  className="rounded-full cursor-pointer"
                  onClick={() => {
                    setCount(count + 10);
                    setSize(size + 20);
                  }}
                />
                <img
                  src={apple}
                  alt="apple"
                  className="rounded-full cursor-pointer"
                  onClick={() => {
                    setCount(count + 15);
                    setSize(size + 30);
                  }}
                />
              </div>
            </div>
            <div className="text-white font-bold text-center shadow-2xl text-2xl flex justify-between w-2/3">
              <h1>Level : {count}</h1>
              <h1
                className="underline cursor-pointer hover:text-red-600"
                onClick={() => {
                  setCount(0);
                  setSize(150);
                  document.getElementById("img").src = moodeng;
                }}
              >
                →Reset←
              </h1>
            </div>
            <div className="p-4 bg-cyan-400 font-semibold rounded-lg">
              <h2>Strawberry = +5, Potato = +10, Apple = +15</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
