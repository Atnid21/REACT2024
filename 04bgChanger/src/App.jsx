import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor("red")}
              className="outline-none px-4 rounded-xl"
              style={{ backgroundColor: "red", color: "black" }}
            >
              Red
            </button>
            <button onClick={()=>setColor("white")}
              className="border-solid border-2 border-black   px-4 rounded-xl"
              style={{ backgroundColor: "white", color: "black" }}
            >
              White
            </button>
            <button onClick={()=>setColor("black")}
              className="outline-none px-4 rounded-xl"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Black
            </button>
            <button onClick={()=>setColor("violet")}
              className="outline-none px-4 rounded-xl"
              style={{ backgroundColor: "violet", color: "white" }}
            >
              Violet
            </button>
            <button onClick={()=>setColor("purple")}
              className="outline-none px-4 rounded-xl"
              style={{ backgroundColor: "purple", color: "white" }}
            >
              Purple
            </button>
            <button onClick={()=>setColor("olive")}
              className="outline-none px-4 rounded-xl"
              style={{ backgroundColor: "olive", color: "black" }}
            >
              Olive
            </button>
            <button onClick={()=>setColor("blue")}
              className="outline-none px-4 rounded-xl"
              style={{ backgroundColor: "blue", color: "black" }}
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
