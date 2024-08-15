import { useState } from "react";
import './index.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> react with redux </h1>

      <div className="h-screen w-full flex justify-center items-center" >
        <div className="flex border-blue-400 rounded-md bg-slate-50 p-10  ">
          <button className="px-3 py-2 rounded-md bg-green-500 text-2xl font-semibold text-white" >
            increment
          </button>

          <h1 className="text-3xl mx-10" >0</h1>

          <button className="px-3 py-2 rounded-md bg-red-500 text-2xl font-semibold text-white" >
            decrement
          </button>
          
        </div>
      </div>

    </>
  );
}

export default App;
